import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatPaginatorModule, MatButtonModule
} from '@angular/material';
import { PaisService } from './pais.service';
import { PaisListagemComponent } from './pais-listagem/pais-listagem.component';
import { PaisCadastroComponent } from './pais-cadastro/pais-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CdkTableModule,
    FormModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSortModule,
    MatToolbarModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [PaisListagemComponent, PaisCadastroComponent],
  providers: [PaisService]

})
export class PaisModule { }
