import * as express from 'express';
import * as cors from 'cors';

const corsOptions = {
  origin:["http://localhost:3000"]
};

const data = {
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

const app: express.Application = express();
const port: number = 3031;

app.use(cors(corsOptions));

app.get('/posts', (req: express.Request, res: express.Response) => {
  res.send(data['posts']);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


function cors(corsOptions: { origin: string[]; }): any {
  throw new Error('Function not implemented.');
}

