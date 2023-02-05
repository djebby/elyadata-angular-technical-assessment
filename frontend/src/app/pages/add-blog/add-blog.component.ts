import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogsService } from 'src/app/shared/blogs.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlogForm!: FormGroup;

  constructor(private blogsService: BlogsService, private router: Router) { }

  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(20)]),
      author: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(1000)]),
    })
  }

  onSubmitForm() {
    const { title, author, content } = this.addBlogForm.value;
    this.blogsService.addBlog(title, author, content).subscribe(response => {
      this.addBlogForm.reset();
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    })
  }

}
