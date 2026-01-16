const express = require('express');
const multer = require('multer');
const path = require('path');

// manual - no full control -- corrupted img
// const upload = multer({dest: 'uploads/'})

//using multer diskStorage...full control of where to save file, filename.....
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({storage})



const app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('Homepage')
})

app.post('/upload',upload.array('images',3),(req,res)=>{
// app.post('/upload',upload.fields([{name:'image'},{name:'coverImage'}]),(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    return res.redirect('/')
    
})

app.listen(3000, ()=>{
    console.log('Server is running...')
})