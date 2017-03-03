import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PortalApiService } from './portal-api.service';

@Injectable()
export class AuthenticationService {

    constructor(private portalApi: PortalApiService) {
    }

    login(username: string, password: string) {
        return this.portalApi.getOAuthToken(username, password);
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}
