import { AlertService } from '../../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { PaisService } from '../pais.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-pais-listagem',
  templateUrl: './pais-listagem.component.html',
  styleUrls: ['./pais-listagem.component.scss']
})

export class PaisListagemComponent implements OnInit {

  arrayPaises: Pais[] = [];
  roleAdmin = (localStorage.getItem('admin') === 'true');
  error = { status: '' };

  displayedColumns: string[];
  dataSource = new MatTableDataSource();

  // Variáveis para ordenação e paginação da tabela
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paisService: PaisService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.exibirColunas();
    this.listarPaises();
  }

  exibirColunas() {
    if (this.roleAdmin) {
      this.displayedColumns = ['id', 'nome', 'sigla', 'gentilico', 'btnExcluir'];
    } else {
      this.displayedColumns = ['id', 'nome', 'sigla', 'gentilico'];
    }
  }

  listarPaises() {
    this.renovaTokenCallback(() => {
      this.paisService.listar().subscribe((response: Pais[]) => {
        console.log('listar paises');
        this.arrayPaises = response;

        // Montando Tabela, atribuindo ordenação e paginação
        this.dataSource = new MatTableDataSource(this.arrayPaises);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }, error => {
        this.alertService.warning({ title: 'Atenção!', msg: 'Por favor, verifique sua conexão' });
      });
    }
    );
  }

  updatePais(pais) {
    console.log('update');
    if (this.roleAdmin) {
      this.router.navigate(['/paiscadastro/' + pais.nome]);
    } else {
      this.alertService.sendMessage({title: 'Ops!', msg: 'Você não tem permissão para edição.'});
    }
  }

  addPais() {
    this.router.navigate(['/paiscadastro']);
  }

  delete(idPais) {
    this.renovaTokenCallback(() => {
      this.paisService.delete(idPais).subscribe(response => {
        console.log(response);
        this.listarPaises();
        this.alertService.success({ title: 'Ok!', msg: 'País excluído com sucesso.'});
      }, error => {
        this.alertService.danger({ title: 'Atenção!', msg: 'Não foi possível excluir.'});
      });
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
      this.alertService.sendMessage({title: 'Atenção!', msg: 'Por favor, verifique sua conexão'});
    });
  }
  
}


export interface Pais {
  id: number;
  nome: string;
  sigla: string;
  gentilico: string;
}
