import React from 'react';
import "./Home.css"
import {motion} from 'framer-motion'

const Home = () => {
  
  
  return (
  <>
    <div className="mainContainer">
      <section className="section">
      <motion.div 
      initial={{x:-100, opacity:0}}
      whileInView={{ x: 0, opacity:1}}
      transition={{ type: "spring", stiffness: 100 }}

      className='banner-heading'>Find The Best Place For Work</motion.div>
      <div style={{fontSize:"20px", marginBottom:"30px"}}>Space Vista offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity</div>
      <button className='btn-video'>Learn More</button>
      </section>
    </div>
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1 }}

    className="container-home ">
        <div className="video-container">
          <video 
            controls
            preload="auto"
            loop
            muted
            autoPlay
            className="video-player"
          >
            <source src="video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content-video">
          <h1>Solutions designed for
              you and your team</h1>
              <div className='space'></div>
              <p>This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
              <div className='space'></div>
              <button className='btn-video'>Learn More</button>
        </div>
      </motion.div>
      <div className="services-main">
        <motion.div 
        initial={{ x:-100, opacity:0}}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        whileInView={{  x:0, opacity:1 }}
        

        className="content-sh">
          <h1>Our Services</h1>
          <p>Space Vista offer a wealth of advantages for self starters, including networking opportunities, daily structure, and increased productivity.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="service-t">

                  <div className="t-1">
                    <h5 className="mt-2">Free Internet</h5>
                    <p class="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                  </div>
                    
                  <div className="t-1">
                    <h5 class="mt-2">Group Events</h5>
                    <p class="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                  </div>

                  <div className="t-1">
                    <h5 class="mt-2">Meeting Room</h5>
                    <p class="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                  </div>
        
                  <div className="t-1">
                    <h5 class="mt-2">Coffee & Tea</h5>
                    <p class="text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                  </div>   
              </motion.div>
      </div>
  </>
  );
};

export default Home;

