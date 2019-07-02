import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ApiService {

    private url = 'http://localhost:8090/';

    public getBaseUrl() {
        return this.url;
    }

}