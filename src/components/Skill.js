import React, { useEffect } from "react";
import "./Skill.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="skills"
      className="wrapper"
    >
      <div className="container skills">
        <Flip right>
          <div className="s-heading">
            <p>My Skills</p>
          </div>
          <div className="s">
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://redux.js.org/img/redux-logo-landscape.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  {
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU"
                      alt=""
                    />
                  }
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://www.thesoftwarereport.com/wp-content/uploads/2022/08/MongoDB.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://miro.medium.com/max/1400/1*y7D5jICmjzvxZP6z-5EtDg.png"
                    alt=""
                  />
                </div>
              </div>
            </Bounce>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default Skill;
