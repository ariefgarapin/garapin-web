import { MouseParallax, ScrollParallax } from "react-just-parallax";

import logo_tinggi from './images/logo_tinggi.png';
import shape1 from './images/shape/shape-1.png';
import shape2 from './images/shape/shape-2.png';
import shape3 from './images/shape/shape-3.png';

function IndexHome() {
    return (
        <section className="hero-banner-v1 position-relative" id="home">
            <div className="bg-one"></div>
            <div className="bg-two"></div>
            <div className="hero-img hero-img-one scene"><span data-depth=".5"><MouseParallax><img src={logo_tinggi} className="wow fadeInLeft" alt="hero image" /></MouseParallax></span></div>
            <div className="hero-img hero-img-two scene"><span data-depth=".2"><MouseParallax><img src={logo_tinggi} className="wow fadeInLeft" alt="hero image" /></MouseParallax></span></div>
            <div className="shape shape-one scene"><span data-depth="1"><MouseParallax><img src={shape1} alt="shape" /></MouseParallax></span></div>
            <div className="shape shape-two scene"><span data-depth="2"><MouseParallax><img src={shape2} alt="shape" /></MouseParallax></span></div>
            <div className="shape shape-three scene"><span data-depth="3"><MouseParallax><img src={shape3} alt="shape" /></MouseParallax></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">#SemuaBisa</h1>
                            <p className="wow fadeInDown" data-wow-delay="1s">Produksi barang yang Kamu inginkan disini.<br/>Kami mengundang para produsen untuk bergabung.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndexHome;