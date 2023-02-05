import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { faker } from "@faker-js/faker";

@Injectable({providedIn: 'root'})
export class BlogsService {
  blogs: any;
  baseURL = 'http://127.0.0.1:8000/'; // 192.168.1.155
  constructor(private http: HttpClient) {
    // generate random fake blogs data for testing...
    // for(let i = 0; i < 20; i++) {
    //   const blog = {
    //     id: faker.datatype.uuid(),
    //     title: faker.lorem.sentence(),
    //     author: faker.name.fullName(),
    //     content: faker.lorem.paragraphs(Math.floor(20 + Math.random() * 80)), // random paragraphs between 20..100
    //     date: faker.date.past(20), // It would be nice if we give each blog the date it was written at
    //     upvote: Math.floor(Math.random() * 50), // just a random number of upvote initially between 0..50
    //     downvote: Math.floor(Math.random() * 25), // random number of downvote initially between 0..25
    //     userVote: 0, // 1 if user like the blog, -1 for dislike and 0 if no reaction has been received yet
    //   };
    //   this.blogs.push(blog);
    // }
  }

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
      date: new Date().toISOString(),
      upvote: 0,
      downvote: 0,
      userVote: 0
    }
    return this.http.post(this.baseURL+'add-blog', blog);
  }

  editBlog(blog: any) {
    const { _id:id, title, author, content, date, upvote, downvote, userVote } = blog;
    this.http.put(`${this.baseURL}edit-blog/${id}`, {title, author, content, date, upvote, downvote, userVote})
    .subscribe(response => {});
  }
}