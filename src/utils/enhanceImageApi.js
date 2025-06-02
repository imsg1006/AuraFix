import axios from "axios";
const API_KEY = "wxmox89acyoz05t59"
const BASE_URL = "https://techhk.aoscdn.com"

export const enhancedImageAPI =async (file) => {
     try{
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID:" , taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image Data:" , enhancedImageData);

        return enhancedImageData;
     }
     catch(error){
        console.log("error enhancing image:", error.message);
     }
};
 
const uploadImage = async (file) => {

    const formData = new FormData();
    formData.append("image_file", file);

    const {data} = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers:{
                "Content-Type": "multipart/form-data",
                "X-API-KEY":API_KEY,
            },
        }
    ) 
    if(!data?.data?.task_id){
        throw new Error("Failed to upload Image! Task ID not found.");
    } 
        return data.data.task_id; 
};

const fetchEnhancedImage = async (taskId) => {

    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers : {
                "X-API-KEY" : API_KEY,
            }
        }
    )
    if(!data?.data){
        throw new Error("Failed to fetch enchanced Image! ");
    } 
        return data.data;  
     
};

const PollForEnhancedImage = async (taskId , retries = 0) => {

   const result = await fetchEnhancedImage(taskId);

   if(result.state === 4) {
   console.log("Processing....");

   if(retries>=20){
   throw new Error("Max retries reached. Please try again later.");
   }

   await new Promise((resolve)=>setTimeout(resolve,2000));
   return PollForEnhancedImage(taskId , retries + 1);
   }

   return result;

}; 

// task_id: '914c04d1-37c4-4a07-b646-9b30c695ecfa' 