const bcrypt = require("bcrypt")
const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
     
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcrypt.compareSync(password,users[i].passHash)
        if (users[i].username === username && existingPassword) {

          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5);
      const passHash = bcrypt.hashSync(password,salt);
      
        console.log('Registering User')
       

        let securedPassword = {...password}
        delete securedPassword.password

        let userObj = {
          username,
          email,
          firstName,
          lastName,
          passHash,
        }
        
        users.push(userObj)
        res.status(200).send(userObj)
        console.log(users)
    }
}

        
       
