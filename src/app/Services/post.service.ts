import { Injectable } from "@angular/core";

//this is to create a unique instance for all components
@Injectable({
    providedIn: 'root'
})

export class PostService {

    postList: Array<any> = [
        {id: 1, postTitle: "Post 1"},
        {id: 2, postTitle: "Post 2"},
        {id: 3, postTitle: "Post 3"},
        {id: 4, postTitle: "Post 4"},
        {id: 5, postTitle: "Post 5"}
    ];

    //data is coming from post.component.ts
    addPost(data: object) {
        this.postList.push(data);
    }
}