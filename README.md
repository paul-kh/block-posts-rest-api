# Description about the App

This RESTful API server provide API endpoints for creating a block poster app with some fundamental features as follows:

- User singup and authentication
- User authorization for performing some actions, such as editing post, deleting post, and accessing some specific routes.
- Post creation with image upload
- Post listing with pagination
- Post details
- Post edit
- Post deletion

# Technologies Used:

- Server Script: Node.js
- HTTP request handling: Express.js
- Authentication: JSON Web Token (jsonwebtoken) | bcryptjs
- File upload: multer
- Database: MongoDB with mongoose as ORD

# Description about API Endpoints

All the API endpoints below can be accessible after authentication passed.

## Create a new post: POST /feed/post

A new post should contain the following field names:

- title: id of text input that holds the value of the post title
- image: id of image input that holds image file to be uploaded
- content: id of a text input / text area that hold the value of the post content

## List all posts: GET /feed/posts

This endpoint will return 2 posts per page. It supports pagination request as a query string in the URL: GET /feed/posts?page=<pagenumber>.

The responded data is an object with the below data format:

```
{
    message: "Fetched posts successfully.",
    posts: <array of post objects>,
    totalItems: <total number of available posts in the database>
}
```

Each post object contains the following attributes:

- content: Content of the post
- createdAt: Creation data of the post
- creator: ID of the user who created the post
- creatorName: Name of the user who created the post
- imageUrl: URL of the post image
- title: Title of the post
- updatedAt: Update data of the post
- _id: ID of the post

## Get a specific post: GET /feed/post/:postId

This endpoint accepts a query param as ID of a post and return an object with the below data format:

```
{
    message: "Post fetched.",
    post: {
        content: <content_of_the_post>
        createdAt: <creation_data_of_the_post>
        creator: <id_of_the_user_who_created_the_post>
        creatorName: <name_of_the_user_who_created_the_post>
        imageUrl: <url_of_the_post_image>
        title: <title_of_the_post>
        updatedAt: <update_data_of_the_post>
        _id: <id_of_the_post>
    }
}
```

## Edit a post: PUT /feed/post/:postId

This endpoint allows editing a post by accepting a post ID as the query param.
A edit form should contain the following field names:

- title: id of text input that holds the value of the post title
- image: id of image input that holds image file to be uploaded
- content: id of a text input / text area that hold the value of the post content

## Delete a post: DELETE /feed/post/:postId

This endpoint allows deleting a post with a given post ID.

---

The following API endpoints are about user authentication:

---

## Sign up a new user: PUT /auth/signup

Sign up form should contain the following fields:

- email: must be a valid email format and must not be empty
- name: must not be empty
- password: must be at least 5 characters

Upon successful signup, a response object will be sent with the following data format:

```
{
    message: "User created!",
    user: {
    id: <user_id>,
    name: <user_name>,
    email: <user_email>
    }
}
```

## Login: POSt /auth/login

The login form should contain the following fields:

- email:
- password

Upon successful login, a response object will sent with the following data format:

```
{
    token: <JSON_Web_Token>,
    user: {
    id: <user_id>,
    name: <user_name>,
    email: <user_email>
    }
}
```

## Get user status: GET /auth/status

This endpoint responds with the status of the currently logged-in user.

The response object format: { status: <user_status> }

## Update user status: PATCH /auth/status

This endpoint allows updating status of the currently logged-in user. The updating form must contain one field named "status".

Upon successful status update, a reponse object will be sent with the below format:

```
{
  message: "User updated."
}
```
