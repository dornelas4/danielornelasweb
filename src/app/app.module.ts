import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroComponent } from './home/intro/intro.component';
import { WhiteElephantPrivacyComponent } from './white-elephant-privacy/white-elephant-privacy.component';
import { WeddingComponent } from './wedding/wedding.component';
import { RsvpPageComponent } from './wedding/rsvp-page/rsvp-page.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { RsvpViewerComponent } from './wedding/rsvp-viewer/rsvp-viewer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    CvComponent,
    PageNotFoundComponent,
    IntroComponent,
    WhiteElephantPrivacyComponent,
    WeddingComponent,
    RsvpPageComponent,
    RsvpViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }