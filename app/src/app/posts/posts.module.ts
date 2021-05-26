import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { PostComponent } from "./post/post.component";
import { UserComponent } from "./user/user.component";
import { EntityComponent } from "./entity/entity.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CreatePostComponent } from "./create-post/create-post.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    UserComponent,
    EntityComponent,
    CreatePostComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class PostsModule {}
