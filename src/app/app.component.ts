import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Projet Blog Angular';
  isAuth = false;
  lastUpdate = new Date(2018,10,8);

  appareils: any[];
  posts: any[];

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.posts = this.postService.posts;
  }

  constructor(private appareilService: AppareilService,private postService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
}
