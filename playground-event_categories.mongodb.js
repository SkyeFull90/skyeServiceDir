/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('events');

// Insert a few documents into the sales collection.
db.getCollection('events_categories').insertMany([
  {
    "id": "anime-conventions",
    "title": "Anime Conventions In The US and  the world",
    "description": "Anime conventions from all over the US and the World. Spanning from: kpop, jpop, Cosplay, Anime voice actors both sub and dub. Possible First views of new series's and much more.",
    "image": "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  }
]);

