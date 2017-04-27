import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../app/services/places.service';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesService: PlacesService,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlace');
  }

  onAddPlace(value: {title: string}){

    this.placesService.addPlace(value);
    
  }

  onLocateUser(){

    this.geolocation.getCurrentPosition()
      .then((location) => {

        console.log("Location fetched successfully");

      })
      .catch((error) => {
        console.log("An error ocurred");
      });
  }

}
