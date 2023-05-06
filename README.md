<br>
<div align="center">
  <p>
    <img alt="Dogs API Logo" src="./img/logo.svg" height="200" />
  </p>

# ⚙ Dogs API, an API made with Express for [Dogs](https://github.com/abacaxiguy/dogs) 🐶

</div>

<p align="center">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/abacaxiguy/dogs_api" />
  <img alt="License" src="https://img.shields.io/github/license/abacaxiguy/dogs_api" />
  <a href="https://github.com/abacaxiguy" target="_blank"><img alt="Follow Me" src="https://img.shields.io/github/followers/abacaxiguy.svg?style=social&label=Follow&maxAge=2592000" /></a>
</p>

## 📖 About

This is an API made with Express for [🐶 Dogs 🐶](https://github.com/abacaxiguy/dogs), the Instagram for dogs. I suggest, if you didn't already, check out that first, then comeback here so you can see how the API works.

This API was made in replacement of the original API from the [Origamid's course](https://www.origamid.com/curso/react-completo/), which was made with WordPress. This one is made with Node.js, Express and more.

---

## 🌎 Online!

This API [is online](https://abacaxiguydogs-api.herokuapp.com/) at this moment!<br>
Deploy made in [Heroku 🟪](https://www.heroku.com/)!

<details>
  <summary><b>🗺 Check out the API routes here:</b></summary>

<br>

-   🏠 home: [/](https://abacaxiguydogs-api.herokuapp.com/)
-   👥 users: [/users](https://abacaxiguydogs-api.herokuapp.com/users)

    - `[POST]` **Store** - [/users](https://abacaxiguydogs-api.herokuapp.com/users)

      ```json
      {
        "username": "username",
        "email": "email@example.com",
        "password": "password"
      }
      ```

    - `[GET]` **Show** - [/users](https://abacaxiguydogs-api.herokuapp.com/users) **(login required)**

    - `[PUT]` **Update** - [/users](https://abacaxiguydogs-api.herokuapp.com/users) **(login required)**

      ```json
      {
        "username": "username",
        "email": "email@example.com",
        "password": "password"
      }
      ```

    - `[DELETE]` **Delete** - [/users](https://abacaxiguydogs-api.herokuapp.com/users) **(login required)**

-   🖼 photos: [/photos](https://abacaxiguydogs-api.herokuapp.com/photos)

    - `[GET]` **Index** - [/photos](https://abacaxiguydogs-api.herokuapp.com/photos)

    - `[GET]` **Show** - [/photos/:id](https://abacaxiguydogs-api.herokuapp.com/photos/:id)

    - `[POST]` **Store** - [/photos](https://abacaxiguydogs-api.herokuapp.com/photos) **(login required)**

      ```json
      {
        "title": "Ex: Dog's name",
        "src": <file>,
        "weight": 7,
        "age": 2
      }
      ```

    - `[DELETE]` **Delete** - [/photos/:id](https://abacaxiguydogs-api.herokuapp.com/photos/:id) **(login required)**

-   📝 comments: [/comments](https://abacaxiguydogs-api.herokuapp.com/comments)

    - `[GET]` **Show** - [/comments/:id](https://abacaxiguydogs-api.herokuapp.com/comments/:id)

    - `[POST]` **Store** - [/comments/:id](https://abacaxiguydogs-api.herokuapp.com/comments/:id) **(login required)**

      ```json
      {
        "comment_content": "Ex: This is a comment"
      }
      ```

-   🔐 tokens: [/tokens](https://abacaxiguydogs-api.herokuapp.com/tokens)

    - `[POST]` **Store** - [/tokens](https://abacaxiguydogs-api.herokuapp.com/tokens)

      ```json
      {
        "username": "username",
        "password": "password"
      }
      ```

<br>

</details>

---

## 🧪 Technologies

This project was developed using the following technologies:

<a href="https://expressjs.com/" target="_blank"><img alt="Express" height="31px" src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white" /></a>
<a href="https://nodejs.org/en/" target="_blank"><img alt="Node.js" height="30px" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" /></a>
<a href="https://sequelize.org/" target="_blank"><img alt="Sequelize" height="30px" src="https://img.shields.io/badge/-Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white" /></a>
<a href="https://www.mysql.com/" target="_blank"><img alt="MySQL" height="30px" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" /></a>

---

## 🚀 Usage

To run this API locally, you'll need [Node.js](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/abacaxiguy/dogs_api.git

# Go into the repository
$ cd dogs_api

# Install dependencies
$ npm install # yarn or pnpm

# Run the app
$ npm start # yarn or pnpm
```

🎉 Congratulations, the API is running in `http://localhost:{APP_PORT}` (default: `http://localhost:3000`)!

**⚠ Remember to fill the `APP_PORT` and the others fields in the `.env` file, following the [`.env.example`](https://github.com/abacaxiguy/dogs_api/blob/master/.env-example) file ⚠**

---

## 📋 API Documentation

You can check the API documentation in Insomnia here:

<a href="https://github.com/abacaxiguy/dogs_api/blob/master/insomnia.json" target="_blank"><img alt="Insomnia" height="30px" src="https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white" /></a>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br> Feel free to check [issues page](https://github.com/abacaxiguy/dogs_api/issues).

---

## 📋 Tested in

- Windows 10 ✅
- Linux [Ubuntu 18.04.4 LTS] ✅

---

<h4  align="center">Developed by 🍍</h4>
