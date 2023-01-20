import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { bg02 } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const Guides = () => {
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
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  NFTs Guidance
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Please check How to buy & Sell NFTs?
                </p>
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
                  FAQs
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
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h5>Getting started</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Deciding to purchase
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    List your space
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Landing an experience or adventure
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>Top
                    uses questions
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5>Your calendar</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Pricing & availability
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Booking settings
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Responding to enquiries & requests
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Snoozing or deactivating your listing
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 pt-2">
              <h5>Your listings</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Updating your listing
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Neighbourhoods
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Listing photos & photography
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Superex Plus
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    API-connected software
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <h5>How payouts work</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Getting paid
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Adding payout info
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Your payout status
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Donations
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Taxes
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <h5>Your reservations</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Superex safely
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Superex Experiences and Adventures
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Changing a reservation
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Cancelling a reservation
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Long-term reservations
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <h5>Reservation help</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Help with a reservation or guest
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Guest cancellations
                  </a>
                </li>
              </ul>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <h5>Your account</h5>
              <ul className="list-unstyled mt-4 mb-0">
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Your profile
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Account security
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Identification & verifications
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Reviews
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href=""
                    onClick={e => e.preventDefault()}
                    className="text-muted"
                  >
                    <i className="mdi mdi-arrow-right text-primary me-2"></i>
                    Superhost status
                  </a>
                </li>
              </ul>
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

export default Guides
