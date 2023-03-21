import { Component } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
  //import the provider directly in the app-module.ts
  //if you use it in several components
  //providers: [PostService]
})
export class PostListComponent {

  postList: Array<any> = [];

  constructor(private postService: PostService) {
    
    this.postList = postService.postList;
  }

}
