import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ForumComponent } from './component/pages/forum/forum.component';
import { FaqComponent } from './component/pages/faq/faq.component';
import { EmergencycontactComponent } from './component/pages/emergencycontact/emergencycontact.component';
import { ModalComponent } from './component/modal/modal.component';
import { StatisticsComponent } from './component/statistics/statistics.component';

import { CarouselComponent } from './component/carousel/carousel.component';
import { MainHomeComponent } from './component/pages/main-home/main-home.component';
import { AccordianComponent } from './component/accordian/accordian.component';
import { CardComponent } from './component/card/card.component';
import { UserHomeComponent } from './component/pages/user-home/user-home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModalComponent } from './component/user-modal/user-modal.component';
import { GroupcreationformComponent } from './component/groupcreationform/groupcreationform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForumComponent,
    FaqComponent,
    EmergencycontactComponent,
    ModalComponent,
    StatisticsComponent,
    CarouselComponent,
    MainHomeComponent,
    AccordianComponent,
    CardComponent,
    UserHomeComponent,
    UserModalComponent,
    GroupcreationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
