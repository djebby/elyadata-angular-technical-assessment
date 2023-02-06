import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { faker } from "@faker-js/faker";

@Injectable({providedIn: 'root'})
export class BlogsService {
  blogs: any;
  baseURL = 'http://127.0.0.1:8000/'; // backend server url 192.168.1.155
  constructor(private http: HttpClient) {}

  fetchBlogs() {
    return this.http.get(this.baseURL+'get-blogs');
  }

  fetchBlogById(id: string) {
    return this.http.get(`${this.baseURL}get-blog/${id}`);
  }

  searchBlogs(keyword: string) {
    return this.http.get(`${this.baseURL}search?keyword=${keyword}`);
  }
  
  addBlog(title: string, author: string, content: string) {
    const blog = {
      title,
      author,
      content,
      date: new Date().toISOString(), // it will be nice if we give every blog a date
      upvote: 0,
      downvote: 0,
      userVote: 0 // 1 if the user like this blog, -1 if he dislike it and 0 if he does not give neither like or dislike
    }
    return this.http.post(this.baseURL+'add-blog', blog);
  }

  editBlog(blog: any) {
    const { _id:id, title, author, content, date, upvote, downvote, userVote } = blog;
    this.http.put(`${this.baseURL}edit-blog/${id}`, {title, author, content, date, upvote, downvote, userVote})
    .subscribe(response => {});
  }
}