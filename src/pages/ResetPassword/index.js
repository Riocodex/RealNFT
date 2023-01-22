import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { whiteLogo } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

function ResetPassword() {
  const navigate = useNavigate()
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

      {/*  Hero Start */}
      <section className="position-relative">
        <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
          {/* Note: Vimeo Embed Background Video*/}

          {/*  <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe> */}
          {/* Note: Youtube Embed Background Video*/}
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/*  Start Logo */}
                <div className="text-center">
                  <a href="">
                    <img src={whiteLogo} alt="" />
                  </a>
                </div>
                {/*  End Logo */}

                {/*  Start Content */}
                <div className="title-heading text-center my-auto">
                  <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                    <form>
                      <h5 className="mb-3">Reset Your Password</h5>

                      <p className="text-muted">
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                      </p>

                      <div className="row">
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email address</label>
                          </div>
                        </div>
                        {/* end col*/}

                        <div className="col-12">
                          <button
                            className="btn btn-primary rounded-md w-100"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                        {/* end col*/}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Remember your password ?{' '}
                            </span>
                            <a
                              href="/login"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/login')
                              }}
                              className="text-dark fw-bold"
                            >
                              Sign in
                            </a>
                          </small>
                        </div>
                        {/* end col*/}
                      </div>
                      {/* end row*/}
                    </form>
                  </div>
                </div>
                {/*  End Content */}

                {/*  Start Footer */}
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
                {/*  End Footer */}
              </div>
            </div>
            {/* end col*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section*/}
      {/*  Hero End */}

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default ResetPassword
