const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

const db = require('./models');
db.sequelize.sync().then(() => {
    console.log("Database synchronized");
}).catch(err => {
    console.error("Failed to synchronize database:", err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
