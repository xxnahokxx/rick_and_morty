const users = require(`../utils/user`)

const login = (req, res) => {
    const { email, password } = req.query;
    const user = users.find(el =>el.email === email && el.password === password)


    if (user) {
        res.status(200).json({access:true});
    } else {
        res.status(200).json({access:false});
    }
}
module.exports = login;
