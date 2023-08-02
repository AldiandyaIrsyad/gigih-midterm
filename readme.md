# Gigih Midterm

## Database

I'm using MongoDB as a database, the schema is stated on `models` folder.

There are three collections:

- `Video` for storing thumbnail,
- `Comment` for storing comment which refer to a video,
- `Product` for storing product which refer to a video

## API

my api structure resolve around a video such as

- /
- /:videoId/comments
- /:videoId/products

## API Request and Response

### Model

[Model file](src/models/model.js)

- Video Object

```js
{
  _id: mongoose.Schema.Types.ObjectId,
  thumbnail_url: String,
}
```

- Comment Object

```js
{
  _id: mongoose.Schema.Types.ObjectId,
  video_id: mongoose.Schema.Types.ObjectId,
  text: String,
  timestamp: Date,
}
```

- Product Object

```js
{
  _id: mongoose.Schema.Types.ObjectId,
  video_id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  price: Number,
}
```

### Get /

Get all videos

- URL Params
  - None
- Data Params
  - None
- Headers
  - Content-Type: application/json
- Success Response
  - Code: 200
  - Content: Array of Video Object
  - Example:

```JS
[
  {<video_object>},
  {<video_object>}
]
```

### Get /:videoId/comments

Get all comments of a video

- URL Params
  - videoId
- Data Params
  - None
- Headers
  - Content-Type: application/json
- Success Response
  - Code: 200
  - Content: Array of Comment Object
  - Example:

```JS
[
  {<comment_object>},
  {<comment_object>}
]
```

### Get /:videoId/products

Get all products of a video

- URL Params
  - videoId
- Data Params
  - None
- Headers
  - Content-Type: application/json
- Success Response
  - Code: 200
  - Content: Array of Product Object
  - Example:

```JS
[
  {<product_object>},
  {<product_object>}
]
```

### Post /:videoId/comments

Create a comment

- URL Params
  - videoId
- Data Params
  - text
- Headers
  - Content-Type: application/json
- Success Response
  - Code: 201
  - Content: Comment Object
  - Example:

```JS
{<comment_object>}
```

- Error Response
  - Code: 500
  - Content: String
  - Example:

```
Server Error
```

## How to run

```
docker-compose up --build
```
