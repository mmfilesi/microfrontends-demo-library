import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnHatComponent } from './an-hat.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnHatComponent],
  exports: [AnHatComponent]
})
export class AnHatModule {}
