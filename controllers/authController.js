const { Router } = require('express');
const { isGuest, isAuth } = require('../middlewares/guards');

const router = Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        await req.auth.register(req.body);
        res.redirect('/products')
    } catch (err) {
        res.render('register', {
            title: 'Register',
            error: err.name,
            data: { username: req.body.username }
        });
    }
});


router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/products');
    } catch (err) {
        res.render('login', {
            title: 'Login',
            error: err.name,
            data: { username: req.body.username }
        });
    }

});

router.get('/logout', isAuth(), (req, res) => {
    req.auth.logout();
    req.redirect('/products');
})

module.exports = router;