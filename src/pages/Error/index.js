import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import StyleSwitcher from '../../components/StyleSwitcher'
import { logoDark, ErrorImage } from '../../components/imageImport'

const Error = () => {
  return (
    <>
      <div className="back-to-home">
        <a
          href=""
          onClick={e => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      <section className="position-relative bg-soft-primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/* Start Logo  */}
                <div className="text-center">
                  <a href="">
                    <img src={logoDark} alt="" />
                  </a>
                </div>
                {/* End Logo  */}

                {/* Start Content  */}
                <div className="title-heading text-center my-auto">
                  <img src={ErrorImage} className="img-fluid" alt="" />
                  <h1 className="heading sub-heading mb-3 mt-5 text-dark">
                    Page Not Found?
                  </h1>
                  <p className="text-muted">
                    Whoops, this is embarassing. <br /> Looks like the page you
                    were looking for wasn't found.
                  </p>

                  <div className="mt-4">
                    <a href="" className="back-button btn btn-primary">
                      Back to Home
                    </a>
                  </div>
                </div>
                {/* End Content  */}

                {/* Start Footer  */}
                <div className="text-center">
                  <small className="mb-0 text-muted">
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
                {/* End Footer  */}
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* End  */}

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Error
