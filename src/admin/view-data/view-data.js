import { useEffect, useState,useCallback, useContext  } from "react";
import { createPortal } from 'react-dom';
import axios from 'axios';
import MessageDisplayContext from "../../common-module/MessageDisplayContext";
import LoaderContext from "../../common-module/LoaderContext";
export const ViewData= ()=>{
    const [data, setData] = useState(null);
    const [videoId, setShowModal] = useState(null);
    const [file, setFileData] = useState(null);
    const [isOpen,toggleAccordion] =useState(false);
    const { setMessage ,setMessageType} = useContext(MessageDisplayContext);
    const {setLoaderData} = useContext(LoaderContext);

  useEffect(() => {
    fetchData();
  },[]);
  /**
   * 
   */
  const fetchData = useCallback(() => {
    axios.get('http://localhost:8082/videos')
    .then(response => setData(response.data))
    .catch(error => console.log(error));
  });
  /**
   * 
   */
  const upload = useCallback(() => {
    if(file && file.name){
      const extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
      if(extension!=='mp4'){
        setMessage("Wrong File");
      }else{
        setLoaderData(true);
        let formData=new FormData();
        formData.append("file",file);
        axios.post('http://localhost:8082/upload',formData)
      .then(response =>{ setLoaderData(false); setMessage("Video Upload successfully");setMessageType('success');fetchData();})
      .catch(error =>{ setLoaderData(false);setMessage("Error in upload");setMessageType("Error");});
      }
    }
  }, [setMessage,file,fetchData,setMessage,setMessageType,setLoaderData]);
  


    return (
        <div>
        <div className="accordion">
      <div className="accordion-header" onClick={()=>isOpen?toggleAccordion(false):toggleAccordion(true)}>
      <div> Upload Video</div>
        <div className={`accordion-icon ${isOpen ? 'fa fa-plus' : 'fa fa-minus'}`}>
          {
            isOpen?'-':'+'
          
    }
          </div>
      </div>
      {isOpen && <div className="accordion-content">
      <div className="upload-video">
           <input id="upload-file" disabled="disabled" 
                  placeholder="Select .xlsx file"/>
                  <input type="file" className="upload"
                    onChange={(event) =>setFileData(event.target.files[0])} />
         
           <button className="square" onClick={upload}>
                 Upload
           </button>
           </div>
        </div>
        }
    </div>
           
      {data ? (
        <table  className="table table-bordered">
                <thead className="table-header">
            <tr>
            <td>Image</td>
            <th>Folder</th>
                <th>Name</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody className="table-data">
            {data.data.map(post => (
              <tr key={post.resource_key}>
                
            <td>
              
            {/* <iframe src="post.player_embed_url" width="560" height="315" title="Rick Astley - Never Gonna Give You Up"></iframe> */}

          <img src={post.pictures.base_link} height="75" width="75" alt="No img"></img>
            </td>
            <td>{post.parent_folder?.name}</td>
            <td>
           {post.name}
            </td>
            <td>
            <button className="square" onClick={() => setShowModal(post.uri)} >
                 Delete
           </button>
           {videoId && createPortal(
        <DeletModal onClose={() => setShowModal(null)} videoId={videoId} fetchData={fetchData} setMessage={setMessage}
         setMessageType={setMessageType} setLoaderData={setLoaderData}/>,
        document.body
      )}
            </td>
            </tr>
          ))}
          
        
            </tbody>
         
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )
}

function DeletModal({ onClose ,videoId, fetchData,setMessage,setMessageType,setLoaderData}) {
  return (
    <div>
      
        <div className="modal">
        <div className="modal-header">
            Confirmation !!
          </div>
          <div className="modal-body">
            Are you sure want to delet {videoId} video??
          </div>
          <div className="modal-footer">
          <button className="square" onClick={()=> deletVideo(videoId,fetchData,setMessage,setMessageType,onClose,setLoaderData)}>
                 Delete
           </button>
          <button className="square" onClick={onClose}>
                 Close
           </button>
            </div>
        </div>
    </div>
  );
}

function deletVideo(videoId,fetchData,setMessage,setMessageType,onClose,setLoaderData) {
  if(videoId){
    setLoaderData(true);
    let dto={"id":videoId};
      axios.put('http://localhost:8082/video',dto)
    .then(response =>{ setMessage("Deleted sucessfully");setMessageType("success");onClose(); setLoaderData(false);fetchData();})
    .catch(error =>{  setMessage("Error in deleting");setMessageType("error");setLoaderData(false);onClose();});
  }
}



export default ViewData;
