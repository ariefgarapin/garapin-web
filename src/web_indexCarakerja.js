import { MouseParallax } from "react-just-parallax";

import cloudimg from './images/vector-cloud-outline-png-picture-png-arts.png';
import aircraft from './images/aircraft.png';
import cari from './images/cari.png';
import ide from './images/ide.png';
import proses from './images/proses.png';
import kirim from './images/kirim.png';

function CaraKerja() {
    return (
        <section className="contact-area contact-area-v1 light-gray-bg pt-70 pb-80" id="carakerja">
            <div className="container">
                <div className="row align-items-center">
					<div className="col-lg-2 d-none d-lg-block">
                        
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
									<MouseParallax><img src={cloudimg} /></MouseParallax>
								</span>
							</div>
                            
                        </div>
                    </div>
                    <div className="col-lg-1 d-none d-lg-block">
                        <div className="img-holder mb-50 wow fadeInLeft" style={{textAlign:"left"}}>
                            <div className="shape shape-icon-one scene">
								<span data-depth="1">
									<br/>
									<MouseParallax><img src={aircraft} /></MouseParallax>
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
                        <div className="section-title mb-45 wow fadeInUp">
                            <span className="sub-title st-one">Cara Kerja</span>
                            <p style={{fontSize:"15px"}}>1, 2, 3, 4... Barang kamu sudah jadi. Semudah itu memproduksi barang yang tadinya hanya di benak kamu, dan kemudian kamu bisa buat.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
					
					
					
					
					
					
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="service-item service-style-one wow fadeInDown" data-wow-delay=".3s">
                            <div className="icon">
                                <img src={ide} style={{width:"100%"}} />
                            </div>
                            <div className="text" style={{marginTop:"20px"}}>
                                <h3 className="title">1. Ide</h3>
                                <p style={{fontSize:"13px"}}>Ide Kamu penting dan berharga, dan kamu membutuhkan bantuan untuk mewujudkan ide Kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <div className="service-item service-style-one mb-40 wow fadeInDown" data-wow-delay=".3s">
                            <div className="icon">
                                <img src={cari} style={{width:"100%"}} />
                            </div>
                            <div className="text" style={{marginTop:"20px"}}>
                                <h3 className="title">2. Cari</h3>
                                <p style={{fontSize:"13px"}}>Temukan dan pelajari mitra Kami untuk kamu bisa memulai project Kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <div className="service-item service-style-one mb-40 wow fadeInDown" data-wow-delay=".3s">
                            <div className="icon">
                                <img src={proses} style={{width:"100%"}} />
                            </div>
                            <div className="text" style={{marginTop:"20px"}}>
                                <h3 className="title">3. Proses</h3>
                                <p style={{fontSize:"13px"}}>Mitra Kami memulai mengerjakan ide Kamu. Kamu bebas untuk memonitor dan memastikan pekerjaan sesuai dengan keinginan Kamu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <div className="service-item service-style-one mb-40 wow fadeInDown" data-wow-delay=".3s">
                            <div className="icon">
                                <img src={kirim} style={{width:"100%"}} />
                            </div>
                            <div className="text" style={{marginTop:"20px"}}>
                                <h3 className="title">4. Kirim</h3>
                                <p style={{fontSize:"13px"}}>Produk Kamu sudah jadi ! Kami segera mengirimkan ke tempat Kamu. Jangan lupa di cek, dan berikan penilaian kepada Mitra Kami.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default CaraKerja;