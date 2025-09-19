class Newcontroller {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('NEW Detail !!!!');
    }
}
module.exports = new Newcontroller();
