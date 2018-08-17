import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() postLoveIts: number;  
  @Input() postTitle: string;
  @Input() postContent: string;
   @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }


  getColor() {
    if(this.postLoveIts > 0 ) {
      return 'green';
    } else if(this.postLoveIts < 0 ) {
      return 'red';
    }
  }
}
