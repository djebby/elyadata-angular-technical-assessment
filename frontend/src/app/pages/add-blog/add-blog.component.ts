import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{
  addBlogForm!: FormGroup;

  constructor(private blogsService: BlogsService) {

  }

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
    })
  }

  onSubmitForm() {
    console.log('add blog form submited...');
    const { title, author, content } = this.addBlogForm.value;
    this.blogsService.addBlog(title, author, content);
    console.log(title, author, content);
  }

}
