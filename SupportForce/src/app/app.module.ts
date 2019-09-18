import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ForumComponent } from './component/pages/forum/forum.component';
import { FaqComponent } from './component/pages/faq/faq.component';
import { EmergencycontactComponent } from './component/pages/emergencycontact/emergencycontact.component';
import { ModalComponent } from './component/modal/modal.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { MainHomeComponent } from './component/pages/main-home/main-home.component';
import { AccordianComponent } from './component/accordian/accordian.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    FaqComponent,
    EmergencycontactComponent,
    ModalComponent,
    CarouselComponent,
    MainHomeComponent,
    AccordianComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
