import axios from 'axios';

const API_KEY ="wxt2kvkf84uo1he7j"
const Base_URL = "https://techhk.aoscdn.com"

export const enhancedimageApi = async (file) => {  
   
try {

    // "/api/tasks/visual/scale"

    const taskid = await uploadImage(file)

    console.log("image uploaded suceddfully" ,taskid);



    const enhancedImagedata = await pollforenchancedImage(taskid);
    console.log("enchanced image data",enhancedImagedata);

    // "/api/tasks/visual/scale/{task_id}"
return enhancedImagedata;
    
} catch (error) {
    console.log("Error enchancing image", error.message)
    
}

};

const uploadImage = async (file) => {

    const formData = new FormData();
    formData.append("image_file", file);

   const {data} = await axios.post(`${Base_URL}/api/tasks/visual/segmentation`, formData ,{
        headers: {
            "Content-Type": "multipart/form-data",
            "X-Api-Key": `${API_KEY}`
        }
    });

    
    if(!data?.data?.task_id){
        throw new Error("Task id not found failed to upload image");
    }
    console.log(data);

     return data.data.task_id;
}


const fetchenchancedImage = async (taskId) => {
    const {data} = await axios.get(`${Base_URL}/api/tasks/visual/segmentation/${taskId}`,{
        headers: {
            "X-Api-Key": `${API_KEY}`
        }
    });

    console.log(data);
    return data.data;
}

const pollforenchancedImage = async (taskId,retries=0) => {
    const result = await fetchenchancedImage(taskId);
    if(result.state=== 4){
        console.log("processing");
        if(retries>10){
            throw new Error("Task failed to process");
        }
        await new Promise((resolve)=>setTimeout(resolve,1000));
       
    
    return pollforenchancedImage(taskId,retries+1);
    }
    
    console.log("result",result.image);
    return result;

    

}


