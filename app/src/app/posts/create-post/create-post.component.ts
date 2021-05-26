import { Component, Inject, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  form: FormGroup;
  title = new FormControl("", [Validators.required]);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private service: PostsService
  ) {
    console.log(`Data is ${JSON.stringify(data)}`);
  }

  ngOnInit(): void {
    this.form = new FormGroup({ title: this.title });

    // this.form = this.formBuilder.group({
    //   title: ["", [Validators.required]],
    // });
  }

  async submit() {
    console.log(`I am called`);

    if (!this.title.valid) {
      return;
    }
    await this.service.createPost(this.title.value, this.data.authorId);
  }
}
