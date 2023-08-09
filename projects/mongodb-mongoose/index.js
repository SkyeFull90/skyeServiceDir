import mongoose from 'mongoose'
import Blog from './model/Blog'

mongoose.connect("mongodb+srv://skye9020:spar.3693@cluster0.sxhiazc.mongodb.net/blog_posts?retryWrites=true&w=majority")

const article = new Blog({
    title: 'Awesome Post',
    slug: 'awesome-post',
    published: true,
    content: 'This the best post ever',
    tags: ['featured','announcement']
});

await article.save();

