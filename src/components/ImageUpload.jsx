 const ImageUpload = (props) => {

  const ShowImageHandler = (e) => {

    const file = e.target.files[0];
    if(file){
      props.UploadImageHandler(file);
    }   
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label htmlFor="fileInput" className="block p-6 text-center hover:border-blue-500 transition-all w-full cursor-pointer border-2 rounded-lg border-dashed border-gray-400">
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/>
       <span className="text-lg font-medium text-gray-600">
         Click and Upload your Image.
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
