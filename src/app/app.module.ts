import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
