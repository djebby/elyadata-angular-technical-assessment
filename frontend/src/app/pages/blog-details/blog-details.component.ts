import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blog: any;
  id: string = '';

  constructor(private blogsService: BlogsService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.blog = this.blogsService.fetchBlogById(this.id);
    })

  }

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
