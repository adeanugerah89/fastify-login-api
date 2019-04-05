const boom = require('boom')
const db = require('../models/')
const Sequelize = require('sequelize')
var sequelize = new Sequelize('master_data_dev', 'postgres', null, {
    host: 'localhost',
    dialect: 'postgres'
});

exports.getUsers = async (req, reply) => {
    try {
        // const users = await db.users.findAll({benchmark: true})
        const user = sequelize.query("SELECT * FROM users", {benchmark: true})
            .then(users => {
                // We don't need spread here, since only the results will be returned for select queries
                return users
            })
        return user
    } catch (err) {
        throw boom.boomify(err)
    }
}