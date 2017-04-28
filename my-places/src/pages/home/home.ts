import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';
import { PlacesService } from '../../app/services/places.service';
import { Place } from '../../models/place.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: {title: string}[] = [];

  constructor(public navCtrl: NavController, 
              private placesService: PlacesService,
              private modalCtrl: ModalController) {

  }

  ionViewWillEnter(){

    this.placesService.getPlaces()
                      .then((places) =>  {

                        this.places = places;

                      }
                        
                      );
    
  }

  onLoadNewPlace(){

    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place){

    this.modalCtrl.create(PlacePage, place).present();
  }

    removeItem(place: Place){
 
      for(let i = 0; i < this.places.length; i++) {
  
        if(this.places[i] == place){
          this.places.splice(i, 1);
        }
 
    }

    }

}
