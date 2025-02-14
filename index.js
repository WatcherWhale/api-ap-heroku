const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://cranky-aryabhata-8430ff.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
