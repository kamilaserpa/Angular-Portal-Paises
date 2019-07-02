import { ApiService } from './services/api.service';
import { AlertService } from './components/alert/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    AlertService,
    ApiService
  ]
})
export class SharedModule { }
