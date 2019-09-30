import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './component/pages/forum/forum.component';
import { FaqComponent } from './component/pages/faq/faq.component';
import { EmergencycontactComponent } from './component/pages/emergencycontact/emergencycontact.component';
import { MainHomeComponent } from './component/pages/main-home/main-home.component';
import { UserHomeComponent } from './component/pages/user-home/user-home.component';
import { AuthGuard } from './guards/auth.guard';
import { PostComponent } from './component/pages/post/post.component';


const routes: Routes = [
  {path: '', component: MainHomeComponent},
  {path: 'home/forum/:id', component: ForumComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'emergencycontact', component: EmergencycontactComponent},
  {path: 'home', component: UserHomeComponent, canActivate: [AuthGuard]},
  {path: 'home/forum/:idgp/post/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
