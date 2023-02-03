import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent {
  
  @Input() blog: any;
  

  thumbsUpHandler() {
    if( this.blog.userVote == false ) { // user alrady dislike the blog
      this.blog.upvote++;
      this.blog.downvote--;
      this.blog.userVote = true;
    }
    else if(this.blog.userVote == null ) { // user like the blog
      this.blog.upvote++;
      this.blog.userVote = true;
    }
    else { // user retrive hi's like
      this.blog.upvote--;
      this.blog.userVote = null;
    }
    
  }
  
  thumbsDownHandler() {
    if(this.blog.userVote == true) { // user alrady like the blog
      this.blog.downvote++;
      this.blog.upvote--;
      this.blog.userVote = false;
    }
    else if(this.blog.userVote == null) { // user dislike the blog
      this.blog.downvote++;
      this.blog.userVote = false;
    }
    else { // user retrive hi's dislike
      this.blog.downvote--;
      this.blog.userVote = null;
    }
  }

}
