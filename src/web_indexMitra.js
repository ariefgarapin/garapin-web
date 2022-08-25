import React, { Component } from 'react';
import Slider from "react-slick";
import google from './images/google.png';
export default class IndexMitra extends Component {
  render() {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 2
            }
          }
        ]
    };
    return (
        <section className="service-area pt-90 pb-80" id="mitra">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-55 wow fadeInUp">
                        <span className="sub-title st-one">Mitra kami</span>
                        <p style={{fontSize:"15px"}}>Kami bekerja sama dengan ratusan produsen di seluruh indonesia yang siap membantu usaha kamu.</p>
                    </div>
                </div>
            </div>
            <div className="justify-content-center">


<Slider {...settings}>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
<div>
    <center>
        <img src={google} />
    </center>
</div>
</Slider>


               
            </div>
        </div>
    </section>
    );
  }
}    