const { Router } = require('express');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', async (req, res) => {
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


router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', async (req, res) => {
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

})

module.exports = router;