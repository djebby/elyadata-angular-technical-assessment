import { Component } from '@angular/core';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blog: any;

  constructor(private blogsService: BlogsService) {
    this.blog = this.blogsService.fetchBlogById('fake-id');
  }

  thumbsUpHandler() {
    if( this.blog.userVote == false ) { // user alrady dislike the blog and now he put like
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
    if(this.blog.userVote == true) { // user alrady like the blog and now he put dislike
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
