import React from 'react'
// import toggleSwitcher from '../StyleSwitcher'
const StyleSwitcher = () => {
    const toggleSwitcher = () => {
        var i = document.getElementById('style-switcher')
        if (i) {
            if (i.style.left === '-189px') {
                i.style.left = '0px'
            } else {
                i.style.left = '-189px'
            }
        }
    }
    return (
        <div id="style-switcher" className="bg-light border p-3 pt-2 pb-2" onClick={(e) => { e.preventDefault(); toggleSwitcher() }}>
            {/* Style switcher  */}
            <div className="content">
                <h6 className="title text-center">Select Your Color</h6>
                <ul className="pattern">
                    <li className="list-inline-item">
                        <a className="color1" onClick={(e) => {
                            e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/default.css'
                        }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color2" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/yellow.css' }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color3" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/green.css' }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color4" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/red.css' }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color5" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/purple.css' }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color6" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/saffron.css' }}></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="color7" href="" onClick={(e) => { e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/pink.css' }}></a>
                    </li>
                </ul>

                <h6 className="title text-center pt-3 mb-0 border-top">Theme Option</h6>
                <ul className="text-center list-unstyled mb-0">
                    <li className="d-grid"><a className="btn btn-sm btn-block btn-primary rtl-version t-rtl-light mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style-rtl.min.css' }}>RTL</a></li>
                    <li className="d-grid"><a className="btn btn-sm btn-block btn-primary ltr-version t-ltr-light mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style.min.css' }}>LTR</a></li>
                    <li className="d-grid"><a className="btn btn-sm btn-block btn-primary dark-rtl-version t-rtl-dark mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css' }}>RTL</a></li>
                    <li className="d-grid"><a href="" className="btn btn-sm btn-block btn-primary dark-ltr-version t-ltr-dark mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style-dark.min.css' }}>LTR</a></li>
                    <li className="d-grid"><a className="btn btn-sm btn-block btn-dark dark-version t-dark mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style-dark.min.css' }}>Dark</a></li>
                    <li className="d-grid"><a href="" className="btn btn-sm btn-block btn-dark light-version t-light mt-2" onClick={(e) => { e.preventDefault(); document.getElementById('theme-opt').href = './css/style.min.css' }}>Light</a></li>
                </ul>

                {/* <h6 className="title text-center pt-3 mb-0 border-top">Download</h6>
                <ul className="text-center list-unstyled mb-0">
                    <li><a href="https://1.envato.market/superex" target="_blank" className="btn btn-sm btn-block btn-warning mt-2 w-100">Download</a></li>
                </ul> */}
            </div>
            <div className="bottom p-0">
                <a href="" className="settings bg-white title-bg-dark shadow d-flex align-items-center justify-content-center">
                    <i className="mdi mdi-cog mdi-24px position-absolute mdi-spin text-primary"></i></a>
            </div>
            {/* end Style switcher  */}
        </div>
    )

}

export default StyleSwitcher