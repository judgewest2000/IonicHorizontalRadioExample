import { NgModule } from '@angular/core';
import { SegmentRadioComponent } from './segment-radio/segment-radio';
import { IonicPageModule } from 'ionic-angular/module';
@NgModule({
	declarations: [SegmentRadioComponent],
	imports: [
		IonicPageModule.forChild(SegmentRadioComponent)
	],
	exports: [SegmentRadioComponent]
})
export class ComponentsModule {}
