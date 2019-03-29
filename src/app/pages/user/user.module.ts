import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material';
import { ReposComponent } from './repos/repos.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [UserComponent, ReposComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
    ],
    exports:[UserComponent, ReposComponent],
    providers:[UserService]
})
export class UserModule { }
