import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../shared/components/alert/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder,
        private loginService: LoginService) {}

    dataForm: FormGroup;
    usuario: any ={
        administrador: null,
        autenticado: null,
        login: null,
        nome: null,
        token: null
    }

    ngOnInit() {
        this.dataForm = this.fb.group({
            login: [null, Validators.required],
            senha: [null, Validators.required],
        });
    }

    onLogin(usuario) {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', usuario.token);
        localStorage.setItem('admin', usuario.administrador);
        localStorage.setItem('nome', usuario.nome);
        this.router.navigate(['/paislistagem']);
    }

    ngOnSubmit() {
        if (this.dataForm.invalid) {
            this.alertService.warning({ title: 'Atenção!', msg : 'Campo(s) inválido(s)!' });
        } else {
            let login = this.dataForm.value.login;
            let senha = this.dataForm.value.senha;

            this.loginService.autenticar(login, senha).subscribe(
            response => {
                this.usuario = response;
                if (this.usuario.autenticado) {
                    this.onLogin(this.usuario);
                } else {
                    this.alertService.sendMessage({ title: 'Atenção!', msg: 'Verifique os dados de acesso (login, senha).'})
                }
            }, error => {
                this.alertService.warning({ title: 'Atenção!', msg: 'Verifique sua conexão.'})
            });
        }
    }

}
