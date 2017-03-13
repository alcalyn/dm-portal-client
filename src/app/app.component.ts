import { Component, OnInit } from '@angular/core';
import { PortalApiService } from './_service/portal-api.service';
import { AuthenticationService } from './_service/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Articles';

    constructor(private portalApi: PortalApiService, private authentication: AuthenticationService) {
    }

    test() {
        console.log('get me');
        this.authentication.accessToken().first().subscribe(token => {
            this.portalApi.getMe(token).subscribe();
            this.portalApi.getArticles(token).subscribe();
        })
    }

    ngOnInit() {
        this.test();
    }
}
