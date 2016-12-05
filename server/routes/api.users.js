const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/api.users')

// ROUTING
router.get('/users', controller.getDatas)
// router.post('/users', controller.postData)
router.get('/users/:id', controller.getData)
router.delete('/users/:id', controller.deleteData)
router.put('/users/:id', controller.updateData)
router.post('/users', controller.registerLocalUser)
router.post('/users/login', controller.loginUser)

module.exports = router
