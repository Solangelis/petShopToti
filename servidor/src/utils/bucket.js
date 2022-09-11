const cloudinary = require('cloudinary')
require('dotenv').config()

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_PUBLIC_KEY, 
  api_secret: process.env.CLOUD_API_SECRET_KEY,
  secure: true 
});

const uploadImage = async function (filePath) {
  return await cloudinary.v2.uploader.upload(filePath,{
      folder: 'petshop'
  })
}

const deleteImage = async function(publicId){
  return await cloudinary.uploader.destroy(publicId) 
}

module.exports= {uploadImage, deleteImage}; 