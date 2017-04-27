import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../app/services/places.service';


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesService: PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlace');
  }

  onAddPlace(value: {title: string}){

    this.placesService.addPlace(value);
    
  }

}
