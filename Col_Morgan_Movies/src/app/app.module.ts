import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';

import { HttpClientModule } from
"@angular/common/http";
import { HttpClientInMemoryWebApiModule } from
"angular-in-memory-web-api";
import { InMemoryDataService } from "./services/inmemory-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from'@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {RouterModule, Routes} from '@angular/router';
import { ContentDetialComponent } from './content-detial/content-detial.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentDetailComponent } from './content-detail/content-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    HoverAffectDirective,
    CreateContentComponent,
    MessagesComponent,
    ModifyContentComponentComponent,
    ContentDetialComponent,
    PageNotFoundComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
