import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

// here is the component state, you dont declare it with var, let, or const
newPost = 'No Content';
enteredValue = '';

  onAddPost() {

    this.newPost = this.enteredValue;
  }
}
