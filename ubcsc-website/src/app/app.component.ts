import { Component, OnInit } from '@angular/core';

import {AfterViewInit, ComponentFactory, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {FooterPageComponent} from './footer-page/footer-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ubcsc-website';

  titleNameUb = 'University of Buea';

  titleNameDpt = 'Department of Computer Science';

  componentRef: any;
  factory: any;

  @ViewChild('Body', { read: ViewContainerRef }) bodyEntryPage: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  public loadPage(page) {
    console.log(page);
    if ( page === 'HomePageComponent' ) {
      this.bodyEntryPage.clear();
      this.factory = this.resolver.resolveComponentFactory(HomePageComponent);
      this.componentRef = this.bodyEntryPage.createComponent(this.factory);
    } else if (page === 'LoginPageComponent') {
      this.bodyEntryPage.clear();
      this.factory = this.resolver.resolveComponentFactory(LoginPageComponent);
      this.componentRef = this.bodyEntryPage.createComponent(this.factory);
    }
  }

  ngOnInit() {
    this.bodyEntryPage.clear();
    this.factory = this.resolver.resolveComponentFactory(HomePageComponent);
    this.componentRef = this.bodyEntryPage.createComponent(this.factory);
  }
}
