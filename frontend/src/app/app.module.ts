import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogPreviewComponent } from './pages/home/blog-preview/blog-preview.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    NavbarComponent,
    BlogPreviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
