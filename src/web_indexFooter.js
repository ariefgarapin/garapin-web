import logo_text2 from './images/logo_text2.png';
function IndexFooter() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-top pt-75 pb-40">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="footer-logo mb-40 wow fadeInLeft">
                                <img src={logo_text2} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-wrapper mb-40 wow fadeInRight">
                                <h3>#
                                    <span className="blue-dark">SemuaBisa</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget pt-70 pb-40">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="widget footer-nav-widget mb-40 wow fadeInUp" data-wow-delay=".15s">
                                <h4 className="widget-title">Tentang Kami</h4>
                                <p style={{fontSize:"13px"}}>
									Garapin adalah sebuah aplikasi mobile atau platform digital yang membantu para produsen dan maklon untuk mendapatkan customer yang ingin memproduksi sebuah barang melalui pabrik dan produsen yang terpercaya dengan quantity yang terjangkau oleh customer.
								</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget social-widget mb-40 wow fadeInUp" data-wow-delay=".25s">
                                <h4 className="widget-title">Ikuti Kami</h4>
                                <ul className="social-nav">
                                    <li><a href="https://www.instagram.com/garap_in/?hl=en"><i className="fab fa-instagram" style={{color:"#E1306C"}}></i><font style={{fontSize:"12px"}}>garap_in</font></a></li>
                                    <li><a href="https://www.facebook.com/GarapInSemuaBisa/"><i className="fab fa-youtube" style={{color:"red"}}></i><font style={{fontSize:"12px"}}>GarapinOfficial</font></a></li>
                                    <li><a href="https://www.facebook.com/GarapInSemuaBisa/"><i className="fab fa-facebook" style={{color:"blue"}}></i><font style={{fontSize:"12px"}}>GarapInSemuaBisa</font></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="widget newsletter-widget mb-40 wow fadeInUp" data-wow-delay=".30s">
                                <div className="newsletter-content">
                                    <h3>Langganan</h3>
                                    <p style={{fontSize:"14px"}}>Dapatkan informasi terbaru, event, dan promosi menarik dari kami.</p>
                                    <form>
                                        <div className="form_group">
                                            <input type="email" className="form_control" placeholder="Alamat Email" name="email" required />
                                            <button className="main-btn">Berlangganan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>&copy; copyright 2022 GarapIn.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-nav float-lg-right">
                                <ul>
                                    <li>PT. Visi Teknologi Digital</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default IndexFooter;