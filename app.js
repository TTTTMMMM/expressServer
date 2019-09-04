const express = require('express');
const path = require('path');
/* Tutorial: https://www.youtube.com/watch?v=L72fhGm1tfE */

const server = express();

oneDay = 60*1000*60*24*110; //on hundred and ten days cache

// Set a static folder
server.use(express.static(path.join(__dirname, 'public'), {maxAge: oneDay}));

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Express server started on port ${PORT}`));