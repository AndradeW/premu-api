import app from './app.js'

app.get('/', (req, resp) =>{
    resp.send('Hello world')
})

app.listen(3000)
console.log('Server on port: ', 3000)

