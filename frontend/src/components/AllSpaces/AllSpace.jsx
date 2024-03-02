import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllSpaces, selectAllSpaces } from '../../features/allSpacesSlice'
// import SearchComponent from '../SearchComponent/Search'
import "./AllSpace.css"

const AllSpace = () => {

  const dispatch = useDispatch()
  const allSpaces = useSelector(selectAllSpaces)

  useEffect(() => {
    dispatch(getAllSpaces())
  }, [dispatch])
  
  return (
    <>
      <div className="all-space-section-bg">
  <div className="overlay"></div>
  <div className="all-space-content-container">
    <div className='space-heading'>ALL SPACES</div>

    <div class="breadcrumb-position">
        <li>zarar</li>
  </div>

   </div>
</div>
{
  allSpaces.map((space)=>(
      <div key={space._id}>
          <div className="spaces-sections">
              <div className="spaces-cards">
                    <div class="row">
                    <div class="col-sm-4 mt-4 ">
                      <div class="card">
                  <img src={space.interiorImages[0]} class="card-img-top" alt="img"/>
                        <div class="card-body">
                          <h5 class="card-title">{space.selectedWorkspace}</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <div class="">READ ME</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
      </div>
  ))
}


    </>
  )
}

export default AllSpace