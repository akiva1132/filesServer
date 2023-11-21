import express from 'express';


const app = express()


app.use('/',express.static('public'))
app.get('/a',((req,res) => {
    res.send('fuck')
}))
app.listen(3000, () => {
    console.log("server is roning");
    
})

