const express = require('express');
const app = express();
const generalRoutes = require('./routes/routes');
// const mongoose = require('mongoose');
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});
app.use('/', generalRoutes);
// mongoose.connect("mongodb+srv://ezepirela:04021998eze@cluster0.ai1xb.mongodb.net/<AmazonClone>?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     app.listen(process.env.PORT || 4000, () => {
//         console.log('server running');
//     });
// })
// .catch((error) => {
//     console.log(error);
// })
app.listen(4000, () => {
    console.log('app running');
})