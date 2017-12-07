import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubService } from './service/github.service';
import { TabComponent, TabsComponent } from "./shared/ui/tabs";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ GithubService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
