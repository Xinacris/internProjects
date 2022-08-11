import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { RootChildComponent } from './root-child/root-child.component';
import { RootChild2Component } from './root-child2/root-child2.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      {
        path: 'content1',
        component: Content1Component
      }, {
        path: 'content2',
        component: Content2Component
      }, {
        path: 'content3',
        component: Content3Component
      }
    ]
  },
  {
    path: "page", component: PageComponent,
    children: [
      {
        path: 'root',
        component: RootChildComponent
      },
      {
        path: 'root2',
        component: RootChild2Component
      }
    ]
  },
  { path: "calculations", component: CalculationsComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
