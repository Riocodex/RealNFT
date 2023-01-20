import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { item1, item2, item3, item4, item5, gif1, gif2, gif3, gif4, gif5, bg01 } from '../../components/imageImport'

const Activity = () => {
  const navigate = useNavigate()
  const activityData = [
    {
      title: 'Digital Art Collection',
      author: 'Panda',
      time: '1 hours ago',
      favorite: 'Started Following',
      image: item1,
    },
    {
      title: 'Skrrt Cobain Official',
      author: 'ButterFly',
      time: '2 hours ago',
      favorite: 'Liked by',
      image: gif1,
    },
    {
      title: 'Wow! That Brain Is Floating',
      author: 'ButterFly',
      time: '2 hours ago',
      favorite: 'Liked by',
      image: item2,
    },
    {
      title: 'Our Journey Start',
      author: 'CalvinCarlo',
      time: '5 hours ago',
      favorite: 'Listed by',
      image: item3,
    },
    {
      title: 'BitBears',
      author: 'ButterFly',
      time: '8 hours ago',
      favorite: 'Liked by',
      image: gif2,
    },
    {
      title: 'Little Kokeshi #13',
      author: 'ButterFly',
      time: '10 hours ago',
      favorite: 'Liked by',
      image: item4,
    },
    {
      title: 'EVOL Floater',
      author: 'CutieGirl',
      time: '13 hours ago',
      favorite: 'Started Following',
      image: gif3,
    },
    {
      title: 'Smart Ape Club (SAC) - Limited Edition',
      author: 'CalvinCarlo',
      time: '18 hours ago',
      favorite: 'Listed by',
      image: gif4,
    },
    {
      title: 'THE SECRET SOCIETY XX #775',
      author: 'CalvinCarlo',
      time: '23 hours ago',
      favorite: 'Listed by',
      image: gif5,
    },
    {
      title: 'Create Your Own World',
      author: 'ButterFly',
      time: '24 hours ago',
      favorite: 'Liked by',
      image: item5,
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
                  Activity
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Please check all digital activities
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

      {/* Start Activities */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="me-lg-4">
                <div className="row g-4">
                  {activityData?.map((data, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <div className="card activity activity-primary rounded-md shadow p-4">
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img
                                src={data?.image}
                                className="avatar avatar-md-md rounded-md shadow-md"
                                alt=""
                              />

                              <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                {data?.favorite === 'Started Following' ? (
                                  <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                ) : data?.favorite === 'Liked by' ? (
                                  <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                ) : (
                                  <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                )}
                              </div>
                            </div>

                            <span className="content ms-3">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="text-dark title mb-0 h6 d-block"
                              >
                                Digital Art Collection
                              </a>
                              <small className="text-muted d-block mt-1">
                                Started Following{' '}
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="link fw-bold"
                                >
                                  @Panda
                                </a>
                              </small>

                              <small className="text-muted d-block mt-1">
                                1 hours ago
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {/*end row*/}

                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="btn btn-link primary text-dark"
                    >
                      Load More <i className="uil uil-arrow-right"></i>
                    </a>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="sticky-bar">
                <h5 className="mb-0">Filters</h5>
                <div className="p-4 rounded-md shadow mt-4">
                  <div className="tagcloud">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-wallet fs-6 me-1"></i> Purchased
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-tag-alt fs-6 me-1"></i> Sales
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-fire fs-6 me-1"></i> Burns
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-heart fs-6 me-1"></i> Likes
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-browser fs-6 me-1"></i> Bids
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-users-alt fs-6 me-1"></i> Following
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-list-ui-alt fs-6 me-1"></i> Listing
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-music fs-6 me-1"></i> Music
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-camera fs-6 me-1"></i> Video
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      <i className="uil uil-illustration fs-6 me-1"></i>{' '}
                      Illustration
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
      {/* End Activities */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Activity
