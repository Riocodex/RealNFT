import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Loading from '../../components/Loading'
import { bg03, lightLogo } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const ComingSoon = () => {
  return (
    <>
      <Loading />
      <div className="back-to-home">
        <a
          href=""
          onClick={e => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      <section className="position-relative zoom-image">
        <div
          className="bg-overlay image-wrap"
          style={{ background: `url(${bg03}) center` }}
        ></div>
        <div className="bg-overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/* Start Logo */}
                <div className="text-center">
                  <a href="">
                    <img src={lightLogo} alt="" />
                  </a>
                </div>
                {/* End Logo */}

                {/* Start Content */}
                <div className="title-heading text-center my-auto">
                  <h4 className="coming-soon fw-bold display-5 text-white title-dark text-uppercase">
                    Coming Soon
                  </h4>
                  <p className="text-white title-dark para-desc mx-auto mb-0">
                    Our design projects are fresh and simple and will benefit
                    your business greatly. Learn more about our work!
                  </p>

                  <div className="subcribe-form mt-4 pt-2">
                    <form action="page-comingsoon.html">
                      <input
                        type="email"
                        id="email"
                        className="bg-white opacity-6 rounded shadow"
                        required
                        placeholder="Type your Email.."
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ top: 2.5 }}
                      >
                        Notify Me
                      </button>
                    </form>
                  </div>

                  <p className="text-white title-dark mt-2">
                    <span className="text-danger fw-bold">*</span>Notify me when
                    website is launched
                  </p>
                </div>
                {/* End Content */}

                {/* Start Footer */}
                <div className="text-center">
                  <small className="mb-0 text-light title-dark">
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    Superex. Design & Develop with{' '}
                    <i className="mdi mdi-heart text-danger"></i> by{' '}
                    <a
                      href="https://shreethemes.in/"
                      target="_blank"
                      className="text-reset"
                    >
                      Shreethemes
                    </a>
                    .
                  </small>
                </div>
                {/* End Footer */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}

      {/* Style switcher  */}
      <StyleSwitcher />
      {/* End */}
    </>
  )
}

export default ComingSoon
