import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { AppareilService } from './services/appareil.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
