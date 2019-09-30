import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { UserModalComponent } from './component/user-modal/user-modal.component';
import { GroupcreationformComponent } from './component/groupcreationform/groupcreationform.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserserviceService } from './services/userservice.service';
import { ForumserviceService } from './services/forumservice.service';
import { GroupserviceService } from './services/groupservice.service';
import { SessionService } from './services/session.service';
import { AuthGuard } from './guards/auth.guard';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { PostComponent } from 'src/app/component/pages/post/post.component';


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
    GroupcreationformComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserserviceService, ForumserviceService, GroupserviceService, SessionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
