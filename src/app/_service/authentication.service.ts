import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { AccessToken } from '../_model/access-token';
import { PortalApiService } from './portal-api.service';

@Injectable()
export class AuthenticationService {

    private authentication: Subject<AccessToken>;

    constructor(private portalApi: PortalApiService) {
        this.authentication = new Subject();
    }

    login(username: string, password: string) {
        this.portalApi.getOAuthToken(username, password).subscribe(authentication => {
            this.authentication.next(authentication);
        });
    }

    logout() {
        this.authentication.error('unauthenticated');
    }

    accessToken() {
        return this.authentication.asObservable().map(authentication => authentication.access_token);
    }

}
