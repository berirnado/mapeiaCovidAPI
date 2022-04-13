const express = require(`express`);
const bodyparser = require(`body-parser`);
const mongoose = require(`mongoose`);

const authRoutes = require(`./routes/auth`);
const crudRoutes = require('./routes/crud')

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader(`Access-Control-Allow-Origin`, `*`);
    res.setHeader(`Access-Control-Allow-Methods`, `OPTIONS, GET, POST, PUT, PATCH, DELETE`);
    res.setHeader(`Access-Control-Allow-Headers`, `Content-Type, Authorization`);
    next();
});

app.use(`/auth`, authRoutes);
app.use(`/crud`, crudRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data })
})


mongoose.connect(`mongodb+srv://bernardo:3XupsSzmz9l6H7wA@cluster0.antjj.mongodb.net/mapcovid`)
.then(result=> {
    app.listen(8080);
    console.log(`Listening`)
})
.catch(err => console.log(err));
