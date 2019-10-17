// INDEX.JS
const express = require('express')
const app = express()

// SEND FILE TO CLOUDINARY
    const cloudinary = require('cloudinary')
    cloudinary.config({
      cloud_name: 'hyi1byklv',
      api_key: '228387146575583',
      api_secret: 'F4qZ1L5mz9o45RmR0e2qtR0pp8o'
    })

// MULTER
/*
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})*/

/*
app.post('/upload', (req, res, next) => {
  const upload = multer({ storage }).single('name-of-input-key')
  upload(req, res, function(err) {
    if (err) {
      return res.send(err)
    }
    res.json(req.file)
  })
})
*/

//Upload

/*app.post('/upload', (req, res, next) => {
  const upload = multer({ storage }).single('name-of-input-key')
  upload(req, res, function(err) {
    if (err) {
      return res.send(err)
    }
    console.log('file uploaded to server')
    console.log(req.file)

   // SEND FILE TO CLOUDINARY
    const cloudinary = require('cloudinary').v2
    cloudinary.config({
      cloud_name: 'dle7rvtze',
      api_key: '581364286895323',
      api_secret: 'pjpCsWCvBK_xoGNMaQmwIaaMjmU'
    })*/
    
   /* const path = req.file.path
    const uniqueFilename = new Date().toISOString()

    cloudinary.uploader.upload(
      path,
      { public_id: `{uniqueFilename}`, tags: `blog` }, // directory and tags are optional
      function(err, image) {
        if (err) return res.send(err)
        console.log('file uploaded to Cloudinary')
        // remove file from server
        const fs = require('fs')
        fs.unlinkSync(path)
        // return image details
        res.json(image)
      }
    )
  })
})

*/

// const path = req.file.path

//cloudinary.uploader.destroy({ public_id: `blog/2019-10-17T16:53:08.573Z`, tags: `blog` }, function(err, result) {

    //    console.log('file deleted from Cloudinary');
       // console.log(result,err);
    //  }
//);




//cloudinary.v2.api.delete_resources({public_id:'uoootp4pgdroeo2ugn8r', type:'private'},
  //  function(error, result) {console.log(result, error); });

cloudinary.v2.api.delete_resources(['uoootp4pgdroeo2ugn8r'], 
    { type: 'private' },
    function(error, result) {console.log(result, error); });

/*
//Delete With Tag
const uniqueFilename = '2019-10-17T16:53:08.573Z';

cloudinary.v2.api.delete_resources_by_tag('blog',
  function(error, result) {console.log(result, error); });*/

app.listen(3000)
