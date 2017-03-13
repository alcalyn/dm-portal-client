import { Component } from '@angular/core';

import { User } from '../_model/user';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user = new User();
    submitted = false;
    authentication: AuthenticationService;

    constructor(authentication: AuthenticationService) {
        this.authentication = authentication;
    }

    onSubmit() {
        console.log('submit', this.user);
        this.submitted = true;
        this.authentication.login(this.user.username, this.user.password);
    }

}
