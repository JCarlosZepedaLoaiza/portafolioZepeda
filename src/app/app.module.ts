import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index/index.component';
import { HeaderComponent } from './index/header/header.component';
import { FooterComponent } from './index/footer/footer.component';
import { TitleSectionComponent } from './index/title-section/title-section.component';
import { PerfilSectionComponent } from './index/perfil-section/perfil-section.component';
import { EducationSectionComponent } from './index/education-section/education-section.component';
import { CardStudyComponent } from './index/education-section/card-study/card-study.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    TitleSectionComponent,
    PerfilSectionComponent,
    EducationSectionComponent,
    CardStudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
