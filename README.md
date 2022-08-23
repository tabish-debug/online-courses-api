# `Online Courses Api`

Api's flow

Course ---- hasmany -----> Lessons \
Lessons ---- hasmany -----> Chapters \
Chapters ----  hasmany  -----> Pages \
Pages which have components

Components are like HTML elements which can be
* Photo
* Video
* Paragraph
* Text Input(Form Elements)

Using Tech Stacks
* Node.js
* Express.js 
* MongoDB

### `.env file`

PORT=port
DB=mongodbUrl

### `running commands`

```
npm i --save
npm start
```

you can easily test api's on postman or anyother tool ...
