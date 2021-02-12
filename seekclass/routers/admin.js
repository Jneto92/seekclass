const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('/views/login');
});
router.get('/cadastrar', (req, res)=>{
    res.render('cadastro')
});
router.get('/first', (req, res)=>{
    res.render('primeiroacesso')
});


module.exports = router;