const express = require('express')
const router = express.Router()



router.get('/main', (req, res) => {
    res.render('main')
})







//pagina de error
router.use(function (req, res) {
    res.status(404).render('404')
})

module.exports = router;