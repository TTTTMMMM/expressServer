const express = require('express');
const path = require('path');

const server = express();

// Set a static folder
server.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

server.listen(PORT, '192.168.1.151', () => console.log(`Express server started on port ${PORT}`));