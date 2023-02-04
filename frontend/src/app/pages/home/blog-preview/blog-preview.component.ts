import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent {
  
  @Input() blog: any;
  

  thumbsUpHandler() {
    if( this.blog.userVote == -1 ) { // user alrady dislike the blog
      this.blog.upvote++;
      this.blog.downvote--;
      this.blog.userVote = 1;
    }
    else if(this.blog.userVote == 0 ) { // user like the blog
      this.blog.upvote++;
      this.blog.userVote = 1;
    }
    else { // user retrive hi's like
      this.blog.upvote--;
      this.blog.userVote = 0;
    }
    
  }
  
  thumbsDownHandler() {
    if(this.blog.userVote == 1) { // user alrady like the blog
      this.blog.downvote++;
      this.blog.upvote--;
      this.blog.userVote = -1;
    }
    else if(this.blog.userVote == 0) { // user dislike the blog
      this.blog.downvote++;
      this.blog.userVote = -1;
    }
    else { // user retrive hi's dislike
      this.blog.downvote--;
      this.blog.userVote = 0;
    }
  }

}
