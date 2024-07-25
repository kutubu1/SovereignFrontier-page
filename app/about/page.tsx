import React from 'react'

export default function page() {
  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Audicast - Podcast, Video &amp; Music HTML Template - About Us</title>
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
    {/*<div className="preloader">
      <button className="vs-btn preloaderCls">Cancel Preloader</button>
      <div className="preloader-inner">
        <div className="loader" />
      </div>
    </div>*/}

    <div className="vs-menu-wrapper">
      <div className="vs-menu-area text-center">
        <button className="vs-menu-toggle">
          <i className="fal fa-times" />
        </button>
        <div className="mobile-logo">
          <a href="/">
            <img src="assets/img/logo.svg" alt="Audicast" />
          </a>
        </div>
        <div className="vs-mobile-menu">
          <ul>
            <li className="menu-item-has-children">
              <a href="/home">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="#home">Home Style 1</a>
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
              <a href="/about">About Us</a>
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
              <a href="/blog">Blog</a>
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
              <a href="/contact">Contact Us</a>
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
                  <a href="/home">
                    <img src="assets/img/logo.svg" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu menu-style1 d-none d-lg-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="/home">Home</a>
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
                      <a href="/about">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/podcast">Podcasts</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="season.html">Season List</a>
                        </li>
                        <li>
                          <a href="episode.html">Episode List</a>
                        </li>
                        <li>
                          <a href="/podcast">Podcast</a>
                        </li>
                        <li>
                          <a href="podcast-details.html">Podcast Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/blog">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="block">Blog</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    
                    <li>
                      <a href="/contact">Contact</a>
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
          <h1 className="breadcumb-title">About Us</h1>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section
      className="space-top space-extra-bottom"
      data-bg-src="assets/img/bg/ab-bg-2-1.png"
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5 mb-30 mb-lg-0">
            <div className="img-box2">
              <div className="img-2">
                <img src="assets/img/podcast/ab-2-shape-1.png" alt="shape" />
              </div>
              <div className="img-1">
                <img src="assets/img/about/ab-2-1.jpg" alt="about" />
              </div>
              <div
                className="audio-style3 audio-active2"
                data-track="/assets/img/example.mp3"
                data-wav-height={10}
                data-cursor-width={8}
                data-wav-color="#ffffff"
                data-bar-width={0}
                data-bar-height={0}
                data-bar-gap={-1}
                data-progress-color="#266867"
              >
                <div className="audio-top">
                  <div className="audio-time">0:00</div>
                  <div className="audio-duration">0:00</div>
                </div>
                <div className="audio-waveform" />
                <div className="audio-bottom">
                  <button className="audio-repeat">
                    <i className="far fa-sync" />
                  </button>
                  <div className="audio-control">
                    <button className="audio-backward">
                      <i className="fas fa-backward" />
                    </button>{" "}
                    <button className="audio-pause-play">
                      <i className="fas fa-play" />
                    </button>{" "}
                    <button className="audio-forward">
                      <i className="fas fa-forward" />
                    </button>
                  </div>
                  <button className="audio-mic">
                    <i className="fas fa-volume" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="about-wrap1">
              <div className="title-area">
                <span className="sec-subtitle2">
                  <img
                    className="icon"
                    src="assets/img/icon/microphone.svg"
                    alt="icon"
                  />
                  we make your playlist easyer
                </span>
                <h2 className="sec-title">
                  The Best Place to Listen to Your Favorite Song
                </h2>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor. Cum sociis natoque penatibus et
                  magnis dis parturient montes.
                </p>
              </div>
              <div className="row gx-3 align-items-center gy-3">
                <div className="col-auto">
                  <a href="contact.html" className="vs-btn style5">
                    start Trial For Free
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                    className="watch-btn popup-video"
                  >
                    <span className="play-btn">
                      <i className="fal fa-play" />
                    </span>{" "}
                    <span className="btn-text">How it’s Work</span>
                  </a>
                </div>
              </div>
              <div className="media-style2">
                <div className="media-avater">
                  <img src="assets/img/about/avater-1-1.png" alt="about" />{" "}
                  <img src="assets/img/about/avater-1-2.png" alt="about" />{" "}
                  <img src="assets/img/about/avater-1-3.png" alt="about" />
                </div>
                <div className="media-body">
                  <span className="media-title">198M+</span>
                  <p className="media-text">World Wide Listeners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="space-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center text-center text-lg-start">
          <div className="col-lg-5">
            <div className="title-area mb-lg-0">
              <span className="sec-subtitle2">
                <img
                  className="icon"
                  src="assets/img/icon/microphone.svg"
                  alt="icon"
                />
                Streaming Applications
              </span>
              <h2 className="sec-title mb-0">
                Most popular podcast listening platforms
              </h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="row justify-content-between align-items-center gx-80 mb-4 pb-2">
              <div className="col-6 col-xl-auto">
                <div className="brand-style1">
                  <a href="#">
                    <img src="assets/img/brand/brand-1-1.svg" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-6 col-xl-auto">
                <div className="brand-style1">
                  <a href="#">
                    <img src="assets/img/brand/brand-1-2.svg" alt="brand" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-between align-items-center gx-80">
              <div className="col-4 col-xl-auto">
                <div className="brand-style1">
                  <a href="#">
                    <img src="assets/img/brand/brand-1-3.svg" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-4 col-xl-auto">
                <div className="brand-style1">
                  <a href="#">
                    <img src="assets/img/brand/brand-1-4.svg" alt="brand" />
                  </a>
                </div>
              </div>
              <div className="col-4 col-xl-auto">
                <div className="brand-style1">
                  <a href="#">
                    <img src="assets/img/brand/brand-1-5.svg" alt="brand" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="space" data-bg-src="assets/img/bg/cta-bg-3-1.jpg">
      <div className="container text-center text-md-start">
        <div className="row gx-100 align-items-center justify-content-center justify-content-md-start">
          <div className="col-4 col-md-4 col-lg-auto col-xl-4 text-center mb-3 pb-3 pb-md-0 mb-md-0">
            <img src="assets/img/icon/headphone-big-1.svg" alt="icon" />
          </div>
          <div className="col-md-8 col-lg">
            <span className="sec-subtitle2">
              <img
                className="icon"
                src="assets/img/icon/microphone-white.svg"
                alt="icon"
              />
              Streaming Applications
            </span>
            <h2 className="sec-title3 text-white pb-2 mb-xl-4 pb-xl-4">
              Support and stand by listening to our most recent show on apple
              Podcast
            </h2>
            <a href="contact.html" className="vs-btn style2">
              Start Donating
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="title-area text-center">
          <span className="sec-subtitle2">
            <img
              className="icon"
              src="assets/img/icon/microphone.svg"
              alt="icon"
            />{" "}
            List of Episodes{" "}
            <img
              className="icon"
              src="assets/img/icon/microphone.svg"
              alt="icon"
            />
          </span>
          <h2 className="sec-title">Watch Feature episodes</h2>
        </div>
        <div className="row justify-content-center">
          <div className="podcast-style7 col-md-6 col-lg-12">
            <div className="podcast-inner">
              <div className="podcast-img">
                <img src="assets/img/podcast/podcast-7-1.jpg" alt="image" />
              </div>
              <div className="podcast-content">
                <a href="podcast-details.html" className="podcast-icon play-btn">
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
          <div className="podcast-style7 col-md-6 col-lg-12">
            <div className="podcast-inner">
              <div className="podcast-img">
                <img src="assets/img/podcast/podcast-7-2.jpg" alt="image" />
              </div>
              <div className="podcast-content">
                <a href="podcast-details.html" className="podcast-icon play-btn">
                  <i className="fal fa-play" />
                </a>
                <h3 className="podcast-title">
                  <a className="text-inherit" href="podcast-details.html">
                    My digital broadcast : A speedy answers for any issue
                  </a>
                </h3>
                <span className="podcast-author">Vivi Marian</span>{" "}
                <span className="podcast-episode">Episode 5</span>{" "}
                <a href="podcast-details.html" className="vs-btn">
                  View Episode
                </a>
              </div>
            </div>
          </div>
          <div className="podcast-style7 col-md-6 col-lg-12">
            <div className="podcast-inner">
              <div className="podcast-img">
                <img src="assets/img/podcast/podcast-7-3.jpg" alt="image" />
              </div>
              <div className="podcast-content">
                <a href="podcast-details.html" className="podcast-icon play-btn">
                  <i className="fal fa-play" />
                </a>
                <h3 className="podcast-title">
                  <a className="text-inherit" href="podcast-details.html">
                    Methodologies for your next incredible web recording
                  </a>
                </h3>
                <span className="podcast-author">William Jason</span>{" "}
                <span className="podcast-episode">Episode 11</span>{" "}
                <a href="podcast-details.html" className="vs-btn">
                  View Episode
                </a>
              </div>
            </div>
          </div>
          <div className="podcast-style7 col-md-6 col-lg-12">
            <div className="podcast-inner">
              <div className="podcast-img">
                <img src="assets/img/podcast/podcast-7-4.jpg" alt="image" />
              </div>
              <div className="podcast-content">
                <a href="podcast-details.html" className="podcast-icon play-btn">
                  <i className="fal fa-play" />
                </a>
                <h3 className="podcast-title">
                  <a className="text-inherit" href="podcast-details.html">
                    Have you picked the right polaroid camera?
                  </a>
                </h3>
                <span className="podcast-author">Mark Polo</span>{" "}
                <span className="podcast-episode">Episode 15</span>{" "}
                <a href="podcast-details.html" className="vs-btn">
                  View Episode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="hightlight-style1">
      <div className="hightlight-inner">
        <div className="hightlight-row">
          <div className="hightlight-text">
            Listen
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Learn
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Listen
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Learn
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Listen
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Learn
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Listen
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Learn
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Listen
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
          <div className="hightlight-text">
            Learn
            <img src="assets/img/icon/icon.svg" alt="star" />
          </div>
        </div>
      </div>
    </div>
    <section className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto col-lg-5 col-xl-6 pb-3 pb-lg-0 mb-4 mb-lg-0">
            <div className="img-box3">
              <div className="img-1">
                <img src="assets/img/about/ab-3-1.png" alt="about" />
              </div>
              <div className="img-2">
                <img src="assets/img/about/ab-3-2.png" alt="about" />
              </div>
              <div className="img-3">
                <img src="assets/img/about/ab-3-3.png" alt="about" />
              </div>
              <div className="img-4">
                <img src="assets/img/about/ab-3-4.png" alt="about" />
              </div>
              <div className="img-5">
                <img src="assets/img/about/ab-3-5.png" alt="about" />
              </div>
              <div className="img-6">
                <img src="assets/img/about/ab-3-6.png" alt="about" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="title-area">
              <span className="sec-subtitle2">
                <img
                  className="icon"
                  src="assets/img/icon/microphone.svg"
                  alt="icon"
                />
                Streaming Applications
              </span>
              <h2 className="sec-title">Elements That Make Us Special Hosting</h2>
              <p className="sec-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="sec-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
                dis parturient montes.
              </p>
            </div>
            <div className="list-style2">
              <ul className="list-unstyled">
                <li>Excellent Audio Performance</li>
                <li>Enhanced Fans Connection</li>
                <li>Passion for the arts</li>
              </ul>
            </div>
            <a href="contact.html" className="vs-btn style5">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      className="space-top space-extra-bottom"
      data-bg-src="assets/img/bg/newsletter-bg-1-1.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-auto text-center text-lg-start">
            <span className="sec-subtitle">
              <img
                src="assets/img/icon/microphone-white.svg"
                alt="icon"
                className="icon"
              />{" "}
              Get early access to the new episodes.
            </span>
            <h2 className="text-white mb-4 mb-lg-0 h1">
              Subscribe to newsletter!
            </h2>
          </div>
          <div className="col-lg">
            <form action="#" className="form-style1">
              <div className="form-group">
                <input type="email" placeholder="Enter Your Email ......." />{" "}
                <button className="vs-btn style3" type="submit">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
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
