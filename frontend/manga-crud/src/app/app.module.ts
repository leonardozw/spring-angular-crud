import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MangaDetailComponent } from './manga/manga-detail.component';
import { MangaFormComponent } from './manga/manga-form.component';
import { MangaComponent } from './manga/manga.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    MangaDetailComponent,
    NavbarComponent,
    MangaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'mangas', component: MangaComponent},
      {path: 'mangas/new', component: MangaFormComponent},
      {path: 'mangas/id/:id', component: MangaDetailComponent},
      {path: '', redirectTo: 'mangas', pathMatch: 'full'}, // default route
      {path: '**', redirectTo: 'mangas', pathMatch: 'full'} // 404 route, is this case redirect to default route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
