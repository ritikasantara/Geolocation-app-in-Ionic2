import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Place');
  }

  onDismiss(){

    this.viewCtrl.dismiss();
    
  }

}
