import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ApiService {

    private url = 'http://localhost:8080/';

    public getBaseUrl() {
        return this.url;
    }

}