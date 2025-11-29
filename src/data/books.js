import gatsby from "../assets/gatsby.jpg";
import nine from "../assets/nine.jpg";
import mockingbird from "../assets/mockingbird.jpg";
import pride from "../assets/pride.jpg";
import hobbit from "../assets/TheHobbit.jpg";
import catcher from "../assets/catcher.jpg";
import lotr from "../assets/LOFR.jpg";

const books = [
  { id: 1,
   title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    price: 10.99, 
    description: "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire obsessed with reuniting with his former lover, Daisy Buchanan. ", 
    image: gatsby },

  { id: 2,
     title: "Nine", 
     author: "George Orwell", 
     description: "Nineteen Eighty-Four is a dystopian novel by the English writer George Orwell.", 
     image: nine ,
     price: 9.99,},

  { id: 3, 
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    price: 12.99,
     description: "A gripping tale of justice and innocence.",
      image: mockingbird },

  { id: 4, 
    title: "Pride and Prejudice", 
    author: "Jane Austen", 
    price: 11.99,
     description: "Pride and Prejudice is a romantic novel of manners by English author Jane Austen, published anonymously in three volumes in 1813.", 
     image: pride },

  { id: 5, 
    title: "The Hobbit",
     author: "J.R.R. Tolkien", 
     price: 14.99,
      description: "An adventurous journey in Middle-earth.", 
      image: hobbit },

  { id: 6, 
    title: "The Catcher in the Rye", 
    author: "J.D. Salinger", 
    price: 10.49, 
    description: "This book is about struggling with grief and loss. After suffering two tragedies, Holden is disoriented and searching for purchase.",
     image: catcher },

  { id: 7,
     title: "The Lord of the Rings", 
     author: "J.R.R. Tolkien", 
     price: 29.99, 
     description: "The Lord of the Rings is an epic high fantasy novel written by JRR Tolkien, which was later fitted as a trilogy.", 
     image: lotr },
];

export default books;
