const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World from ECS + Jenkins CI/CD!'));
app.listen(3000, () => console.log('App listening on port 3000'));
