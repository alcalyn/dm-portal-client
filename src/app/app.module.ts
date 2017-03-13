import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AuthenticationService } from './_service/authentication.service';
import { PortalApiService } from './_service/portal-api.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
        prefix: 'dm-portal',
        storageType: 'localStorage'
    }),
  ],
  providers: [
    AuthenticationService,
    PortalApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
