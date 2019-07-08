
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AlertService {

  constructor() { }

  private subject = new Subject<any>();

  // SUCCESS - VERDE
  success(message) {
    message.type = 'success';

    this.sendMessage(message);
  }

  // INFO - AZUL CLARO
  info(message) {
    message.type = 'info';

    this.sendMessage(message);
  }

  // WARNING - AMARELO
  warning(message) {
    message.type = 'warning';

    this.sendMessage(message);
  }

  // DANGER - VERMELHO
  danger(message) {
    message.type = 'warning';

    this.sendMessage(message);
  }

  sendMessage(message: any) {
      if (!message.type) {
        message.type = 'danger';
      }

      this.subject.next(message);
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
