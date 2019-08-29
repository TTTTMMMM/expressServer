const express = require('express');
const path = require('path');
/* Tutorial: https://www.youtube.com/watch?v=L72fhGm1tfE */

const server = express();

// Set a static folder
server.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Express server started on port ${PORT}`));