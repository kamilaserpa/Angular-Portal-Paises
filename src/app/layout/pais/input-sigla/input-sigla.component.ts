import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-sigla',
  templateUrl: './input-sigla.component.html',
  styleUrls: ['./input-sigla.component.scss']
})
export class InputSiglaComponent implements OnInit {

  constructor() {
    InputSiglaComponent.siglaDB.subscribe(response => {
      this.sigla = response;
    });
  }

  public static siglaDB: Subject<String> = new Subject<string>();

  @Output() inputSigla: EventEmitter<any> = new EventEmitter<any>();
 
  sigla;

  ngOnInit() { }

  public sendSigla() {
    this.sigla = this.sigla.toUpperCase();
    this.inputSigla.emit(this.sigla);
    console.log('emit', this.inputSigla);
  }

}
