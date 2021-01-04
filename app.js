const express = require('express'),
    app = express(),
    cors = require('cors'),
    // const server = http.createServer(app);
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Colors = require('./model/color'),
    Product = require('./model/products'),
    // fs = require('fs'),
    // url = 'mongodb://localhost/blogDb',
    PORT = process.env.PORT || 3000,
    clientPath = __dirname + "/client",   
    path = require('path'),

    db = "ang_db",
    // collection = "common_collection",
    mongoPassword = 'volonter13';

// ----------------------------------------------
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/client')));
app.use('/client', express.static(path.join(__dirname + '/client'))); 

// ------------------------------------
mongoose.connect(
    'mongodb+srv://test_ang_user:' + mongoPassword + '@cluster0.ief1o.mongodb.net/' + db + '?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            return console.log('Mongo connect error is  ' + err);
        }
        console.log('Mongo connected successfully');
    })

// --------------------------------------------
// const APP_CONFIG = {
//     "mongo": {
//         "hostString": "mongodb:27017/Color",
//         "user": "17d04956078a9ac76378bafcae881e13",
//         "db": "17d04956078a9ac76378bafcae881e13"
//     }
// };
// const config = JSON.parse(process.env.APP_CONFIG);

// app.get('/', (req, res, next) => {
//     res
//         .header("Access-Control-Allow-Origin", "*")
//         .status(200)
//         .set({ 'content-type': 'text/html; charset=utf-8' })
//         .sendFile(clientPath + '/index.html');

// });
// ---------------------POST Colors -----------------
app.post('/api/colors', (req, res, next) => {
    const newUser = new Colors({
        code: req.body.code,
        color: req.body.color,
        hex: req.body.hex
    });
    newUser.save(function (err) {
        if (err) {
            console.log('newUser save error ' + err);
            return next(err);
        }
        // res.json({ "status": "success", "msg": "Object saved as 'newUser'" })
    });
    //  GET ALL COLLECTIONS
    // mongoose.connection.db.listCollections().toArray(function (err, names) {
    //     console.log(names); // [{ name: 'dbname.myCollection' }]
    //     module.exports.Collection = names;
    // });

})

// ------------------- GET colors
app.get('/api/colors', (req, res, next) => {
    Colors.find({}, function (err, result) {
        if (err) {
            console.log(err.stack)
            return next(err);
        };
        res.status(200).json(result)
    });
});
//---------------- PUT Colors
app.put('/api/put/:id', (req, res, next) => {
    Colors.updateOne({ _id: req.params.id }, req.body, function (err, result) {
        if (err || result == null) {
            console.log('Error /put ' + err);
            return next(err);
        };
        res.status(200).json(result)
    });
});

//---------------- DELETE Colors
app.delete('/api/delete/:id', (req, res, next) => {
    console.log('api delete is run')
    Colors.findOneAndDelete({ _id: req.params.id }, function (err, result) {
        if (err || result == null) {
            console.log('Error /delete ' + err);
            return next(err);
        };
        res.status(200).json(result)
    });
});

///////////////////////// get data product 
app.get('/api/products', (req, res, next) => {
    Product.find({}, function (err, result) {
        if (err) {
            console.log(err.stack)
            return next(err);
        };
        res.status(200).json(result)
    });
});

// app.post('/api/products', (req, res, next) => {

//     const productses = new Product({
//         country: "Germany",
//       available: "yes",
//       description: "B&O is a Danish company that designs and manufactures audio products, television sets, and telephones. It was founded in 1925 by Peter Bang and Svend Olufsen",
//       image: "6.jpg",
//       title: "B&O Remote",
//       id: 6
//     });
//     productses.save(function (err) {
//         if (err) {
//             console.log('newUser save error ' + err);
//             return next(err);
//         }
//         res.json({ "status": "success", "msg": "Object saved as 'newUser'" })
//     });
// });
///////////////////////////////////////////////////

// app.get('/*', (req, res, next) => {
//     res
//         .header("Access-Control-Allow-Origin", "*")
//         .status(200)
//         .set({ 'content-type': 'text/html; charset=utf-8' })//////////////////////////////////////
//         .sendFile(clientPath );
// });

app.use((err, req, res, next) => {
    console.error('Error from NEXT ' + err.stack);
    res.status(500).json({ "status": "error", "msg": "Something broke!" });
});

app.get('*', function (req, res) {
    res.status(404).type('text/html');
    res.send("<h1> Not found 404</h1>");
})
app.listen(PORT, () => console.log(`blog server running on port ${PORT}`))