import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { character, client01, lightLogo, logoDark } from '../imageImport'

const Navbar = () => {
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

  const closeModal = () => {
    //   metamask modal
    const modal = document.getElementById('modal-metamask')

    modal.classList.remove('show')
    modal.style.display = 'none'
  }

  const isMetaMaskInstalled = useCallback(() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }, [])

  const checkWalletConnet = useCallback(async () => {
    if (isMetaMaskInstalled()) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      if (!!accounts[0]) {
        const walletAddress =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
        setMyPublicAddress(walletAddress)
      }
    }
  }, [isMetaMaskInstalled])

  useEffect(() => {
    checkWalletConnet()
  }, [checkWalletConnet])

  const _handleConnectWallet = useCallback(async () => {
    const modal = document.getElementById('modal-metamask')

    if (!isMetaMaskInstalled()) {
      //meta mask not installed
      modal.classList.add('show')
      modal.style.display = 'block'
      return
    }
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const walletAddress =
        accounts[0].split('').slice(0, 6).join('') +
        '...' +
        accounts[0]
          .split('')
          .slice(accounts[0].length - 7, accounts[0].length)
          .join('')
      setMyPublicAddress(walletAddress)
    } catch (error) {
      console.error(error)
    }
  }, [isMetaMaskInstalled])


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
            <li className="list-inline-item mb-0 me-1">
              {becomeUrl ? (
                <a
                  id="connectWallet"
                  className="btn btn-icon btn-pills btn-primary"
                >
                  <i className="uil uil-wallet fs-6"></i>
                </a>
              ) : (
                <p id="connectWallet" onClick={_handleConnectWallet}>
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
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          Calvin Carlo
                        </h6>
                      </div>
                      <div className="mt-2">
                        <small className="text-start text-dark d-block fw-bold">
                          Wallet:
                        </small>
                        <div className="d-flex justify-content-between align-items-center">
                          <small id="myPublicAddress" className="text-muted">
                            {myPublicAddress}
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
                            0.00045ETH
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
                      href="/creator-profile-edit"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/creator-profile-edit')
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
                      href="/lock-screen"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/lock-screen')
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
                href=""
                 onClick={e =>
                   mobileHandler(e, 'home')
                  }
                >
                  Home 
                </a>
              
           
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a 
                href="/explore-two" 
                onClick={e => {
                  e.preventDefault()
                  setTimeout(() => {
                    activateMenu()
                    toggleSwitcher(false)
                  }, 1000)
                  navigate('/explore-two')
                }}
                >
                  Explore
                </a>
               
              </li>

              <li>
                <a
                  href="/activity"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/activity')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Activity
                </a>
              </li>

              <li>
                <a
                  href="/wallet"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/wallet')
                  }}
                  className="sub-menu-item"
                >
                  Wallet
                </a>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={e => mobileHandler(e, 'pages')}>
                  Pages
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${mobile.includes('pages') ? 'open' : ''
                    }`}
                >
                  <li>
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
                      className="sub-menu-item"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'creators')}>
                      {' '}
                      Creator{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('creators') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/creators"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/creators')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Creators
                        </a>
                      </li>
                      <li>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/creator-profile')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Creator Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/creator-profile-edit"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/creator-profile-edit')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Profile Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="/become-creator"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/become-creator')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Become Creator
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/collections"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/collections')
                      }}
                      className="sub-menu-item"
                    >
                      Collections
                    </a>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'blog')}>
                      {' '}
                      Blog{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('blog') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/blogs"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/blogs')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog-sidebar"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/blog-sidebar')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Blog with sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/blog-detail')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'auth')}>
                      {' '}
                      Auth Pages{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('auth') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/login"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/login')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="/signup"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/signup')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Signup
                        </a>
                      </li>
                      <li>
                        <a
                          href="/reset-password"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/reset-password')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Forgot Password
                        </a>
                      </li>
                      <li>
                        <a
                          href="/lock-screen"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/lock-screen')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Lock Screen
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'special')}>
                      {' '}
                      Special
                      {/* <span className="badge bg-warning">NEW</span> */}{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('special') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/comingsoon"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/comingsoon')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a
                          href="/maintenance"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/maintenance')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a
                          href="/error"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/error')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          404!
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'help')}>
                      {' '}
                      Help Center
                      {/* <span className="badge bg-warning">
                        NEW
                      </span>{' '} */}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('help') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/helpcenter-overview"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/helpcenter-overview')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="/helpcenter-faqs"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/helpcenter-faqs')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          href="/helpcenter-guides"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/helpcenter-guides')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Guides
                        </a>
                      </li>
                      <li>
                        <a
                          href="/helpcenter-support-request"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/helpcenter-support-request')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
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
                      className="sub-menu-item"
                    >
                      Upload Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/terms')
                      }}
                      className="sub-menu-item"
                    >
                      Terms Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/privacy')
                      }}
                      className="sub-menu-item"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/changelog"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/changelog')
                      }}
                      className="sub-menu-item"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/contact')
                  }}
                  className="sub-menu-item"
                >
                  Contact
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
