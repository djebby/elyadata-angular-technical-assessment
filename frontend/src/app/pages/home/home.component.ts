import { Component } from '@angular/core';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  blogs: any[] = [];
  constructor(private blogsService: BlogsService) {
    this.blogs = blogsService.fetchBlogs();
    for(const blog of this.blogs) console.log(blog.id);

  }

  searchHandler(text: string) {
    this.blogs = this.blogsService
      .fetchBlogs()
      .filter(
        (blog) =>
          blog.title.toLowerCase().includes(text.toLowerCase()) ||
          blog.author.toLowerCase().includes(text.toLowerCase()) ||
          blog.content.toLowerCase().includes(text.toLowerCase())
      );
  }

  searchInputClearHandler(clear: boolean) {
    if (clear) this.blogs = this.blogsService.fetchBlogs();
  }
}

