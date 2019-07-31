import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'program', loadChildren: './pages/program/program.module#ProgramPageModule'
      },
      {
        path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule'
      },
      {
        path: 'info', loadChildren: './pages/info/info.module#InfoPageModule'
      },
      {
        path: 'networking', loadChildren: './pages/networking/networking.module#NetworkingPageModule'
      },
      {
        path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule'
      },
      {
        path: '',
        redirectTo: '/tabs/program',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/program',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
