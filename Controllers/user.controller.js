const User = require('../Models/user.models')
const Passhash = require('password-hash')
 const Token = require('../Models/token.models')

 exports.signup = async(req , res) => {
    var user = new User({
       email :req.body.email,
       password : Passhash.generate(req.body.password),
       name:req.body.name
    })

    

   user = await user.save()   
   var token = new Token({userid : user._id});
   token = await token.save()
   res.header("Authorisation" , token._id)
    res.status(200).send(user)
 } 

   exports.signin = async (req, res) => {

      var user = await User.findOne({ email: req.body.email })
      console.log(user);
      if (!user) {
         res.send("Email do not exist")
      }
      else {
         console.log(Passhash.verify(req.body.password, user.password))
         if (Passhash.verify(req.body.password, user.password)) {
            res.status(200).send(user)
         }
         else {
            res.send('invalid username or password')
         }
      }
   
   }
   
   //TODO 


 exports.retrieveuser = async(req , res) => {
    //TODO
 }