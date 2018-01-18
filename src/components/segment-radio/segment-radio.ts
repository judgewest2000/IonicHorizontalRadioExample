import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

/**
 * Generated class for the SegmentRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

export interface SegmentRadioComponentListItems {
  id: any;
  name: string;
}

@Component({
  selector: 'segment-radio',
  templateUrl: 'segment-radio.html'
})
export class SegmentRadioComponent {

  @Input() selectedId: AbstractControl;

  @Input() listitems: SegmentRadioComponentListItems[];

  myForm: FormGroup

  constructor() {
    console.log('Hello SegmentRadioComponent Component');
  }

  ngOnInit(){
    this.myForm = new FormGroup({item: this.selectedId});
  }

}
