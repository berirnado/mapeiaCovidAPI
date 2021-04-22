const express = require(`express`);
const bodyparser = require(`body-parser`);
const mongoose = require(`mongoose`);

const authRoutes = require(`./routes/auth`);

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader(`Access-Control-Allow-Origin`, `*`);
    res.setHeader(`Access-Control-Allow-Methods`, `OPTIONS, GET, POST, PUT, PATCH, DELETE`);
    res.setHeader(`Access-Control-Allow-Headers`, `Content-Type, Authorization`);
    next();
});

app.use(`/auth`, authRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data })
})


mongoose.connect(`mongodb+srv://macbook:macbook@cluster0.fba8o.mongodb.net/mapcovid`)
.then(result=> {
    app.listen(8080);
    console.log(`Listening`)
})
.catch(err => console.log(err));
