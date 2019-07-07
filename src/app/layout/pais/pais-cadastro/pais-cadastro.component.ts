import { PaisService } from './../pais.service';
import { AlertService } from './../../../shared/components/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pais-cadastro',
  templateUrl: './pais-cadastro.component.html',
  styleUrls: ['./pais-cadastro.component.scss']
})
export class PaisCadastroComponent implements OnInit {

  nomePais;
  dataForm: FormGroup;
  pais;
  error = { status: '' };

  constructor(private activatedRouter: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder,
    private paisService: PaisService) { }

  ngOnInit() {

    this.activatedRouter.paramMap.subscribe(params => {
      this.nomePais = params.get('filter');
      if (this.nomePais) {
        this.getPais(this.nomePais);
      }
    }, error => {
      console.log(error);
    });

    this.dataForm = this.fb.group({
      id: [null],
      nome: [null, Validators.required],
      sigla: [null, Validators.required],
      gentilico: [null, Validators.required]
    });

  }

  getPais(nome) {
    this.paisService.getPais(nome).subscribe(response => {
      let array = response;
      this.pais = array[0];
      console.log(response);
      this.dataForm.patchValue({
        id: this.pais.id,
        nome: this.pais.nome,
        gentilico: this.pais.gentilico,
        sigla: this.pais.sigla
      });
      console.log('pais get, dataform', this.dataForm);

      //this.dataForm.get('first').setValue('some value');
    }, error => {
      console.log(error);
      if (error.status == 401) {
        this.renovarToken();
      } else {
        this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
      }
    });
  }

  save() {
    this.pais.id = this.dataForm.value.id;
    this.pais.nome = this.dataForm.value.nome;
    this.pais.gentilico = this.dataForm.value.gentilico;
    this.pais.sigla = this.dataForm.value.sigla;

    this.renovaTokenCal(this.paisService.save(this.pais).subscribe(response => {
      console.log(response);
    }, error => {
      this.alertService.sendMessage({title: 'Atenção!', msg: 'Não foi possível salvar suas alterações, verifique sua conexão'});
    })
    );
  }
  renovaTokenCal(calback) {
    this.paisService.renovarToken().subscribe((response) => {
      if (response) {
        calback();
      } else {
        this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, faça login novamente.'});
      }
    }, error => {
      console.log(error);
      this.alertService.sendMessage({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
    });
  }
  delete(idPais) {
    this.paisService.delete(idPais).subscribe(response => {

    }, error => {

    });
  }

  renovarToken() {
    this.paisService.renovarToken().subscribe((response) => {
      if (response) {
      } else {
        this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, faça login novamente.'});
      }
    }, error => {
      console.log(error);
      this.alertService.warning({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
    });
  }

  goToList() {
    this.router.navigate(['/paislistagem']);
  }

}

export interface Pais {
  id: number;
  nome: string;
  sigla: string;
  gentilico: string;
}

