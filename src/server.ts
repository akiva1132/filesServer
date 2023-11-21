import express from 'express';
import path from 'path';



const app = express()


app.use('/accessories',express.static(path.join(__dirname, './accessories')))
app.use('/gadgets',express.static(path.join(__dirname, './gadgets')))
app.use('/appliances',express.static(path.join(__dirname, './appliances')))
app.use('/homeandliving',express.static(path.join(__dirname, './homeandliving')))
app.use('/schoolsupplies',express.static(path.join(__dirname, './schoolsupplies')))
app.use('/healthandbeauty',express.static(path.join(__dirname, './healthandbeauty')))
app.use('/babies',express.static(path.join(__dirname, './babies')))
app.use('/groceries',express.static(path.join(__dirname, './groceries')))
app.use('/pets',express.static(path.join(__dirname, './pets')))
app.use('/fashionwomen',express.static(path.join(__dirname, './fashionwomen')))
app.use('/fashionmen',express.static(path.join(__dirname, './fashionmen')))
app.use('/sportsandlifestyle',express.static(path.join(__dirname, './sportsandlifestyle')))
app.use('/automotive',express.static(path.join(__dirname, './automotive')))
app.use('/toysandcollectibles',express.static(path.join(__dirname, './toysandcollectibles')))


app.listen(3000, () => {
    console.log("server is running");
    
})

