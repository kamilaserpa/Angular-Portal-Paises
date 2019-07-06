import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisRoutingModule } from './pais-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkTableModule } from '@angular/cdk/table';

import { PaisService } from './pais.service';
import { PaisListagemComponent } from './pais-listagem/pais-listagem.component';
import { PaisCadastroComponent } from './pais-cadastro/pais-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    PaisRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CdkTableModule,
    MatSortModule,
    MatToolbarModule
  ],
  exports: [],
  declarations: [PaisListagemComponent, PaisCadastroComponent],
  providers: [PaisService]

})
export class PaisModule { }
