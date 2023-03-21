import { Component } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post';

//add the provider
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  //import the provider directly in the app-module.ts
  //if you use it in several components
  //providers: [PostService]
})
export class PostComponent {

  posts: Array<any> = [];

  //adding a dependency injection
  //PostService as a provider
  constructor(private postService: PostService) {
    // let postService = new PostService()
    this.posts = postService.postList;
  }

  addNewData() {
    let newPost: Post = {
      id: 6,
      postTitle: "Post 6"
    }

    //binding method from service
    this.postService.addPost(newPost);
  }
}
