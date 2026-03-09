import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
PostService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private postService = inject(PostService);

  //usuario actual
  currentUser: any = null;
  post: any[] = [];

  postForm: FormGroup = this.fb.group({
    content: ['', Validators.required, Validators.maxLength(500)]
  });

  ngOnInit() {
    this.loadUserSession();
    this.loadPost();
  }

  loadUserSession(){
    const sessionData = localStorage.getItem("userSession");
    if (sessionData){
      this.currentUser = JSON.parse(sessionData);
    }else{
      this.router.navigate(["/login"]);
    }
  }

  loadPost(){
    this.postService.getAllPosts().subscribe(data => this.post = data);
    console.log("cargando data");
  }

  




}
