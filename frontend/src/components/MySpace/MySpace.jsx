import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./MySpace.css"

const MySpace = () => {

  const [mySpaces, setMySpaces] = useState([])
  const navigate = useNavigate();

    const fetchSpace = async()=>{
        try {
            const response = await axios.get('/api/v1/mySpace');
            setMySpaces(response.data.data)
        // console.log(response.data.data)

        } catch (error) {
                console.error('Error fetching data:', error);
        } 
    }

    useEffect(() => {
        fetchSpace()
    }, [])

    const redirectToDetail = (spaceId)=>{
      navigate(`/mySpace/${spaceId}`)
    }
    

  return (
    <>
    <div className="mySpace-container-bg">
      <div className="overlay"></div>
      <div className="mySpace-content">
        <div className="mySpace-heading">
        <h1>MY SPACES</h1>
        </div>
      </div>
    </div>
    {
      mySpaces.map((item)=>(
      <div key={item._id}>
          <div class="card" style={{width: "18rem"}}>
      <img src={item.exteriorImages[0]} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.selectedWorkspace}</h5>
            <p class="card-text">Some quick example text to build on the .</p>
              <div onClick={()=>redirectToDetail(item._id)} class="btn btn-primary">Edit</div>
        </div>
    </div>

      </div>
      ))
    }
    
    </>
  )
}

export default MySpace