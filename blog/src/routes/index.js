const newsRouter = require('./news');
const homeRouter = require('./site');
const searchRouter = require('./site');
function route(app){
   


app.use('/news', newsRouter);
app.use('/search', searchRouter);
app.use('/', homeRouter);


}
module.exports = route;