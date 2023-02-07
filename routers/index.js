const express=require('express');
const UserControllers = require('../controllers/userContoller');
const router=express.Router();

//Signup api
router.post('/api/signup',UserControllers.SignUpApi)

//Login Api
router.post('/api/login',UserControllers.LogInApi)

// get user data
router.get('/api/user/:Uid',UserControllers.GetData)

// send data
router.post('/api/user',UserControllers.SendData)

//update data
router.put('/api/user/:Uid',UserControllers.UpdateData)
    
// delete Whole User
router.delete('/api/Deleteuser/:Uid',UserControllers.DeleteData)

module.exports = router;
