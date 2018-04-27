/**Purpose:This is routing module contains path of every component to be routed
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NoteListComponent } from './notes/note.list.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { ReminderComponent } from './reminder/reminder.component';

import { AuthGuard } from './authguard/auth.guard';
import { LoginAuthGuard } from './authguard/auth.guard';
//import { OnlyLoggedInUsersGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'createnotes', pathMatch: 'full' },
      { path: 'createnotes', component: NoteListComponent },
      { path: 'trash', component:TrashComponent },
      { path: 'archive', component:ArchiveComponent },
      { path: 'reminder', component:ReminderComponent },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent,canActivate: [LoginAuthGuard]},
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent }

  // { path: 'createnotes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],

  exports: [RouterModule]
})
export class AppRoutingModule { }
