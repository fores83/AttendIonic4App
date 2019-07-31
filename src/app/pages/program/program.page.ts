import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignInPage  } from '../pages'
import { AttendeeApiService } from '../../providers/attendee-api.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {

  speakers:any;
  agenda:any;
  constructor(private attendeeApi: AttendeeApiService, private modalCtrl: ModalController) {
  }
  currentView:string = 'schedule'
 
  async ShowUserDetailsModal (){
      const modal = await this.modalCtrl.create({
        component: SignInPage,
        componentProps: { value: 123 }
      });
      return await modal.present();
  }

  ngOnInit() {
    this.attendeeApi.getSpeakers().subscribe(data => this.speakers = data);
    this.attendeeApi.getAgenda().subscribe(data => this.agenda = data);
  }

}
