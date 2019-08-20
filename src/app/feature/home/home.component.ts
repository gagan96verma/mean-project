import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {HttpRequestsService} from '../../services/http-requests.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isCreatePostClicked = false;
  createPostForm: FormGroup;
  allPosts: any
  @ViewChild('childModal', null) public childModal: ModalDirective;

  constructor(private httpRequests: HttpRequestsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllPosts();
    this.createPostForm = this.fb.group({
      postTitle: ['']
    });
  }

  getAllPosts() {
    this.httpRequests.getPosts().subscribe((resp) => {
      this.allPosts = resp;
    });
  }

  createPost() {
    if (!this.createPostForm.value) { return; }
    this.httpRequests.createPost(this.createPostForm.value).subscribe((resp) => {
      console.log(resp);
      this.childModal.hide();
    });
  }

  updatePost(post) {
    this.childModal.show();
    this.createPostForm.patchValue({ postTitle: post.postTitle });
  }

  show() {
    this.childModal.show();
  }
  hide() {
    this.childModal.hide();
  }

}
