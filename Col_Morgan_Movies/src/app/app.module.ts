import { ApplicationRef, NgModule, isDevMode } from '@angular/core';
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
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker'
import { LogUpdateService } from './log-update.service';
import { concat, first, interval } from 'rxjs';

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
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private foodService: FoodService,
    private log: LogUpdateService,
    private appRef: ApplicationRef,
    private updates: SwUpdate
    ) {}

    ngOnInit(): void {
      this.log.init();
      // Allow the app to stabilize first
      // then poll for updates with interval()
      const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());

    }
 }
