module.exports = {
    createAccessory(req,res) {
        res.render('createAccessory', {title: 'Create new Accessory'});
    },
    async accessoryPost(req,res){
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        }

        //must have try/catch block
        await req.storage.createAccessory(accessory);
        res.redirect('/')
    }
}