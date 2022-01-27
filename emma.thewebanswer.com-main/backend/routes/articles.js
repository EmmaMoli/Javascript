const router = require("express").Router();
let Article = require("../models/article.model");

router.route("/").get((req, res) => {
    Article.find()
        .then((articles) => res.json(articles))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newArticle = new Article({
        username,
        title,
        description,
        date,
    });

    newArticle
        .save()
        .then(() => res.json("Article added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Article.findById(req.params.id)
        .then((article) => res.json(article))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json("Article deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Article.findById(req.params.id)
        .then((article) => {
            article.username = req.body.username;
            article.title = req.body.title;
            article.description = req.body.description;
            article.date = Date.parse(req.body.date);

            article
                .save()
                .then(() => res.json("Article updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
