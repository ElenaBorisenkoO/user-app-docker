import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { NotAllowedGuard } from './core/guards/not-allowed.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    UserModule,
    HomeModule   
],
  providers: [NotAllowedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
