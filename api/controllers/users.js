const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

//^ VIEW ALL
router.get('/', (req, res) => {
    res.json(users);
})

//^ CREATE NEW 
router.post('/', (req, res) => {
    const { id, username } = req.body;
    users.push({
        id: Number(id),
        username
    });
    res.send(users);
})

//^ VIEW BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = Users.find(w => w.id == id)
    res.json(user);
})

//^ UPDATE BY ID
router.post('/:id', (req, res) => {
    const id = Number(req.params.id);
    users.map((w) => {
        if (id === u.id) {
            u.username = req.body.username
        }
        return w
    })
    res.json(users);
})

//^ DELETE BY ID
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(w => w.id !== id)
    res.json(users)
})

module.exports = router;