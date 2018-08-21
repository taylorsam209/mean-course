import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Post } from './post.model';

// Injecting it here is the same as importing PostsService into the provider array inside app module.

@Injectable({providedIn: 'root'})
 export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:8080/api/posts')
    .subscribe((data) => {
      this.posts = data.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      id: null,
      title,
      content
    };

    this.http.post<{message: string}>('http://localhost:8080/api/posts', post)
    .subscribe((data) => {
      console.log(data.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }
}
