import { GraphQLClient } from 'graphql-request';

export const Hygraph = new GraphQLClient(process.env.HYGRAPH_CONTENT_API);
