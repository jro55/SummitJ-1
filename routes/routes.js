const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('/html/index.html', {root: './public'});
});

module.exports = router;