import { ApiService } from './services/api.service';
import { AlertService } from './components/alert/alert.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
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
