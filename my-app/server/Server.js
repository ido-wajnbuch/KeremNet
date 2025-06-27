"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var corsOptions = {
    origin: ["http://localhost:3000"]
};
var data = {
    "posts": [
        {
            "content": "hello world",
            "author": "Ido Wajnbuch",
            "publishedAt": "25.6.2025",
            "comments": ["Great post!", "Have a nice day!"],
            "likes": 10
        },
        {
            "content": "Another post",
            "author": "Zoey The Zebra",
            "publishedAt": "25.6.2025",
            "comments": ["Interesting read!", "I learned something new."],
            "likes": 2
        }
    ]
};
var app = express();
var port = 3031;
app.use(cors(corsOptions));
app.get('/posts', function (req, res) {
    res.send(data['posts']);
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
function cors(corsOptions) {
    throw new Error('Function not implemented.');
}
