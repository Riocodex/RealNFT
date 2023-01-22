import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg02 } from '../../components/imageImport'

const Support = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg02}) center` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark mb-0">
                  Submit your Support Request
                </h5>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul
                className="breadcrumb breadcrumb-muted mb-0 p-0"
                style={{ backgroundColor: 'transparent' }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="/index"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/index')
                    }}
                  >
                    Superex
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    href="/helpcenter-overview"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/helpcenter-overview')
                    }}
                  >
                    Help Center
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Support
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}

      {/* Start Section */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="rounded p-4 shadow">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Name <span className="text-danger">*</span>
                            </label>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control"
                              placeholder="First Name :"
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Your Email <span className="text-danger">*</span>
                            </label>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control"
                              placeholder="Your email :"
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Subject</label>
                            <input
                              name="subject"
                              id="subject"
                              className="form-control"
                              placeholder="Your subject :"
                            />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">Comments</label>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control"
                              placeholder="Your Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/*end row*/}
                      <div className="row">
                        <div className="col-sm-12">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary"
                            value="Send Request"
                          />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </form>
                    {/*end form*/}
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

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h6 className="text-muted fw-normal mb-3">
                  Contact us and we'll get back to you as soon as we can.
                </h6>
                <h4 className="title mb-4">Can't find your answer?</h4>
                <div className="mt-4 pt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    data-bs-toggle="modal"
                    data-bs-target="#contactform"
                    className="btn btn-primary rounded-md"
                  >
                    Help Center
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Support
