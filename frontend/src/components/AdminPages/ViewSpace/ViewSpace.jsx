import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideNavbar from '../../Admin/AdminPanel/Navside/SideNav'
import BounceLoader from "react-spinners/BounceLoader";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ViewSpace = () => {
  const { spaceId } = useParams();
  const [space, setSpace] = useState(null);
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSpace = async () => {
    try {
      const response = await axios.get(`/api/v1/admin/adminSpace/${spaceId}`);
      setSpace(response.data.data);
      setLoading(false);
      
      // console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSpace();
  });

  useEffect(() => {
    if (space && space.createdBy) {
      const fetchOwner = async () => {
    
        try {
          const response = await axios.get(`/api/v1/users/${space.createdBy}`);
          setOwner(response.data);
          console.log(response.data)

        } catch (error) {
          console.error('Error fetching owner data:', error);
          setOwner(null); // Optionally handle error by setting owner to null
        }
      };

      fetchOwner();
    }
  }, [space]);

  if (loading) {
    return <div style={{marginTop:"250px"}} className='loader'><BounceLoader color="#725AC1" /></div>;
  }

  return (
    <>
    <div className=''><SideNavbar/></div>
    
    <div className='main-admin-container'>
        <div className="container">
        {space ? (
        <>
          <div className="detail_container detail_Main" style={{margin:"0px 28px"}}>
            <div className="inner-detail">
              <div className="detail-img">
                <img src={space.interiorImages[0]} alt="Interior" />
              </div>
              <div className="detail-content">
                <h1>{space.selectedCoworkingOption}</h1>
                <div className="spacer-medium"></div>
                <div className="dprice">Starting From PKR {space.price} per month</div>
                <div className="flex">
                  <div className="capacity">Capacity:</div>
                  <div className="cap">{space.capacity}</div>
                  <div className="spacer-medium"></div>
                  <p>{space.description}</p>
                  <div className="spacer-medium"></div>
                  <p>
                    <span>Key Features: </span>
                    {space.amenities}
                  </p>
                </div>
              </div>
            </div>
            <h1 className='seeSpace'>
              See the <span>Space</span></h1>
            <div className="">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='mySwiper'
              >
                {space.interiorImages.map((image, index) => (
                  <div key={index} className="slider-img">
                    <SwiperSlide className="">
                      <img src={image} alt={`slider-img-${index}`} />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      ) : (
        <p className='flex-No'>No space found</p>
      )}
      {owner && (
        <div className="container">
          <div className="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 p-3">
            <div className='sidebar sticky-sidebar border rounded '>
              <div className='p-4 mt-4 text-center main-owner'>
                <div className="avatar">
                {owner && owner.owner.avatar ? (
                      <div className="circular-image">
                        <img src={owner.owner.avatar} alt="Avatar" />
                      </div>
                    ) : (
                      <div className="default-avatar circular-image">
                        <img src="/images/owner.png" alt="Default Avatar" />
                      </div>
                    )}
                </div>
                <div className="mt-4">
                  <div className="text-muted mb-0 land">Land Owner</div>
                  <div className="div">
                  <h3 className='land mt-3'><span>OWNER NAME:</span>   {owner.owner.fullName}</h3>
                  <h3 className='land mt-3'><span>CONTACT NO:</span>  {space.contactNo}</h3>
                  <h3 className='land mt-3'><span>EMAIL:</span>  {space.email}</h3>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    </>
  );
};

export default ViewSpace;