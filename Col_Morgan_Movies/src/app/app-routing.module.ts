import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  path: "content",
component: ContentListComponent,
];

@NgModule({
imports: [CommonModule, RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { 

  
}
