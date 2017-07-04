import { AddPage } from './../add/add';
import { StoreService } from './../../services/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public list: Array<string>;
  
  constructor(public navCtrl: NavController, private store: StoreService) {

  }

  ionViewDidLoad() {
    //initiate the list on the first load
    this.list = this.store.getList();
  }

  /**
   * Go to add item page
   */
  public add() {
    this.navCtrl.push(AddPage);
  }

}
