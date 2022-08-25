import React from 'react';
import './css/style.css';
import './css/default.css';
import './css/responsive.css';

import WebPreLoader from './web_preloader.js';
import WebHeader from './web_header.js';
import OffCanvas from './web_offcanvas.js';
import IndexHome from './web_indexHome';
import IndexService from './web_indexService';
import IndexCarakerja from './web_indexCarakerja';
import IndexJoin from './web_indexJoin';
import IndexContact from './web_indexContact';
import IndexBlog from './web_indexBlog';
import IndexMitra from './web_indexMitra';
import IndexFooter from './web_indexFooter';
function GarapinWeb() {
    return (
        <React.StrictMode>
            <WebPreLoader />
            <WebHeader />
            <OffCanvas />
            <IndexHome />
            <IndexService />
            <IndexCarakerja />
            <IndexJoin />
            <IndexContact />
            <IndexBlog />
            <IndexMitra />
            <IndexFooter />
        </React.StrictMode>
    )
}

export default GarapinWeb;