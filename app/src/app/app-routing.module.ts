import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component:PostsComponent
  },
  {
  path: 'posts',
  component: PostsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
