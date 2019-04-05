const userController = require('../controllers/usersController')

const routes = [
    {
      method: 'GET',
      url: '/user',
      handler: userController.getUsers
    }
]

module.exports = routes