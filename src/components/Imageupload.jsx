

const ImageUpload = (props) => {

    const showImageHandler = (e) => {
      const file = e.target.files[0];
      // console.log(file);
      if(file){
        props.uploadimagehandler(file);
      }
    };
  
    return (
      <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 txt-center hover:bg-blue-200 transition-all'>
  
        
        <input type="file" id="fileInput" className='hidden' onChange={showImageHandler} />
       <span className='text-lg font-medium text-black-900'>Drag and drop your image here or click to select</span>
        </label>
  
        
        
        </div>
    )
  }
  
  export default ImageUpload