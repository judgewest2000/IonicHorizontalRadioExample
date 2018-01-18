import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SegmentRadioComponentListItems } from '../../components/segment-radio/segment-radio';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedId = new FormControl(2);

  showSelectedItem(){
    return this.items.filter(i => i.id === this.selectedId.value as number)[0];
  }

  items: SegmentRadioComponentListItems[] = [
    { id: 1, name: 'Coke' },
    { id: 2, name: 'Pepsi' },
    { id: 3, name: 'Sprite' },
    { id: 4, name: 'Dr Pepper' }
  ];

  constructor(public navCtrl: NavController) {

  }

}
 