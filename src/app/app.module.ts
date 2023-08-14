import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { enviroment } from 'src/environments/environment.prod'; // CONECTAMOS CON LA BD
import { AngularFireModule } from '@angular/fire/compat'; //
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule} from '@angular/fire/compat/storage'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
