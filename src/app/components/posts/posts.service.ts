import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import { Post } from './post.model';


// Injecting it here is the same as importing PostsService into the provider array inside app module.

@Injectable({providedIn: 'root'})
 export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // return a copy of the original array and not the original, this is immutable practice.
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title,
      content
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
