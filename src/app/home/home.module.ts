import { NgModule } from '@angular/core';
import { SiginComponent } from './signin/signon.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [SiginComponent],
    imports: [ReactiveFormsModule,CommonModule]
})
export class HomeModule {

}