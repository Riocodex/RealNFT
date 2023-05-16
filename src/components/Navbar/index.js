import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { character, client01, lightLogo, logoDark } from '../imageImport'

const Navbar = ({ web3Handler, account }) => {
  const [myPublicAddress, setMyPublicAddress] = useState('qhut0...hfteh45')
  const location = useLocation()
  const navigate = useNavigate()
  const url = useMemo(() => location?.pathname === '/blog-detail', [])
  const templatePage = [
    '/become-creator',
    '/creator-profile',
    '/item-detail-one',
    '/index-two',
    '/index-four',
    '/index-five',
    '/index-five-rtl',
    '/index-four-rtl',
    '/index-two-rtl'
  ]
  const becomeUrl = templatePage.includes(location?.pathname)
  const [mobile, setMobile] = useState([])
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
  const mobileHandler = (e, panel) => {
    e.preventDefault()
    const dataIndex = mobile?.findIndex(data => data === panel)
    if (dataIndex === -1) {
      setMobile([...mobile, panel])
    } else {
      const updateRecord = mobile?.filter((data, index) => index !== dataIndex)
      setMobile(updateRecord)
    }
  }





  const getClosest = (elem, selector) => {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = getClosest(matchingMenuItem, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }

  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };
  return (
    <>
      {/* Navbar STart */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${url && 'gradient'}`}
      >
        <div className="container">
          {/* Logo Start*/}
          <a
            className="logo"
            href="/index"
            onClick={e => {
              e.preventDefault()
              navigate('/index')
              setTimeout(() => {
                activateMenu()
                toggleSwitcher(false)
              }, 1000)
            }}
          >
            <span className="">
              <img  
                src={logoDark}
                height="26"
                className={becomeUrl ? 'logo-light-mode' : 'l-dark'}
                alt=""
              />
              <img
                src={lightLogo}
                height="26"
                className={becomeUrl ? 'logo-dark-mode' : 'l-light'}
                alt=""
              />
            </span>
            {/* {!becomeUrl && (
              <img
                src={lightLogo}
                height="26"
                className="logo-dark-mode"
                alt=""
              />
            )} */}
          </a>
          {/* Logo end*/}

          {/* Mobile */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={e => {
                  e.preventDefault()
                  toggleMenu()
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* Mobile */}

          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-1">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {becomeUrl ? (
                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                  ) : (
                    <>
                      <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                      <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                    </>
                  )}
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: 300 }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control border rounded"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
         

          {account ? (
                <li className="list-inline-item mb-0">
                <div className="dropdown dropdown-primary">
                  <button
                    type="button"
                    className="btn btn-pills dropdown-toggle p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={client01}
                      className="rounded-pill avatar avatar-sm-sm"
                      alt=""
                    />
                  </button>
                  <div
                    className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                    style={{ minWidth: 200 }}
                  >
                    <div className="position-relative">
                      <div className="pt-5 pb-3 bg-gradient-primary"></div>
                      <div className="px-3">
                        <div className="d-flex align-items-end mt-n4">
                          <img
                            src={client01}
                            className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                            alt=""
                          />
                          {/* <h6 className="text-dark fw-bold mb-0 ms-1">
                            Calvin Carlo
                          </h6> */}
                        </div>
                        <div className="mt-2">
                          <small className="text-start text-dark d-block fw-bold">
                            Wallet:
                          </small>
                          <div className="d-flex justify-content-between align-items-center">
                            <small id="myPublicAddress" className="text-muted">
                            {account.slice(0, 5) + '...' + account.slice(38, 42)}
                            </small>
                            <a href="" onClick={e => e.preventDefault()} className="text-primary">
                              <span className="uil uil-copy"></span>
                            </a>
                          </div>
                        </div>
  
                        <div className="mt-2">
                          <small className="text-dark">
                            Balance:{' '}
                            <span className="text-primary fw-bold">
                             2,700,000USDC
                            </span>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href="/creator-profile"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/creator-profile')
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                        </span>{' '}
                        Profile
                      </a>
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href=""
                        onClick={e => {
                          e.preventDefault()
                          setTimeout(() => {
                            activateMenu()
                            toggleSwitcher(false)
                          }, 1000)
                          // navigate('/creator-profile-edit')
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-cog align-middle h6 mb-0 me-1"></i>
                        </span>{' '}
                        Settings
                      </a>
                      <div className="dropdown-divider border-top"></div>
                      <a
                        className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                        href=""
                        onClick={e => {
                          e.preventDefault()
                          setTimeout(() => {
                            activateMenu()
                            toggleSwitcher(false)
                          }, 1000)
                          // navigate('/lock-screen')
                        }}
                      >
                        <span className="mb-0 d-inline-block me-1">
                          <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                        </span>{' '}
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </li>
          ):(
            <li className="list-inline-item mb-0 me-1">
            {becomeUrl ? (
              <a
                id="connectWallet"
                className="btn btn-icon btn-pills btn-primary"
              >
                <i className="uil uil-wallet fs-6"></i>
              </a>
            ) : (
              <p id="connectWallet" onClick={web3Handler}>
                <span className="btn-icon-dark">
                  <span className="btn btn-icon btn-pills btn-primary">
                    <i className="uil uil-wallet fs-6"></i>
                  </span>
                </span>
                <span className="btn-icon-light">
                  <span className="btn btn-icon btn-pills btn-light">
                    <i className="uil uil-wallet fs-6"></i>
                  </span>
                </span>
              </p>
            )}
          </li>
          )}
          </ul>
          {/*Login button End*/}

          <div id="navigation">
            {/* Navigation Menu*/}
            <ul
              className={`navigation-menu nav-left ${!becomeUrl && 'nav-light'
                }`}
            >
              <li className="has-submenu parent-parent-menu-item">
                <a 
                 href="/"
                 onClick={e => {
                  e.preventDefault()
                  setTimeout(() => {
                    activateMenu()
                    toggleSwitcher(false)
                  }, 1000)
                  navigate('/')
                }}
                >
                  Home 
                </a>
              
           
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a 
                 href="/explore"
                 onClick={e => {
                  e.preventDefault()
                  setTimeout(() => {
                    activateMenu()
                    toggleSwitcher(false)
                  }, 1000)
                  navigate('/explore')
                }}
                >
                  Explore
                </a>
              
           
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a 
                 href="/aboutus"
                 onClick={e => {
                  e.preventDefault()
                  setTimeout(() => {
                    activateMenu()
                    toggleSwitcher(false)
                  }, 1000)
                  navigate('/aboutus')
                }}
                >
                  About Us
                </a>
              
           
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a 
                 href="/upload-work"
                 onClick={e => {
                  e.preventDefault()
                  setTimeout(() => {
                    activateMenu()
                    toggleSwitcher(false)
                  }, 1000)
                  navigate('/upload-work')
                }}
                >
                  Upload Works
                </a>
              
           
              </li>


            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
    </>
  )
}

export default Navbar