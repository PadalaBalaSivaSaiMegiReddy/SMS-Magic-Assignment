# Node.js and MySQL Integration

This code demonstrates how to integrate Node.js with MySQL database using the `express` and `mysql` modules. It provides a simple API for creating a database, creating tables, performing CRUD operations on the tables, and creating models for User, Client, and Company entities.

## Prerequisites

- Node.js
- MySQL

## Installation

1. Clone the repository or copy the code to your local machine.
2. Install the required dependencies by running `npm install express mysql`.

## Database Setup

1. Make sure you have a MySQL server running on your local machine or a remote server.
2. Update the `db` connection configuration in the code with your MySQL server credentials.

## Usage

1. Start the server by running `node app.js`.
2. Use the following API endpoints to interact with the application:

### Database and Table Creation

- `/createdb`: Creates a new database called `nodemysql`.
- `/createpoststable`: Creates a new table called `posts` with columns `id`, `title`, and `body`.
- `/createclienttable`: Creates a new table called `clients` with columns `id`, `name`, `user`, `company`, `email`, and `phone`.
- `/createclientuserstable`: Creates a new table called `clientusers` with columns `id`, `client`, `user`, `createdAt`, `updatedAt`, `deletedAt`, and `active`.
- `/createcompanytable`: Creates a new table called `companies` with columns `id`, `name`, and `users`.

### CRUD Operations on `posts` Table

- `/addpost1`: Inserts a new post with the title "Post One" and body "This is post number one".
- `/addpost2`: Inserts a new post with the title "Post Two" and body "This is post number two".
- `/getposts`: Retrieves all posts from the `posts` table.
- `/getpost/:id`: Retrieves a single post from the `posts` table by its `id`.
- `/updatepost/:id`: Updates the title of a post with the given `id` to "Updated Title".
- `/deletepost/:id`: Deletes a post from the `posts` table by its `id`.

### Models

The code also includes models for `User`, `Client`, and `Company` entities with methods for saving, updating, and deleting data in the respective tables. However, the implementation of these methods is not provided in the code snippet.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).