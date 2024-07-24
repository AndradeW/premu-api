import express from 'express'

const app = express()

app.get('/', (req, resp) =>{
    resp.send('Hello world')
})

app.listen(3000)
console.log('Server on port: ', 3000)

