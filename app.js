const express = require(`express`);
const bodyparser = require(`body-parser`);
const mongoose = require(`mongoose`);


const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader(`Access-Control-Allow-Origin`, `*`);
    res.setHeader(`Access-Control-Allow-Methods`, `OPTIONS, GET, POST, PUT, PATCH, DELETE`);
    res.setHeader(`Access-Control-Allow-Headers`, `Content-Type, Authorization`);
    next();
});


mongoose.connect(`mongodb+srv://macbook:macbook@cluster0.fba8o.mongodb.net/test`)
.then(result=> {
    app.listen(8080);
})
.catch(err => console.log(err));
