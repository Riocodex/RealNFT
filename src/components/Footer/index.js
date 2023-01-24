import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import BackToTop from '../BackToTop'
import { MetaMask_Fox, playStore, app, iconLogo, iconLogo2 } from '../imageImport'
// let copy = React.string({js|©|js});

const Footer = () => {

  let year = new Date().getFullYear(); 
  
  const navigate = useNavigate()
  
  return (
    <>
      <footer className="bg-footer">
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7 col-md-6">
                <h5 className="text-light fw-normal title-dark">
                  Download the Rethestate app to get the best experience
                </h5>

                <div className="mt-4">
                  <a href="">
                    <img src={app} height="40" alt="" />
                  </a>
                  <a href="" className="ms-2">
                    <img src={playStore} height="40" alt="" />
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5 col-md-6 mt-4 mt-sm-0">
                <h5 className="text-light fw-normal title-dark">
                  Join Rethestate community
                </h5>

                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4 text-lg-end">
                  <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="https://www.facebook.com/rethestate" className="rounded">
                      <i className="uil uil-facebook-f"></i>
                    </a>
                  </li>
                  <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="https://www.instagram.com/rethestate/" className="rounded">
                      <i className="uil uil-instagram"></i>
                    </a>
                  </li>
                  <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="https://www.linkedin.com/company/rethestate/" className="rounded">
                      <i className="uil uil-linkedin"></i>
                    </a>
                  </li>
                  {/* <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="" className="rounded">
                      <i className="uil uil-dribbble"></i>
                    </a>
                  </li> */}
                  <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="https://twitter.com/rethestate" className="rounded">
                      <i className="uil uil-twitter"></i>
                    </a>
                  </li>
                  {/* <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="" className="rounded">
                      <i className="uil uil-skype"></i>
                    </a>
                  </li> */}
                  <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="https://t.me/rethestate" className="rounded">
                      <i className="uil uil-telegram"></i>
                    </a>
                  </li>
                  {/* <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="" className="rounded">
                      <i className="uil uil-slack"></i>
                    </a>
                  </li> */}
                  {/* <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="" className="rounded">
                      <i className="uil uil-tumblr"></i>
                    </a>
                  </li> */}
                  {/* <li
                    className="list-inline-item lh-1"
                    style={{ paddingRight: 3 }}
                  >
                    <a href="" className="rounded">
                      <i className="uil uil-whatsapp"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
        {/*end div*/}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60 footer-border">
                <div className="row">
                  <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" className="logo-footer">
                      <img src={iconLogo2} alt="" />
                    </a>
                    <p className="para-desc mb-0 mt-4">
                    RETHESTATE is a blockchain project that uses Ethereum technology to digitize real estate assets worldwide
                    </p>
                  </div>
                  {/*end col*/}

                  <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Rethestate</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a
                          href="/explore"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/explore')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Explore
                        </a>
                      </li>
                    
                   
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/wallet')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/creators')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{' '}
                          Realtors
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Community</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a
                          href="/aboutus"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/aboutus')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> About
                          Us
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/blogs')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/terms')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Terms &
                          Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/privacy')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Privacy
                          Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/login')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:contact@example.com"
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{' '}
                          Subscribe
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          onClick={e => {
                            e.preventDefault()
                            // navigate('/contact')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Newsletter</h5>
                    <p className="mt-4">
                      Sign up and receive the latest tips via email.
                    </p>
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="foot-subscribe mb-3">
                            <label className="form-label">
                              Write your email{' '}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FiMail className="fea icon-sm icons" />
                              <input
                                type="email"
                                name="email"
                                id="emailsubscribe"
                                className="form-control ps-5 rounded"
                                placeholder="Your email : "
                                required
                                style={{ height: 46 }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submitsubscribe"
                              name="send"
                              className="btn btn-soft-primary"
                              value="Subscribe"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                  
                    Copyright © {year} by Rethestate
                   
                    
                  </p>
                </div>
              </div>
              {/*end col*/}

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled footer-list text-sm-end mb-0">
                  <li className="list-inline-item mb-0">
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        // navigate('/privacy')
                      }}
                      className="text-foot me-2"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        // navigate('/terms')
                      }}
                      className="text-foot me-2"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        // navigate('/helpcenter-overview')
                      }}
                      className="text-foot me-2"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        // navigate('/contact')
                      }}
                      className="text-foot"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
      {/*end footer*/}

      {/* Back to top */}
      <BackToTop />

      {/* Wallet Modal */}
      <div
        className="modal fade"
        id="modal-metamask"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content justify-content-center border-0 shadow-md rounded-md position-relative">
            <div className="position-absolute top-0 start-100 translate-middle z-index-1">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>

            <div className="modal-body p-4 text-center">
              <img
                src={MetaMask_Fox}
                className="avatar avatar-md-md rounded-circle shadow-sm "
                alt=""
              />

              <div className="content mt-4">
                <h5 className="text-danger mb-4">Error!</h5>

                <p className="text-muted">
                  Please Download MetaMask and create your profile and wallet in
                  MetaMask. Please click and check the details,
                </p>

                <a
                  href="https://metamask.io/"
                  className="btn btn-link primary text-primary fw-bold"
                  target="_blank"
                >
                  MetaMask
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wallet Modal */}
    </>
  )
}

export default Footer
