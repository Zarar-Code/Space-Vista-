import React, { useEffect, useState } from 'react';
import './EachSpace.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSpaceById, getAllSpaces } from '../../features/allSpacesSlice';
import ClipLoader from "react-spinners/ClipLoader";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const EachSpace = () => {
  const { spaceId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllSpaces())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [dispatch]);

  const space = useSelector((state) => selectSpaceById(state, spaceId));

  if (loading) {
    return <div style={{marginTop:"250px"}} className='loader'><ClipLoader color="#725AC1" /></div>;
  }

  return (
    <>
      {space ? (
        <>
          <div className="detail-space-section-bg">
            <div className="overlay"></div>
            <div className="detail-space-content-container">
              <div className="detail-space-heading">{space.selectedWorkspace}</div>
              <div className="breadcrumb-position d-inline-block">
                <ul className='nav-space'>
                  <li><Link to="/allSpace">All Spaces | </Link><span style={{color:'#725AC1'}}>{ space.selectedWorkspace}</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="detail_container detail_Main">
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
        <p>No space found</p>
      )}
    </>
  );
};

export default EachSpace;
