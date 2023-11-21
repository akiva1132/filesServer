import express from 'express';
import path from 'path';



const app = express()


app.use('/',express.static(path.join(__dirname, '../public')))
app.get('/a',((req,res) => {
    res.send('aaa')
}))
app.listen(3000, () => {
    console.log("server is running");
    
})

