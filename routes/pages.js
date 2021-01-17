let express = require('express');
let router = express.Router();

/* GET pages listing. */
router.get('/', function(req, res, next) {
    res.send('our own response');
});

module.exports = router;
