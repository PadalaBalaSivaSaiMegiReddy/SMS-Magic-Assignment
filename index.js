const express = require('express');
const mysql = require('mysql');

//Create connection to MySQL server 
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql',
});

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

//Posts Entity 1.Create table posts, 2. Insert post 1, 3. Insert post 2, 4. Select posts, 5. Select single post, 6. Update post, 7. Delete post

//1. Create table posts
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

//2. Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title: 'Post One', body: 'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

//3. Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title: 'Post Two', body: 'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

//4. Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

//5. Select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

//6. Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

//7. Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});


// 1.1 Client entity
app.get('/createclienttable', (req, res) => {
    let sql = 'CREATE TABLE clients(id int AUTO_INCREMENT, name VARCHAR(255), user int, company int, email VARCHAR(255), phone VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Clients table created...');
    });
});

// 1.2 ClientUsers entity
app.get('/createclientuserstable', (req, res) => {
    let sql = 'CREATE TABLE clientusers(id int AUTO_INCREMENT, client int, user int, createdAt TIMESTAMP, updatedAt TIMESTAMP, deletedAt TIMESTAMP, active BOOLEAN, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('ClientUsers table created...');
    });
});

// 1.3 Company entity

app.get('/createcompanytable', (req, res) => {
    let sql = 'CREATE TABLE companies(id int AUTO_INCREMENT, name VARCHAR(255), users int, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Companies table created...');
    });
}
);


// Import required modules and set up database connection

class User {
    constructor(id, username, email, createdAt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.createdAt = createdAt;
    }

    // Example method to save user to the database
    save() {
        // Implement database save logic
    }

    // Example method to update user in the database
    update() {
        // Implement database update logic
    }

    // Example method to delete user from the database
    delete() {
        // Implement database delete logic
    }
}

class Client {
    constructor(id, name, userId, companyId, email, phone) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.companyId = companyId;
        this.email = email;
        this.phone = phone;
    }

    // Example method to save client to the database
    save() {
        // Implement database save logic

        // Create new user and save to the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.save();

    }

    // Example method to update client in the database
    update() {
        // Implement database update logic

        // Update user in the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.update();

    }

    // Example method to delete client from the database
    delete() {
        // Implement database delete logic

        // Delete user from the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.delete();

    }
}

//CREATE TABLE companies(id int AUTO_INCREMENT, name VARCHAR(255), users int, PRIMARY KEY(id))

class Company {
    constructor(id, name, users, createdAt, updatedAt, deletedAt, active) {
        this.id = id;
        this.name = name;
        this.users = users;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.active = active;

        // Add other fields as required

    }

    // Example method to save company to the database
    save() {
        // Implement database save logic

        // Create new user and save to the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.save();
    }

    // Example method to update company in the database
    update() {
        // Implement database update logic

        // Update user in the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.update();

    }

    // Example method to delete company from the database
    delete() {
        // Implement database delete logic

        // Delete user from the database
        const user = new User(this.userId, 'username', this.email, new Date());
        user.delete();

    }
}


// Step 4: API Endpoints
// 4.1 List Users
// Endpoint Goal: Fetch and optionally filter a list of users.
// Route Setup:













app.listen('3000', () => {
    console.log('Server started on port 3000');
    }
);


