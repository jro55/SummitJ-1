const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.sendFile('/src/html/index.html', {root: './public'});
});

module.exports = router;