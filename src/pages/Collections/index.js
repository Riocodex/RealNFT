import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  bg01,
  client01, client02, client03, client04, client05, client06,
  client09, client10, client11, client12, client13,
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
} from '../../components/imageImport'

const Collections = () => {
  const navigate = useNavigate()
  const collectionData = [
    {
      title: 'Digital Arts',
      img1: c3,
      img2: c1,
      img3: c4,
      img4: c10,
      client: client01,
    },
    {
      title: 'Sports',
      img1: c2,
      img2: c5,
      img3: c6,
      img4: c7,
      client: client10,
    },
    {
      title: 'Photography',
      img1: c8,
      img2: c9,
      img3: c11,
      img4: c12,
      client: client12,
    },
    {
      title: 'Illustrations',
      img1: c4,
      img2: c1,
      img3: c10,
      img4: c3,
      client: client02,
    },
    {
      title: 'Animations',
      img1: c5,
      img2: c6,
      img3: c2,
      img4: c7,
      client: client09,
    },
    {
      title: 'Virtual Reality',
      img1: c11,
      img2: c9,
      img3: c8,
      img4: c12,
      client: client11,
    },
    {
      title: 'Digital Arts',
      img1: c12,
      img2: c1,
      img3: c4,
      img4: c10,
      client: client03,
    },
    {
      title: 'Sports',
      img1: c13,
      img2: c5,
      img3: c6,
      img4: c7,
      client: client04,
    },
    {
      title: 'Photography',
      img1: c14,
      img2: c9,
      img3: c11,
      img4: c12,
      client: client05,
    },
    {
      title: 'Illustrations',
      img1: c15,
      img2: c1,
      img3: c10,
      img4: c3,
      client: client01,
    },
    {
      title: 'Animations',
      img1: c7,
      img2: c6,
      img3: c2,
      img4: c5,
      client: client06,
    },
    {
      title: 'Virtual Reality',
      img1: c9,
      img2: c11,
      img3: c8,
      img4: c12,
      client: client13,
    },
  ]
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Collections
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Explore the latest NFTs digital product
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
                <li className="breadcrumb-item active" aria-current="page">
                  Collections
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

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {collectionData?.map((collection, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card collections collection-primary rounded-md shadow p-2 pb-0">
                  <div className="row g-2">
                    <div className="col-12">
                      <img
                        src={collection?.img1}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img2}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img3}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img4}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}

                  <div className="content text-center p-4 mt-n5">
                    <div className="position-relative d-inline-flex">
                      <img
                        src={collection?.client}
                        className="avatar avatar-small rounded-pill img-thumbnail shadow-md"
                        alt=""
                      />
                      <span className="verified text-primary">
                        <i className="mdi mdi-check-decagram"></i>
                      </span>
                    </div>
                    <div className="mt-2">
                      <a
                        href="/explore-four"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/explore-four')
                        }}
                        className="text-dark title h5"
                      >
                        {collection?.title}
                      </a>
                      <p className="text-muted mb-0 small">27 Items</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Collections
