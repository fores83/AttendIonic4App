import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
// import { SpeakersComponent, ScheduleComponent, DelegatesComponent, MessagesComponent } from './component';  
import {ScheduleComponent} from './schedule/schedule.component';
import {SpeakersComponent} from './speakers/speakers.component';
import {DelegatesComponent} from './delegates/delegates.component';
import {MessagesComponent} from './messages/messages.component';

@NgModule({
  declarations: [SpeakersComponent, ScheduleComponent, DelegatesComponent, MessagesComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [SpeakersComponent, ScheduleComponent, DelegatesComponent, MessagesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents:[SpeakersComponent, ScheduleComponent, DelegatesComponent, MessagesComponent],
  // entryComponents: [SpeakersComponent, ScheduleComponent, DelegatesComponent, MessagesComponent]
})
export class ComponentsModule { }
