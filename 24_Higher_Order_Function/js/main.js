//Higher Order Function which takes one or more of the function as argument or
//returns funcstion as argument

//forEach

import {posts} from './post.js';

posts.forEach((post) => console.log(post)); //used when handling html collections, handling dome

console.clear();

//filter
const filteredPosts = posts.filter((postf) => {
    return postf.userId === 3;
});

console.log(filteredPosts);

//console.clear();

//map
const mappedPosts = filteredPosts.map((postf) => {
    return postf.id * 10;
});

console.log(mappedPosts);

//reduce

const reducedPosts = mappedPosts.reduce((sum, post) => {
    return sum + post;
});

console.log(reducedPosts);
