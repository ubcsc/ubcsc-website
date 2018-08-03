import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// neede for routing aka navigation
import { RouterModule, Routes } from '@angular/router';
// components in application included here
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
// for boostrapping


const appRoutes: Routes = [
    { path: '', component: HomePageComponent }  // this will be default route aka home-page
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
