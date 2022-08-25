import invitation from "./images/invitation.png";
function IndexJoin() {
    return (
        <section className="cta-area cta-area-v1 pt-130">
            <div className="container-1450">
				<div className='row'>
				</div>
                <div className="cta-wrapper dark-blue-bg">
                    <div className="cta-img wow fadeInDown "><img src={invitation} /></div>
                    <div className="row">
						
                        <div className="col-xl-8 col-lg-12">
                            <div className="text-wrapper wow fadeInUp">
                                <div className="section-title section-title-white mb-55">
                                    <h2>Mulai <span className="fill-text">bergabung</span> menjadi mitra <span className="fill-text">kami</span> sekarang.</h2>
                                </div>
                                <a href="contact.html" className="main-btn bordered-btn btn-white arrow-btn">Bergabung Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndexJoin;