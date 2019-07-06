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
  roleAdmin = localStorage.getItem('admin');
  error = { status: '' };

  displayedColumns: string[] = ['id', 'nome', 'sigla', 'gentilico'];
  dataSource = new MatTableDataSource();

  // Variáveis para ordenação e paginação da tabela
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paisService: PaisService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.listarPaises();
  }

  listarPaises() {
    this.paisService.listar().subscribe((response: Pais[]) => {
      this.arrayPaises = response;

      // Montando Tabela, atribuindo ordenação e paginação
      this.dataSource = new MatTableDataSource(this.arrayPaises);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    }, error => {
      if (error.status == 401) {
        this.renovarToken();
      } else {
        this.alertService.warning('Por favor, verifique sua conexão');
      }
    });
  }

  renovarToken() {
    this.paisService.renovarToken().subscribe((response) => {
      if (response) {
        this.listarPaises();
      } else {
        this.alertService.warning('Por favor, faça login novamente.');
      }
    }, error => {
      console.log(error);
      this.alertService.warning('Por favor, verifique sua conexão');
    });
  }

  updatePais(pais) {
    if (this.roleAdmin) {
      this.router.navigate(['paislistagem/' + pais.id]);
    } else {
      this.alertService.sendMessage('Você não tem permissão para edição.');
    }
  }

}




export interface Pais {
  id: number;
  nome: string;
  sigla: string;
  gentilico: string;
}
