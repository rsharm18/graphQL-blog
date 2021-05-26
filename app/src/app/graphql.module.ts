import { NgModule } from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {split, ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';

export interface Definintion {
  kind: string;
  operation?: string;
};

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  // Create an http link:
  const http = httpLink.create({
    uri: 'http://localhost:3000/graphql',
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: `ws://localhost:3000/graphql`,
    options: {
      reconnect: true,
    },
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: Definintion = getMainDefinition(query);
      console.log(`kind ${kind} - operation ${operation}`);
      
      return (
        kind === 'OperationDefinition' && operation === 'subscription'
      );
    },
    ws,
    http,
  );

  return {
    //link: httpLink.create({ uri }),
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
