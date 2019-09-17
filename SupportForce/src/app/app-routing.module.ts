import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './component/pages/forum/forum.component';
import { FaqComponent } from './component/pages/faq/faq.component';
import { EmergencycontactComponent } from './component/pages/emergencycontact/emergencycontact.component';


const routes: Routes = [
  {path: 'forum', component: ForumComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'emergencycontact', component: EmergencycontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
