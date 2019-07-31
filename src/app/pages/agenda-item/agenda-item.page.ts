import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {  NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.page.html',
  styleUrls: ['./agenda-item.page.scss'],
})
export class AgendaItemPage implements OnInit {
  item:any;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.item = params;
          
    });
  }
  showSpeaker(speaker) {
    let navigationExtras: NavigationExtras = {
      queryParams: speaker
    };
    this.navCtrl.navigateForward('speaker', navigationExtras);
  }

}
