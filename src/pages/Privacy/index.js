import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { bg02 } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const Privacy = () => {
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
                  Privacy Policy
                </h5>
                {/* <p className="text-white-50 para-desc mx-auto mb-0"></p> */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom d-print-none">
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
                  Privacy
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

      {/* Start Privacy */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="card shadow rounded border-0">
                <div className="card-body">
                  <h5 className="card-title">Overview :</h5>
                  <p className="text-muted mt-4">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text.
                  </p>
                  <p className="text-muted">
                    In the 1960s, the text suddenly became known beyond the
                    professional circle of typesetters and layout designers when
                    it was used for Letraset sheets (adhesive letters on
                    transparent film, popular until the 1980s) Versions of the
                    text were subsequently included in DTP programmes such as
                    PageMaker etc.
                  </p>
                  <p className="text-muted">
                    There is now an abundance of readable dummy texts. These are
                    usually used when a text is required purely to fill a space.
                    These alternatives to the classic Lorem Ipsum texts are
                    often amusing and tell short, funny or nonsensical stories.
                  </p>

                  <h5 className="card-title mt-5">
                    We use your information to :
                  </h5>
                  <ul className="list-unstyled text-muted mt-4">
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Create your own skin to match your brand
                    </li>
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Our Talented & Experienced Marketing Agency
                    </li>
                    <li className="mt-2">
                      <i
                        data-feather="arrow-right"
                        className="fea icon-sm me-2"
                      ></i>
                      Create your own skin to match your brand
                    </li>
                  </ul>

                  <h5 className="card-title mt-5">
                    Information Provided Voluntarily :
                  </h5>
                  <p className="text-muted mt-4 mb-0">
                    In the 1960s, the text suddenly became known beyond the
                    professional circle of typesetters and layout designers when
                    it was used for Letraset sheets (adhesive letters on
                    transparent film, popular until the 1980s) Versions of the
                    text were subsequently included in DTP programmes such as
                    PageMaker etc.
                  </p>

                  <div className="mt-4">
                    <a
                      href=""
                      onClick={e => {
                        e.preventDefault()
                        window.print()
                      }}
                      className="btn btn-soft-primary d-print-none"
                    >
                      Print
                    </a>
                  </div>
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
      {/* End Privacy */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Privacy
