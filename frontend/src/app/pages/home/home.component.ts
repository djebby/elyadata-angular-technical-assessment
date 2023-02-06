import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  blogs: any;
  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.fetchBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  searchHandler(keyword: string) {
    this.blogsService.searchBlogs(keyword)
    .subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  searchInputClearHandler(clear: boolean) { // user clear the research input so we should fetch all the blogs
    if(clear) this.blogsService.fetchBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }
}