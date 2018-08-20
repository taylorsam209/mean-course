import { Component } from '@angular/core';

import {Post} from './components/posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // stored Post is a model of the Post object
storedPosts: Post[] = [];

onPostAdded(post) {
 this.storedPosts.push(post);
}

  // methods go here that you would use in the html
}
