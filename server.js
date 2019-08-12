const express = require('express');
const app=express();
app.get('/', (req, res) => res.json({ msg: 'Welcome to the link-repo API'}));


//Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/links', require('./routes/links'));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));