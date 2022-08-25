import noimages from './images/noimages.png';

function IndexBlog() {
    return (
        <section className="blog-area blog-area-v1 light-gray-bg pt-130 pb-130" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                            <span className="sub-title st-one">Blog</span>
                            <p>Artikel dan Berita terbaru dari kami</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post-item mb-40">
                            <div className="entry-content">
                                <img src={noimages} style={{width:"100%"}} />
                                <h3 className="title">
									<a href="#">Lorem Ipsum</a>
								</h3>
                                <p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <a href="#" className="btn-link">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <div className="blog-post-item mb-40" data-wow-delay=".25s">
                            <div className="entry-content">
                                <img src={noimages} style={{width:"100%"}} />
                                <h3 className="title">
									<a href="#">Lorem Ipsum</a>
								</h3>
                                <p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <a href="#" className="btn-link">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-post-item mb-40"  >
                            <div className="entry-content">
                                <img src={noimages} style={{width:"100%"}} />
                                <h3 className="title">
									<a href="#">Lorem Ipsum</a>
								</h3>
                                <p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                                <a href="#" className="btn-link">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="button-box text-center wow fadeInUp">
                            <a href="/" className="main-btn arrow-btn">Lihat Semua</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndexBlog;