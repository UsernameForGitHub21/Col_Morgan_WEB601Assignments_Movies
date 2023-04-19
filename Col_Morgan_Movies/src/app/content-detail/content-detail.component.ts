import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { ContentListComponent } from '../helper-files/contentDb';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

  id: number;
  : Content;
  constructor(private route: ActivatedRoute,
  private contentService: ContentService) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
    this.id = +(params.get('id') ?? 0); // uses the +
    unary operator
    });


    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get("id") ?? 0);
      this.contentService.getContentItem(this.id)
      .subscribe((c) => {
      this.content = c;
      });
      });

      

      
    }

    getContentItem(id: number): Observable<Content>{
      console.log("Retrieving OBSERVABLE content item");
      return this.http.get<Content>("api/content/" + id);
      }
  
}






const routes: Routes = [
  {
  path: ""
  ,
  redirectTo: "/content"
  ,
  pathMatch: "full"
  ,
  },
  { path: "content"
  , component: ContentListComponent },
  { path: "content/:id"
  , component:
  ContentDetailComponent },
  { path: "**"
  , component: PageNotFoundComponent }
  ];

  