import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { creator } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const BecomeCreator = () => {
  const [name, setName] = useState('streetboyyy')
  const [url, setUrl] = useState('https://superex.exe/streetboyyy')
  const [twitter, _twitter] = useState('https://twitter.com/streetboyyy')
  const handleChange = () => {
    const fileUploader = document.querySelector('#input-file')
    const getFile = fileUploader.files
    if (getFile.length !== 0) {
      const uploadedFile = getFile[0]
      readFile(uploadedFile)
    }
  }

  const readFile = uploadedFile => {
    if (uploadedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        const parent = document.querySelector('.preview-box')
        parent.innerHTML = `<img className="preview-content" src=${reader.result} />`
      }

      reader.readAsDataURL(uploadedFile)
    }
  }
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section className="bg-half-170 d-table w-100 bg-light">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-4 col-md-6">
              <img src={creator} className="img-fluid" alt="" />
            </div>
            {/*end col*/}

            <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="title-heading">
                <h6>Join with Superex!</h6>
                <h5 className="heading fw-bold title-dark mb-4">
                  Start Your <br />
                  <span className="text-gradient-primary">Journey</span>
                </h5>
                <p className="text-muted mb-0 para-desc">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
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

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-3">Fill the form</h4>
                <p className="text-muted mb-0 para-desc mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4 pt-2">
            <div className="col-lg-10">
              <div className="card p-4 rounded-md shadow">
                <div className="row">
                  <div className="col-md-5">
                    <div className="d-grid">
                      <p className="fw-semibold">
                        Upload your ART here, Please click "Upload Image"
                        Button.
                      </p>
                      <div className="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">
                        Supports JPG, PNG and MP4 videos. Max file size : 10MB.
                      </div>
                      <input
                        type="file"
                        id="input-file"
                        name="input-file"
                        accept="image/*"
                        onChange={() => handleChange()}
                        hidden
                      />
                      <label
                        className="btn-upload btn btn-primary rounded-md mt-4"
                        htmlFor="input-file"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>
                  {/*end col*/}

                  <div className="col-md-7 mt-4 mt-sm-0">
                    <div className="ms-md-4">
                      <form>
                        <div className="row">
                          <div className="col-12 mb-4">
                            <label className="form-label">Display Name</label>
                            <input
                              name="name"
                              id="first"
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={e => setName(e.target.value)}
                            />
                          </div>
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label">URL</label>
                            <div className="form-icon">
                              <input
                                name="url"
                                id="superex-url"
                                type="url"
                                className="form-control"
                                value={url}
                                onChange={e => setUrl(e.target.value)}
                              />
                            </div>
                          </div>
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label">Bio</label>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="3"
                              className="form-control"
                              placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."
                            ></textarea>
                          </div>
                          {/*end col*/}

                          <div className="col-12 mb-4">
                            <label className="form-label d-block">
                              Twitter Account
                            </label>
                            <small className="text-muted d-block">
                              Link your twitter account to gain more trust on
                              the Marketplace
                            </small>
                            <div className="form-icon mt-3">
                              <input
                                name="url"
                                id="twitter-url"
                                type="url"
                                className="form-control"
                                value={twitter}
                                onChange={e => _twitter(e.target.value)}
                              />
                            </div>
                          </div>
                          {/*end col*/}

                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-primary rounded-md"
                            >
                              Create Your Account
                            </button>
                          </div>
                          {/*end col*/}
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default BecomeCreator
