import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../app/services/places.service';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(public navCtrl: NavController, public navParams: NavParams, private placesService: PlacesService,private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlace');
  }

  onAddPlace(value: {title: string}){

    this.placesService.addPlace({title: value.title, location: this.location});
    this.navCtrl.pop();
    
  }

  onLocateUser(){

    this.geolocation.getCurrentPosition()
      .then((location) => {

        console.log("Location fetched successfully");
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;

      })
      .catch((error) => {
        console.log("An error ocurred");
      });
  }

}
