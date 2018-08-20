import {Component, Input} from '@angular/core';

import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This first post\s content'},
  //   {title: 'Second Post', content: 'This Second post\s content'},
  //   {title: 'Third Post', content: 'This Third post\s content'},
  // ];

 @Input() posts: Post[] = [];


}
