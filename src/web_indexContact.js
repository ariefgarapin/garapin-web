import { MouseParallax } from "react-just-parallax";

import cloudimg from './images/vector-cloud-outline-png-picture-png-arts.png';
import bird from './images/bird.png';
import contact from './images/contact.png';
import shape4 from './images/shape/shape-4.png';

function IndexContact() {
    return (
        <section className="contact-area contact-area-v1 pt-70 pb-80" id="contact" style={{marginTop:"50px"}}>
            <div className="container">
                <div className="row align-items-center">
					<div className="col-lg-2 d-none d-lg-block">
                        
                    </div>
                     <div className="col-lg-1 d-none d-lg-block">
                        
                    </div>
                     <div className="col-lg-1 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/>
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/><br/><br/>
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                     <div className="col-lg-2 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/>
									<MouseParallax><img src={bird} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/>
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/>
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="text-wrapper mb-50 wow fadeInLeft">
                            <h2>Kami siap <span className="fill-text">membantu</span>
                                kamu! <span className="fill-text">Hubungi kami</span> sekarang!</h2>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="information-style-one mb-40">
                                        <div className="icon">
                                            <span><i className="fal fa-map-marker-alt"></i>Alamat Kantor</span>
                                        </div>
                                        <div className="info">
                                            <h4>PT. Visi Teknologi Digital</h4>
											Gd Grand Slipi Tower 5th Fl Unit F. Jl Letjen S Parman Kav 22-24.<br/>Palmerah - Jakarta Barat 11480. Indonesia.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="information-style-one mb-40">
                                        <div className="icon">
                                            <span><i className="far fa-envelope-open"></i>Alamat Email</span>
                                        </div>
                                        <div className="info">
                                            <h4><a href="mailto:contact@garap.in">contact@garap.in</a></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="information-style-one mb-40">
                                        <div className="icon">
                                            <span><i className="fab fa-whatsapp"></i>Whatsapp</span>
                                        </div>
                                        <div className="info">
                                            <h4>+62 813-8020-6100</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form_group">
                                                <input type="text" className="form_control" placeholder="Nama Lengkap" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form_group">
                                                <input type="email" className="form_control" placeholder="Alamat Email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <textarea className="form_control" placeholder="Pesan kamu" name="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <button className="main-btn arrow-btn">Kirim Pesan</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="img-holder mb-50 wow fadeInRight">
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
                                <MouseParallax><img src={shape4} /></MouseParallax>
								</span>
							</div>
                            <div className="shape shape-icon-two"><span></span></div>
                            
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
                                <MouseParallax><img src={contact} /></MouseParallax>
								</span>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexContact;