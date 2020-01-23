import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { LastPipe } from './pipe/last.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    LastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
