import { PaisCadastroComponent } from './pais-cadastro/pais-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaisListagemComponent } from './pais-listagem/pais-listagem.component';


const routes: Routes = [
    { path: '', component: PaisListagemComponent },
    { path: '/:id', component: PaisCadastroComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaisRoutingModule { }