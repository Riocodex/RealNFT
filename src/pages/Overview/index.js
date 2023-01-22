import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { bg02 } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const OverView = () => {
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
            <div className="col-lg-12 text-center">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  {' '}
                  Hello! <br /> How can we help you?{' '}
                </h5>

                <div className="subcribe-form mt-4 pt-2">
                  <form>
                    <div className="mb-0">
                      <input
                        type="text"
                        id="help"
                        name="name"
                        className="border bg-white rounded-pill opacity-7"
                        required=""
                        placeholder="Search your questions or topic..."
                      />
                      <button
                        type="submit"
                        className="btn btn-pills btn-primary"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
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
                <li className="breadcrumb-item active" aria-current="page">
                  Help Center
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
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="mb-4 title">Find the help you need</h4>
                <p className="para-desc mx-auto text-muted">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-question-circle d-block rounded-md h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <a
                    href="/helpcenter-faqs"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/helpcenter-faqs')
                    }}
                    className="title h5 text-dark"
                  >
                    FAQs
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance.
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-file-bookmark-alt d-block rounded-md h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <a
                    href="/helpcenter-guides"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/helpcenter-guides')
                    }}
                    className="title h5 text-dark"
                  >
                    Guides / Support
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance.
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                <div className="icons text-center mx-auto">
                  <i className="uil uil-cog d-block rounded-md h3 mb-0"></i>
                </div>
                <div className="content mt-4">
                  <a
                    href="/helpcenter-support-request"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/helpcenter-support-request')
                    }}
                    className="title h5 text-dark"
                  >
                    Support Request
                  </a>
                  <p className="text-muted mt-3 mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance.
                  </p>
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
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="mb-4">Get Started</h4>
                <p className="para-desc mx-auto text-muted">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center">
            <div className="col-lg-9 mt-4 pt-2">
              <div className="accordion" id="accordionExample">
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
                    data-bs-parent="#accordionExample"
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
                    data-bs-parent="#accordionExample"
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
                    data-bs-parent="#accordionExample"
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
                    data-bs-parent="#accordionExample"
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

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default OverView
