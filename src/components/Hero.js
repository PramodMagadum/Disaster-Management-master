import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Hero.css';  // Import the CSS file

const Hero = () => {
  return (
    <div className="heroWrapper">
      <Carousel className="carousel" showThumbs={false} showStatus={false} autoPlay interval={3000} infiniteLoop>
        <div>
          <img src="https://i.natgeofe.com/k/7d906c71-1105-4048-b32b-a55b1b04e3bc/OG_Floods_KIDS_0922_3x2.jpg" alt="Flood" />
          <p className="legend">Flood</p>
        </div>
        <div>
          <img src="https://d1brno4kbxrfxy.cloudfront.net/wp-content/blogs.dir/14/files/2023/04/RS4352_shutterstock_164400506-scr.jpg" alt="Snow" />
          <p className="legend">Snow</p>
        </div>
        <div>
          <img src="https://imgs.mongabay.com/wp-content/uploads/sites/30/2022/06/29103726/1200px-Bandipur_fires_2019-1200x800.jpg" alt="Fire" />
          <p className="legend">Fire</p>
        </div>
        <div>
          <img src="https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-trees.png" alt="Tree" />
          <p className="legend">Tree</p>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1200px-F5_tornado_Elie_Manitoba_2007.jpg" alt="Tornado" />
          <p className="legend">Tornado</p>
        </div>
      </Carousel>
      <div className="sectionsWrapper">
        <div className="helpTile heroTile">
          <div className="helpContent helpTitle">Need Help?</div>
          <div className="helpIntro">We are dedicated to helping those in need. Our mission is to connect individuals and communities with the resources and assistance they require. We collaborate closely with NGOs and government bodies to ensure that aid reaches those who need it most.</div>
          <div className="helpText">Or, Text 123-456-7890 with <br /> your Name, Address <br /> and a brief description.</div>
          <div>
            <iframe className="textVideo" width="350" height="210" src="https://www.youtube.com/embed/cCZWkMXJwQE?si=WQUEalWn5J1itpRW" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className="responseTile heroTile">
          <div className="responseContent responseTitle">Responding to an Emergency?</div>
          <div className="responseContent responseIntro">We can coordinate your response</div>
          <div className="responseData">Get the Data you need, now.</div>
          <div className="responseMap">See a live map of help requests</div>
          <div className="responseVolunteers">Maximize the help of volunteers</div>
          <div className="responseContent responseApp">We are always ready to serve you.</div>
        </div>

        <div className="aboutTile heroTile">
          <div className="aboutContent aboutTitle">About Us</div>
          <div>
            <iframe className="aboutVideo" width="350" height="245" src="https://www.youtube.com/embed/cNVZEVq3KzY?si=MtPdZMpC5zLtf4br" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="aboutFounder">Our mission is to revolutionize disaster management in India, leveraging years of local experience and a deep understanding of the challenges faced by brave volunteers and first responders, by providing them with a cutting-edge tech solution.</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
