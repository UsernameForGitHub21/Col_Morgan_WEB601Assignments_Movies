import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContentListComponent } from '../helper-files/contentDb';
import { ContentDetailComponent } from '../content-detail/content-detail.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

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