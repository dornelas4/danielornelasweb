import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhiteElephantPrivacyComponent } from './white-elephant-privacy/white-elephant-privacy.component';
import { WeddingComponent } from './wedding/wedding.component';


const routes : Routes = [
  { path : '', component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'cv', component : CvComponent},
  { path : 'about-me', component : AboutMeComponent},
  { path : 'white-elephant-privacy',component : WhiteElephantPrivacyComponent},
  { path : 'wedding', component: WeddingComponent},
  { path : 'not-found', component : PageNotFoundComponent},
  { path : '**' , redirectTo : '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }