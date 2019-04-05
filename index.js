
const fastify = require('fastify')({ logger: true })
const dotenv = require('dotenv')
var jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2FwaV9pZCI6MSwiZXhwIjoxNTU0Mzk1MDE3fQ.q-kp2ZAP_IaEvUjIEg6QOr-UScw47pVU8yf8saZ063U'
const secret = '6faea582e963aa0e16ec09f982e2cd1aff132bd16ef0744fae917230f0e44726c163ffbfc561bf7c2da44c989b16d297adb8fc3295cbdf170599c9073b8055b2'

const routes = require('./routes')

routes.forEach((route, index) => {
    fastify.route(route)
})

// var redis = require("redis"),
//     client = redis.createClient();

// client.on('connect', function () {
//     console.log('Redis client connected');
// });

// client.set('ini Key nya', 'ini valuenya', redis.print);
// client.get('my test key', function (error, result) {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     console.log('GET result ------------->' + result);
// });

// fastify.get('/', async (request, reply) => {
//     try {
//         var decoded = jwt.verify(token, secret, { algorithm: 'HS256' });
//         request.log.info('ini decode', JSON.stringify(decoded))
//     } catch (err) {
//         request.log.info('ini err', err.message)
//     }
//     return 'test'
//     // return { hello: 'world' }
// })

// fastify.post('/:id', async (request, reply) => {
//     request.log.info('Some info about the current request', request.body)
//     reply.type('application/json').code(200)
//     return {
//         hello: 'world',
//         name: request.body.name,
//         id: request.params.id
//     }
// })

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
