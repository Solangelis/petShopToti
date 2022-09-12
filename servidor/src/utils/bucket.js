import cloudinary from 'cloudinary'
import *  as dotenv from 'dotenv'

dotenv.config()
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

const deleteImage = async function(public_id){
  return await cloudinary.uploader.destroy(public_id) 
}

export  {uploadImage, deleteImage}
