import React from 'react'

export default function page() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Audicast - Podcast, Video &amp; Music HTML Template - Podcast</title>
  <meta name="author" content="Vecuro" />
  <meta
    name="description"
    content="Audicast - Podcast, Video & Music HTML Template"
  />
  <meta
    name="keywords"
    content="Audicast - Podcast, Video & Music HTML Template"
  />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
  <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/app.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  {/* <div className="preloader">
    <button className="vs-btn preloaderCls">Cancel Preloader</button>
    <div className="preloader-inner">
      <div className="loader" />
    </div>
  </div> */}
  <div className="vs-menu-wrapper">
    <div className="vs-menu-area text-center">
      <button className="vs-menu-toggle">
        <i className="fal fa-times" />
      </button>
      <div className="mobile-logo">
        <a href="index.html">
          <img src="assets/img/logo.svg" alt="Audicast" />
        </a>
      </div>
      <div className="vs-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a href="index.html">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index.html">Home Style 1</a>
              </li>
              <li>
                <a href="index-2.html">Home Style 2</a>
              </li>
              <li>
                <a href="index-3.html">Home Style 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Podcasts</a>
            <ul className="sub-menu">
              <li>
                <a href="season.html">Season List</a>
              </li>
              <li>
                <a href="episode.html">Episode List</a>
              </li>
              <li>
                <a href="podcast.html">Category Podcast</a>
              </li>
              <li>
                <a href="podcast-details.html">Category Podcast Details</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="blog.html">Blog</a>
            <ul className="sub-menu">
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-grid.html">Blog Grid</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="faq.html">FAQ Page</a>
              </li>
              <li>
                <a href="price-plan.html">Price Plan</a>
              </li>
              <li>
                <a href="team.html">Hosts</a>
              </li>
              <li>
                <a href="team-details.html">Host Details</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-grid.html">Blog Grid</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
              <li>
                <a href="error.html">Error Page</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="shop-details.html">Shop Details</a>
              </li>
              <li>
                <a href="cart.html">Shopping Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="sidemenu-wrapper d-none d-lg-block">
    <div className="sidemenu-content">
      <button className="closeButton sideMenuCls">
        <i className="far fa-times" />
      </button>
      <div className="widget">
        <div className="vs-widget-about">
          <div className="footer-logo">
            <a href="index.html">
              <img src="assets/img/logo.svg" alt="logo" />
            </a>
          </div>
          <p className="footer-text">
            Our pick of the best podcasts on Spotify, Apple Podcasts and more
            covering all trends.
          </p>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>{" "}
            <a href="#">
              <i className="fab fa-twitter" />
            </a>{" "}
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="widget">
        <h3 className="widget_title">Recent Articles</h3>
        <div className="recent-post-wrap">
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-1.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  Everybody loves pineapples and donuts
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="far fa-calendar-alt" />
                  16 Jun 2024
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-2.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  Including animation in your design system
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="far fa-calendar-alt" />
                  14 Aug 2024
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-3.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  Business podcasts at different levels
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="far fa-calendar-alt" />9 Mar 2024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose">
      <i className="fal fa-times" />
    </button>
    <form action="#">
      <input type="text" placeholder="What are you looking for" />{" "}
      <button type="submit">
        <i className="fal fa-search" />
      </button>
    </form>
  </div>
  <header className="vs-header header-layout1">
    <div className="header-top">
      <div className="container-xxl">
        <div className="row justify-content-between align-items-center gx-50">
          <div className="col">
            <div className="header-info">
              <ul>
                <li>
                  <i className="fas fa-clock" />
                  Mon - Sun: 8AM - 8PM
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto d-none d-lg-block">
            <div className="header-links">
              <ul>
                <li>
                  <a href="contact.html">Collaborate</a>
                </li>
                <li>
                  <a href="about.html">Who We Are</a>
                </li>
                <li>
                  <a href="season.html">The Podcast</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto d-none d-md-block">
            <div className="header-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrap">
      <div className="sticky-active">
        <div className="container-xxl">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/img/logo.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu menu-style1 d-none d-lg-block">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home Style 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Style 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Style 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Podcasts</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="season.html">Season List</a>
                      </li>
                      <li>
                        <a href="episode.html">Episode List</a>
                      </li>
                      <li>
                        <a href="podcast.html">Podcast</a>
                      </li>
                      <li>
                        <a href="podcast-details.html">Podcast Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children mega-menu-wrap">
                    <a href="#">Pages</a>
                    <ul className="mega-menu">
                      <li>
                        <a href="shop.html">Pagelist 1</a>
                        <ul>
                          <li>
                            <a href="index.html">Home Style 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Style 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Style 3</a>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ Page</a>
                          </li>
                          <li>
                            <a href="price-plan.html">Price Plan</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pagelist 2</a>
                        <ul>
                          <li>
                            <a href="podcast.html">Podcast</a>
                          </li>
                          <li>
                            <a href="podcast-details.html">Podcast Details</a>
                          </li>
                          <li>
                            <a href="season.html">Season List</a>
                          </li>
                          <li>
                            <a href="episode.html">Episode List</a>
                          </li>
                          <li>
                            <a href="team.html">Hosts</a>
                          </li>
                          <li>
                            <a href="team-details.html">Host Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pagelist 3</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pagelist 4</a>
                        <ul>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-auto d-flex">
              <div className="header-btn">
                <button type="button" className="icon-btn searchBoxTggler">
                  <i className="far fa-search" />
                </button>{" "}
                <a
                  href="contact.html"
                  className="vs-btn style2 d-none d-lg-inline-block"
                >
                  Donate Now
                </a>{" "}
                <button className="bar-btn sideMenuToggler d-none d-lg-inline-block">
                  <span className="bar" /> <span className="bar" />{" "}
                  <span className="bar" />
                </button>
              </div>
              <button className="vs-menu-toggle d-inline-block d-lg-none">
                <i className="fal fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div
    className="breadcumb-wrapper"
    data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg"
  >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Podcast</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section className="space-top space-extra-bottom">
    <div className="container">
      <div className="filter-menu-style1 filter-menu-active">
        <button data-filter="*" className="active">
          All
        </button>{" "}
        <button data-filter=".marketing">Marketing</button>{" "}
        <button data-filter=".finance">Finance</button>{" "}
        <button data-filter=".business">Business</button>{" "}
        <button data-filter=".lifestyle">Lifestyle</button>{" "}
        <button data-filter=".motivation">Motivation</button>
      </div>
      <div className="row justify-content-center filter-active">
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item marketing">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-1.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item finance">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-2.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item motivation">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-3.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item business">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-4.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item motivation">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-1.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-style7 col-md-6 col-lg-12 filter-item lifestyle">
          <div className="podcast-inner">
            <div className="podcast-img">
              <img src="assets/img/podcast/podcast-7-3.jpg" alt="image" />
            </div>
            <div className="podcast-content">
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="podcast-icon play-btn popup-video"
              >
                <i className="fal fa-play" />
              </a>
              <h3 className="podcast-title">
                <a className="text-inherit" href="podcast-details.html">
                  The universe of innovation that associates us
                </a>
              </h3>
              <span className="podcast-author">Edward David</span>{" "}
              <span className="podcast-episode">Episode 9</span>{" "}
              <a href="podcast-details.html" className="vs-btn">
                View Episode
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="bg-theme space-extra">
    <div className="container container-style2">
      <div
        className="row vs-carousel text-center"
        data-slide-show={5}
        data-xl-slide-show={4}
        data-lg-slide-show={3}
        data-md-slide-show={3}
        data-sm-slide-show={3}
        data-xs-slide-show={2}
      >
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-1.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-2.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-3.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-4.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-5.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-1.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-2.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-3.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-4.svg" alt="image" />
          </div>
        </div>
        <div className="col-auto">
          <div>
            <img src="assets/img/brand/brand-2-5.svg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer
    className="footer-wrapper footer-layout1"
    data-bg-src="assets/img/bg/bg-footer.jpg"
  >
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="widget footer-widget">
              <div className="vs-widget-about">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="assets/img/logo-2.svg" alt="logo" />
                  </a>
                </div>
                <p className="footer-text">
                  Our pick of the best podcasts on Spotify, Apple Podcasts and
                  more covering all trends.
                </p>
                <div className="footer-social">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>{" "}
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>{" "}
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-2 col-xl-2">
            <div className="widget widget_pages footer-widget">
              <h3 className="widget_title">Explore</h3>
              <ul>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="podcast.html">Events</a>
                </li>
                <li>
                  <a href="contact.html">Donate Us</a>
                </li>
                <li>
                  <a href="episode.html">List Episode</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-lg-2 col-xl-2">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Examples</h3>
              <div className="menu-all-pages-container footer-menu">
                <ul className="menu">
                  <li>
                    <a href="#">Spotify</a>
                  </li>
                  <li>
                    <a href="#">SoundCloud</a>
                  </li>
                  <li>
                    <a href="#">Mixcloud</a>
                  </li>
                  <li>
                    <a href="#">Buzzsprout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="widget footer-widget">
              <h3 className="widget_title">Get In Touch</h3>
              <div className="wp-widget-contact">
                <p className="footer-address">
                  <img src="assets/img/icon/earth-map.svg" alt="earth map" />
                  2563 Broklyn Golden Street, New York United States of America
                </p>
                <p className="footer-info">
                  <a href="tel:+44012345678">
                    <i className="fas fa-phone-alt" />
                    +44012345678
                  </a>
                </p>
                <p className="footer-info">
                  <i className="fas fa-clock" />
                  Mon - Sun: 8AM - 8PM
                </p>
                <p className="footer-info">
                  <a href="mailto:info@example.com">
                    <i className="fas fa-envelope" />
                    info@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright-wrap">
        <p className="copyright-text">
          Copyright © 2024 <a href="index.html">Audicast</a>. All Rights
          Reserved By{" "}
          <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>
        </p>
      </div>
    </div>
  </footer>
  <a href="#" className="scrollToTop scroll-btn">
    <i className="far fa-arrow-up" />
  </a>
</>

  )
}
