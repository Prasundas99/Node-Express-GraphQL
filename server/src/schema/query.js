import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from 'graphql'
import { authorService, bookService } from '../services'

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authorService.getAuthorById(parent.authorId)
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return bookService.getBooks({ authorId: parent.id })
      }
    }
  })
})

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return bookService.getBookById(args.id)
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authorService.getAuthorById(args.id)
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return bookService.getBooks({})
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authorService.getAuthors({})
      }
    }
  }
})
