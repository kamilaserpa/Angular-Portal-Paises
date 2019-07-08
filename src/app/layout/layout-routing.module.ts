import { PaisListagemComponent } from './pais/pais-listagem/pais-listagem.component';
import { PaisCadastroComponent } from './pais/pais-cadastro/pais-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'paislistagem'
            },
            {
                path: 'paislistagem',
                component: PaisListagemComponent
            },
            {
                path: 'paiscadastro',
                component: PaisCadastroComponent
            },
            {
                path: 'paiscadastro/:filter',
                component: PaisCadastroComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
