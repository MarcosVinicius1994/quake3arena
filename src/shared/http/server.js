const app = require('./app') 
const port = process.env.APP_PORT_GAMES_INFO

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})