import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  subscription: Subscription;
  title: string;
  msg: string;
  type: string;

  constructor(private elem: ElementRef,
  private alertService: AlertService) { }

  ngOnInit() {
    $(this.elem.nativeElement).css({
      position: 'fixed',
      width: '400px',
      top: '70px',
      right: '15px',
      zIndex: '1100'
    });

    $(this.elem.nativeElement).hide();

    this.subscription = this.alertService.getMessage().subscribe((data) => {
      this.title = data.title;
      this.msg = data.msg;
      this.type = data.type;

      $(this.elem.nativeElement).show();

      setTimeout(() => {
        $(this.elem.nativeElement).hide();
      }, 3000);
    });
  }

  onClickCloseButton() {
    $(this.elem.nativeElement).hide();
  }

}
