import weblogo_text2 from './images/logo_text2.png';

function OffCanvas() {
    return (
        <div className="offcanvas-panel">
            <div className="panel-overlay"></div>
            <div className="offcanvas-panel-inner">
                <div className="panel-logo">
                    <a href="/">
                        <img src={weblogo_text2} />
                    </a>
                </div>
                <div className="about-us">
                    <h5 className="panel-widget-title">Tentang Kami</h5>
                    <p style={{fontSize:"12px"}}>
                        Garapin adalah sebuah aplikasi mobile atau platform digital yang membantu para produsen dan maklon untuk mendapatkan customer yang ingin memproduksi sebuah barang melalui pabrik dan produsen yang terpercaya dengan quantity yang terjangkau oleh customer.
                    </p>
                </div>
                <div className="contact-us">
                    <h5 className="panel-widget-title">Contact Us</h5>
                    <ul>
                        <li>
                            <i className="fal fa-map-marker-alt"></i>
                            <b>PT. Visi Teknologi Digital</b>
                            <p style={{fontSize:"13px"}}> Gd Grand Slipi Tower 5th Fl Unit F. Jl Letjen S Parman Kav 22-24. Palmerah - Jakarta Barat 11480. Indonesia. </p>
                        </li>
                        <li>
                            <i className="fal fa-envelope-open"></i>
                            <a href="mailto:contact@garap.in"> contact@garap.in</a>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp"></i>
                            +62 813-8020-6100
                        </li>
                    </ul>
                </div>
                <a href="#" className="panel-close"><i className="fal fa-times"></i></a>
            </div>
        </div>
    )
}
export default OffCanvas;