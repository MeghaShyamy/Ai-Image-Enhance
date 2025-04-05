import React, { useState } from 'react'
import ImageUpload from './Imageupload'
import ImagePreview from './Imagepreview'
import { enhancedimageApi } from '../utils/enhancedimageApi'; // Adjust based on the actual location

const Home = () => {

  const [uploadimage, setUploadimage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)


  const uploadimagehandler = async(file)=>{
    console.log(URL.createObjectURL(file))
    setUploadimage(URL.createObjectURL(file))
    setloading(true)
    // setUploadimage(file)
try {
  const enhancedUrl= await enhancedimageApi(file);
   setEnhancedImage(enhancedUrl.image)
  setloading(false)
  
} catch (error) {
  console.log(error)
  alert("Something went wrong")
  
}

  }

  return (
    <div className=''>
        <ImageUpload uploadimagehandler={uploadimagehandler} />
        <ImagePreview
        loading={loading}
        uploaded={uploadimage}
        enhanced={enhancedImage}
         />

    </div>
  )
}

export default Home