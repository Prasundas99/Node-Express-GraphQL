import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } from 'graphql'
import _ from 'lodash'

// dummy data
var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
];

var authors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Brandon Sanderson', age: 42, id: '2' },
  { name: 'Terry Pratchett', age: 66, id: '3' }
];



const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ( ) => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          console.log(parent, "parent id");
          return _.find(authors, { id: parent.authorId });
        }
      }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: ( ) => ({
      id: { type: GraphQLID },
      age: { type: GraphQLInt },
      name: { type: GraphQLString },
      books: {
        type: new GraphQLList(BookType),
        resolve(parent, args) {
          return _.filter(books, { authorId: parent.id });
        }
      }
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      book: {
        //get list of single book
          type: BookType,
          args: { id: { type: GraphQLID } },
          resolve(parent, args){
              // code to get data from db / other source
              return _.find(books, { id: args.id });
          }
      },
      author: {
        //get list of all authors
          type: AuthorType,
          args: { id: { type: GraphQLID } },
          resolve(parent, args){
              // code to get data from db / other source
              return _.find(authors, { id: args.id });
          }
      },

      books:{
        //get list of all books
        type: new GraphQLList(BookType),
        resolve(parent, args){
          return books;
        }
      },
  }
});

export default new GraphQLSchema({
  query: RootQuery
})
