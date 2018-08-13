const path = require('path');
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
const port = 8081;
app.listen(port, () => console.log(`Example app listening on port ${port}`))