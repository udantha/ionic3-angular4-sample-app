import { HomePage } from './../home/home';
import { StoreService } from './../../services/storage';
import { Component } from '@angular/core';
import { AlertController,  IonicPage,   NavController,   NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public thisItem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private store: StoreService, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.thisItem = '';
  }

  /**
   * Save the item in the store and return back to home screen
   */
  save() {
    if (this.thisItem != "") {
      //save it back
      this.store.addToList(this.thisItem)
      //Go back to home page, clearing history
      this.navCtrl.setRoot(HomePage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Item cannot be empty.',
        buttons: ['Okay']
      });
      alert.present();
    }
  }

}
