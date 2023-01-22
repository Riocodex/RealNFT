import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, bg01,
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12,
} from '../../components/imageImport'

const Creator = () => {
  const navigate = useNavigate()
  const creatorData = [
    {
      image: client01,
      backgroundImage: work1,
      name: 'Steven Townsend',
      author: 'StreetBoy',
    },
    {
      image: client02,
      backgroundImage: work2,
      name: 'Tiffany Betancourt',
      author: 'CutieGirl',
    },
    {
      image: client03,
      backgroundImage: work3,
      name: 'Mari Harrington',
      author: 'NorseQueen',
    },
    {
      image: client04,
      backgroundImage: work4,
      name: 'Floyd Glasgow',
      author: 'BigBull',
    },
    {
      image: client05,
      backgroundImage: work5,
      name: 'Donna Schultz',
      author: 'Angel',
    },
    {
      image: client06,
      backgroundImage: work6,
      name: 'Joshua Morris',
      author: 'CrazyAnyone',
    },
    {
      image: client07,
      backgroundImage: work7,
      name: 'Carl Williams',
      author: 'LooserBad',
    },
    {
      image: client08,
      backgroundImage: work8,
      name: 'Eugene Green',
      author: 'KristyHoney',
    },
    {
      image: client09,
      backgroundImage: work9,
      name: 'Julius Canale',
      author: 'PandaOne',
    },
    {
      image: client10,
      backgroundImage: work10,
      name: 'Michael Williams',
      author: 'FunnyGuy',
    },
    {
      image: client11,
      backgroundImage: work11,
      name: 'Jacqueline Burns',
      author: 'ButterFly',
    },
    {
      image: client12,
      backgroundImage: work12,
      name: 'Rosaria Vargas',
      author: 'Princess',
    },
  ]
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/*- Start Home */}
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
                  Creators
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  All Featured Creators
                </p>
              </div>
            </div>
            {/*-end col*/}
          </div>
          {/*-end row*/}

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
                  Creators
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*-end container*/}
      </section>
      {/*-end section*/}
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
      {/*- End Home */}

      {/*- Start Section */}
      <section className="section">
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            {creatorData?.map((creator, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden">
                    <div
                      className="py-5"
                      style={{ background: `url(${creator?.backgroundImage})` }}
                    ></div>
                    <div className="position-relative mt-n5">
                      <img
                        src={creator?.image}
                        className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block"
                        alt=""
                      />

                      <div className="content text-center pt-2 p-4">
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="text-dark h6 name d-block mb-0"
                        >
                          {creator?.name}
                        </a>
                        <small className="text-muted">@{creator?.author}</small>

                        <div className="mt-3">
                          <a
                            href=""
                            onClick={e => e.preventDefault()}
                            className="btn btn-pills btn-soft-primary"
                          >
                            Follow
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*-end col*/}
          </div>
          {/*-end row*/}

          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="uil uil-arrow-left fs-5"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="uil uil-arrow-right fs-5"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*-end col*/}
          </div>
          {/*-end row*/}
        </div>
        {/*-end container*/}
      </section>
      {/*-end section*/}
      {/*- End Section */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Creator
