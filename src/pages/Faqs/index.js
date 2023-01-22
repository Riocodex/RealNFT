import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg02 } from '../../components/imageImport'
import BackToTop from '../../components/BackToTop'

const Faqs = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState('1')
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
                  Frequently Asked Questions
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Please check How it works in digital arts?
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
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
              <div className="rounded shadow p-4 sticky-bar">
                <ul
                  className="list-unstyled sidebar-nav mb-0 py-0"
                  id="navmenu-nav"
                >
                  <li className={`navbar-item p-0 ${active === "1" ? "active" : ''}`} onClick={() => setActive('1')}>
                    <a href="#getstart" className="h6 text-dark navbar-link">
                      Getting started
                    </a>
                  </li>
                  <li className={`navbar-item mt-3 p-0 ${active === "2" ? "active" : ''}`} onClick={() => setActive('2')}>
                    <a href="#policy" className="h6 text-dark navbar-link">
                      Safety, Security, and Policies
                    </a>
                  </li>
                  <li className={`navbar-item mt-3 p-0 ${active === "3" ? "active" : ''}`} onClick={() => setActive('3')}>
                    <a href="#use" className="h6 text-dark navbar-link">
                      Using Superex NFT
                    </a>
                  </li>
                  <li className={`navbar-item mt-3 p-0 ${active === "4" ? "active" : ''}`} onClick={() => setActive('4')}>
                    <a href="#support" className="h6 text-dark navbar-link">
                      Support Questions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-8 col-md-7 col-12">
              <div className="section-title" id="getstart">
                <h5>Getting started</h5>
              </div>

              <div className="accordion mt-4 pt-2" id="buyingquestion">
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button border-0"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How does it work ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do I need a designer to use Superex ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What do I need to do to start selling ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What happens when I receive an order ?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-title mt-5" id="policy">
                <h5>Safety, Security, and Policies</h5>
              </div>

              <div className="accordion mt-4 pt-2" id="generalquestion">
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingfive">
                    <button
                      className="accordion-button border-0"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="true"
                      aria-controls="collapsefive"
                    >
                      How does it work ?
                    </button>
                  </h2>
                  <div
                    id="collapsefive"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingfive"
                    data-bs-parent="#generalquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix"
                    >
                      Do I need a designer to use Superex ?
                    </button>
                  </h2>
                  <div
                    id="collapsesix"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#generalquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingseven">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseseven"
                      aria-expanded="false"
                      aria-controls="collapseseven"
                    >
                      What do I need to do to start selling ?
                    </button>
                  </h2>
                  <div
                    id="collapseseven"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingseven"
                    data-bs-parent="#generalquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingeight">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeight"
                      aria-expanded="false"
                      aria-controls="collapseeight"
                    >
                      What happens when I receive an order ?
                    </button>
                  </h2>
                  <div
                    id="collapseeight"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingeight"
                    data-bs-parent="#generalquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-title mt-5" id="use">
                <h5>Using Superex NFT</h5>
              </div>

              <div className="accordion mt-4 pt-2" id="paymentquestion">
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingnine">
                    <button
                      className="accordion-button border-0 "
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsenine"
                      aria-expanded="true"
                      aria-controls="collapsenine"
                    >
                      How does it work ?
                    </button>
                  </h2>
                  <div
                    id="collapsenine"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingnine"
                    data-bs-parent="#paymentquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingten">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseten"
                      aria-expanded="false"
                      aria-controls="collapseten"
                    >
                      Do I need a designer to use Superex ?
                    </button>
                  </h2>
                  <div
                    id="collapseten"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingten"
                    data-bs-parent="#paymentquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingeleven">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeleven"
                      aria-expanded="false"
                      aria-controls="collapseeleven"
                    >
                      What do I need to do to start selling ?
                    </button>
                  </h2>
                  <div
                    id="collapseeleven"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingeleven"
                    data-bs-parent="#paymentquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingtwelve">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetwelve"
                      aria-expanded="false"
                      aria-controls="collapsetwelve"
                    >
                      What happens when I receive an order ?
                    </button>
                  </h2>
                  <div
                    id="collapsetwelve"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingtwelve"
                    data-bs-parent="#paymentquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-title mt-5" id="support">
                <h5>Support Questions</h5>
              </div>

              <div className="accordion mt-4 pt-2" id="supportquestion">
                <div className="accordion-item rounded">
                  <h2 className="accordion-header" id="headingthirteen">
                    <button
                      className="accordion-button border-0"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsethirteen"
                      aria-expanded="true"
                      aria-controls="collapsethirteen"
                    >
                      How does it work ?
                    </button>
                  </h2>
                  <div
                    id="collapsethirteen"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingthirteen"
                    data-bs-parent="#supportquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingfourteen">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefourteen"
                      aria-expanded="false"
                      aria-controls="collapsefourteen"
                    >
                      Do I need a designer to use Superex ?
                    </button>
                  </h2>
                  <div
                    id="collapsefourteen"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingfourteen"
                    data-bs-parent="#supportquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingfifteen">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefifteen"
                      aria-expanded="false"
                      aria-controls="collapsefifteen"
                    >
                      What do I need to do to start selling ?
                    </button>
                  </h2>
                  <div
                    id="collapsefifteen"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingfifteen"
                    data-bs-parent="#supportquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded mt-2">
                  <h2 className="accordion-header" id="headingsixteen">
                    <button
                      className="accordion-button border-0 collapsed"
                      style={{ backgroundColor: "#F8F8FC" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesixteen"
                      aria-expanded="false"
                      aria-controls="collapsesixteen"
                    >
                      What happens when I receive an order ?
                    </button>
                  </h2>
                  <div
                    id="collapsesixteen"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingsixteen"
                    data-bs-parent="#supportquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>
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
      <BackToTop />
      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Faqs
