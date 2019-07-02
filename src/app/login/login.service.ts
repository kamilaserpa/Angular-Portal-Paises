import { ApiService } from './../shared/services/api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    constructor(private api: ApiService,
        private http: HttpClient) { }

        public autenticar(login, senha) {
            return this.http.post(this.api.getBaseUrl() + 'usuario/autenticar?login=' + login + '&senha=' + senha, {});
        }

};
