import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'activity-details', loadChildren: './pages/activity-details/activity-details.module#ActivityDetailsPageModule' },
  { path: 'agenda-item', loadChildren: './pages/agenda-item/agenda-item.module#AgendaItemPageModule' },
  { path: 'delegate-details', loadChildren: './pages/delegate-details/delegate-details.module#DelegateDetailsPageModule' },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: 'networking', loadChildren: './pages/networking/networking.module#NetworkingPageModule' },
  { path: 'program', loadChildren: './pages/program/program.module#ProgramPageModule' },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'speaker-details', loadChildren: './pages/speaker-details/speaker-details.module#SpeakerDetailsPageModule' },
  { path: 'survey', loadChildren: './pages/survey/survey.module#SurveyPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
