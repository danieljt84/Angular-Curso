import { NgModule } from '@angular/core';
import { SiginComponent } from './signin/signon.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessagem/vmessage.module';
@NgModule({
    declarations: [SiginComponent],
    imports: [ReactiveFormsModule,CommonModule,VMessageModule]
})
export class HomeModule {

}