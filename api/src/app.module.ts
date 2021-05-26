import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { join } from 'path';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    AuthorModule,
    GraphQLModule.forRoot(
      {
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/model/model.ts'),
          outputAs: 'class',
          emitTypenameField: true,

        },
        installSubscriptionHandlers: true,
        subscriptions: {
          keepAlive: 5000,

        }
      }
    )
  ],
  controllers: [],
  providers: [{
    provide: "PUB_SUB",
    useValue: new PubSub(),
  }],
})
export class AppModule { }
