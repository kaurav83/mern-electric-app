const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const contact_config = require('./config/contact_config');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)
    .then(() => console.log('MongoDB has started...'))
    .catch(e => console.log(e))

const { User } = require('./models/user');
const { Article } = require('./models/article');
const { Slider } = require('./models/slider');
const { Home } = require('./models/home');
const { Equipment } = require('./models/prices/equipment');
const { Wiring } = require('./models/prices/wiring');
const { Lighting } = require('./models/prices/lighting');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'));

// GET //
app.get('/api/getArticle', (req, res) => {
    let id = req.query.id;

    Article.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/articles', (req, res) => {
    //localhost:3001/api/articles?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Article.find()
        .skip(skip)
        .sort({ _id: order })
        .limit(limit)
        .exec((err, doc) => {
            if (err) return res.status(400).send(err);
            res.send(doc);
        })
})

app.get('/api/slides', (req, res) => {

    Slider.find().exec((err, doc) => {
            if (err) return res.status(400).send(err);
            res.send(doc);
        })
})

app.get('/api/home', (req, res) => {
    Home.find().exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getEquipment', (req, res) => {
    Equipment.find().exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getWiring', (req, res) => {
    Wiring.find().exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getLighting', (req, res) => {
    Lighting.find().exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST //
app.post('/api/article', (req, res) => {
    const article = new Article(req.body);

    article.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            articleId: doc._id
        })
    })
})

app.post('/api/slide', (req, res) => {
    const slide = new Slider(req.body);

    slide.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            slideId: doc._id
        })
    })
})

app.post('/api/equipment', (req, res) => {
    const equipment = new Equipment(req.body);

    equipment.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            equipmentId: doc._id
        })
    })
})

app.post('/api/wiring', (req, res) => {
    const wiring = new Wiring(req.body);

    wiring.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            wiringId: doc._id
        })
    })
})

app.post('/api/lighting', (req, res) => {
    const lighting = new Lighting(req.body);

    lighting.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            wiringId: doc._id
        })
    })
})

app.post('/api/home', (req, res) => {
    const home = new Home(req.body);

    home.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            homeId: doc._id
        })
    })
})

//nodemailer
const corsOprions = {
    origin: "http://localhost:3000",
    allowedHeaders: 'accept, content-type',
    method: 'GET, POST'
}

const transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: contact_config.USER,
        pass: contact_config.PASS
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take massage');
    }
})

app.use('/send', cors(corsOprions));

app.post('/send', cors(corsOprions), (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const theme = req.body.theme;
    const phone = req.body.phone;
    const content = `name: ${name} \n 
                    email: ${email} \n 
                    message: ${message} \n
                    theme: ${theme} \n
                    phone: ${phone} `;
    const mail = {
        from: name,
        to: 'puga.vitaliy@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
})

// UPDATE //
app.post('/api/article_update', (req, res) => {
    Article.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

// DELETE //
app.delete('/api/article_delete', (req, res) => {
    let id = req.query.id;

    Article.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('SERVER RUNNING');
})