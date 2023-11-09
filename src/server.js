const express = require('express'); 
const cors = require('cors');
const middleware = require('./middleware');
const app = express();
const port = 5000;

app.use(cors());


app.use(middleware.decodeToken);

app.get("/api/todos", (req, res) => {
    console.log(req.headers);
    return res.json({
       });
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});