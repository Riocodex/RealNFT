import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg02, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12 } from '../../components/imageImport'

const Blog = () => {
  const navigate = useNavigate()
  const blogList = [
    {
      image: bg1,
      title: 'Mindfulness Activities for Kids & Toddlers with NFT',
      createdBy: '@callyjoe',
      type: 'Arts',
    },
    {
      image: bg2,
      title: 'Save Thousands Of Lives Through This NFT',
      createdBy: '@kristyhoney',
      type: 'Illustration',
    },
    {
      image: bg3,
      title: 'A place where technology meets craftsmanship',
      createdBy: '@pandaone',
      type: 'Music',
    },
    {
      image: bg4,
      title: 'NFT Market - A Compact Trike with the Big Benefits',
      createdBy: '@streetboy',
      type: 'Video',
    },
    {
      image: bg5,
      title: 'Honoring Black History Month with Toddlers',
      createdBy: '@norsequeen',
      type: 'Game',
    },
    {
      image: bg6,
      title: 'Setting Intentions Instead of Resolutions for 2021',
      createdBy: '@bigbull',
      type: 'Memes',
    },
    {
      image: bg7,
      title: 'Clever Ways to Purchase Extraordinart Items',
      createdBy: '@princess',
      type: 'GIFs',
    },
    {
      image: bg8,
      title: 'How to Save Money on Baby Essentials for NFT',
      createdBy: '@crazyanyone',
      type: 'Video',
    },
    {
      image: bg9,
      title: 'Liki Trike - A Compact Trike with the Big Benefits',
      createdBy: '@angel',
      type: 'Music',
    },
    {
      image: bg10,
      title: 'NFT Market - A Compact the Big Benefits',
      createdBy: '@cutiegirl',
      type: 'Tech',
    },

    {
      image: bg11,
      title: 'Behind the Scenes of the creabik App',
      createdBy: '@funnyguy',
      type: 'Arts',
    },
    {
      image: bg12,
      title: 'Meet fennouni, Product Designer at GitHub',
      createdBy: '@butterfly',
      type: 'GIFs',
    },
  ]
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg02}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Blog & News
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Our Latest Blog and News in Grid Layouts
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
                  Blogs
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

      {/* Start Blog */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {blogList?.map((blog, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={blog?.image}
                      className="img-fluid rounded-md"
                      alt=""
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="like-icon shadow-sm">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-muted icon"
                        >
                          <i className="mdi mdi-18px mdi-heart mb-0"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="card-body position-relative p-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="badge tag gradient rounded-md fw-bold"
                    >
                      {blog?.type}
                    </a>

                    <ul className="list-unstyled mt-2">
                      <li className="list-inline-item text-muted small me-3">
                        <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                        20th January, 2022
                      </li>
                      <li className="list-inline-item text-muted small">
                        <i className="uil uil-clock text-dark h6 me-1"></i>5 min
                        read
                      </li>
                    </ul>
                    <a
                      href="/blog-detail"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/blog-detail')
                      }}
                      className="text-dark title h5 mt-3"
                    >
                      {blog?.title}
                    </a>

                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <a
                        href="/blog-detail"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/blog-detail')
                        }}
                        className="btn btn-link text-muted"
                      >
                        Read more <FiArrowRight className="fea icon-sm" />
                      </a>
                      <span className="text-muted fs-6">
                        by{' '}
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="link"
                        >
                          {blog?.createdBy}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*end row*/}

          <div className="row">
            <div className="col mt-4">
              <div className="text-center">
                <a
                  href=""
                  onClick={e => e.preventDefault()}
                  className="btn btn-primary rounded-md"
                >
                  Load More <i className="uil uil-process mdi-spin ms-1"></i>
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Blog */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Blog
