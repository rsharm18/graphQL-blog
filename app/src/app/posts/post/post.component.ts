import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CreatePostComponent } from "../create-post/create-post.component";
import { EntityComponent } from "../entity/entity.component";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent
  extends EntityComponent
  implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  dataSource;
  constructor(private service: PostsService, public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.service.posts$.subscribe((data) => {
      this.entity = data;
      this.refreshDataSet();
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.refreshDataSet();
    }, 100);
  }

  private refreshDataSet(): void {
    this.getProperties();
    this.dataSource = new MatTableDataSource(
      JSON.parse(JSON.stringify(this.entity))
    );
    this.dataSource.sort = this.sort;
  }

  async upvote(post) {
    await this.service.upvote(post);
  }

  async delete(post) {
    await this.service.deletePost(post);
  }

  openDialog() {
    this.dialog.open(CreatePostComponent, {
      data: {
        authorId: 1,
      },
    });
  }
}
