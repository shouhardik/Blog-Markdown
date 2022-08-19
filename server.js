const express=require('express')
const articleRouter=require('./routes/article')
const app=express()

app.set('view engine','ejs')

app.use('/articles',articleRouter)

app.get('/',(req,res)=>{
    res.render('index',{text:'articles'})
})


app.listen(5000)