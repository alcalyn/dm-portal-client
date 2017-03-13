import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class PortalApiService {

    constructor(private http: Http) { }

    getOAuthToken(username: string, password: string) {
        let url: string = environment.portalApi.url + 'oauth/v2/token';
        let params: URLSearchParams = new URLSearchParams();

        params.set('grant_type', 'password');
        params.set('client_id', environment.portalApi.oauth.client.id);
        params.set('client_secret', environment.portalApi.oauth.client.secret);
        params.set('username', username);
        params.set('password', password);

        return this.http
            .get(url, {search: params})
            .map(result => result.json())
        ;
    }

    getMe(accessToken: string) {
        return this.http
            .get(environment.portalApi.url + 'api/users/me', {
                headers: this.createOAuthHeaders(accessToken),
            })
            .map(result => result.json())
        ;
    }

    getArticles(accessToken: string) {
        return this.http
            .get(environment.portalApi.url + 'api/articles', {
                headers: this.createOAuthHeaders(accessToken),
            })
            .map(result => result.json())
        ;
    }

    private createOAuthHeaders(accessToken: string) {
        let headers = new Headers();

        headers.append('Authorization', 'Bearer ' + accessToken);

        return headers;
    }

}
