import { InputSiglaComponent } from './../input-sigla/input-sigla.component';
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
  error = { status: '' };
  inputSigla;
  pais = {
    id: '',
    nome: '',
    sigla: '',
    gentilico: ''
  };

  constructor(private activatedRouter: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder,
    private paisService: PaisService) { }

  ngOnInit() {

    // Recebe parâmetro com nome do país
    this.activatedRouter.paramMap.subscribe(params => {
      this.nomePais = params.get('filter');
      if (this.nomePais) {
        this.getPais(this.nomePais);
      }
    }, error => {
      console.log(error);
    });
     this.criaForm(); 
  }

  public criaForm() {
    this.dataForm = this.fb.group({
      id: [null],
      nome: [null, Validators.required],
      sigla: [null, Validators.required],
      gentilico: [null, Validators.required]
    });
  }

  // Insere no formulário dado digitado no componente filho InputSiglaComponent
  public getSigla (inputSigla: any) : void {
    this.dataForm.patchValue({sigla: inputSigla});
  }

  getPais(nome) {
    this.renovaTokenCallback(() => {
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
          // Envia sigla recebida do DataBase para o component filho InputSiglaComponent
          InputSiglaComponent.siglaDB.next(this.pais.sigla);
        }, error => {
          console.log(error);
          this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, verifique sua conexão' });
        });
      });
  }

  save() {
    // Verifica formulário
    if (this.dataForm.invalid) {
      this.alertService.warning({ title: 'Atenção!', msg : 'Campo(s) inválido(s)!' });
    } else {
      if (this.dataForm.value.id) {
        this.pais.id = this.dataForm.value.id;
      }
      this.pais.nome = this.dataForm.value.nome;
      this.pais.gentilico = this.dataForm.value.gentilico;
      this.pais.sigla = this.dataForm.value.sigla;

      this.renovaTokenCallback(() => {
        this.paisService.save(this.pais).subscribe(response => {
          console.log(response);
          this.alertService.success({ title: 'OK!', msg: 'Cadastro efetuado com sucesso!' });
        }, error => {
          this.alertService.sendMessage({ title: 'Atenção!', msg: 'Não foi possível salvar suas alterações, verifique sua conexão' });
        });
      });
    }
  }

  delete() {
    this.renovaTokenCallback(() => {
      this.paisService.delete(this.pais.id).subscribe(response => {
      console.log(response);
      if (response) {
        this.router.navigate(['/paislistagem']);
        this.alertService.success({title: 'Ok!', msg: 'País excluído com sucesso.'});
      } else {
        this.alertService.sendMessage({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
      }
    }, error => {
      this.alertService.sendMessage({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
    })
  });
  }

  // Função modularizada para renovar o token antes das requisições
  renovaTokenCallback(callback: any): void {
    this.paisService.renovarToken().subscribe((response) => {
      console.log('renovar callback');
      if (response) {
       callback();
      } else {
        this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, faça login novamente.'});
      }
    }, error => {
      console.log(error);
      this.alertService.sendMessage({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
    });
  }

  goToList() {
    this.router.navigate(['/paislistagem']);
  }

}


