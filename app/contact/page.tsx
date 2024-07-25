import React from 'react'

export default function page() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>
    Audicast - Podcast, Video &amp; Music HTML Template - Contact Us
  </title>
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
        <h1 className="breadcumb-title">Contact Us</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="space">
    <div className="container">
      <div className="map-v1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327595.55804232665!2d8.409273588519302!3d50.098637144812066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2suk!4v1714000919795!5m2!1sen!2suk"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
  <section className="space-bottom">
    <div className="container">
      <div className="row gx-50 flex-row-reverse">
        <div className="col-lg-5 col-xl-4 text-center text-lg-start mb-3 mb-lg-0">
          <p className="sec-subtitle3">Have Questions?</p>
          <h2 className="mb-4 sec-title">Get in Touch!</h2>
          <div className="row">
            <div className="col-lg-12 col-md-4">
              <div className="media-style3">
                <div className="media-icon">
                  <img src="assets/img/icon/map-1-1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="media-title h5">Office Address</h4>
                  <p className="media-text">Princes St, Damietta Egypt-104</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-12 col-md-4">
              <div className="media-style3">
                <div className="media-icon">
                  <img src="assets/img/icon/message-1-1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="media-title h5">Email Address</h4>
                  <p className="media-text">
                    <a href="mailto:info@example.com" className="text-inherit">
                      info@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-12 col-md-4">
              <div className="media-style3">
                <div className="media-icon">
                  <img src="assets/img/icon/call-1-1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h4 className="media-title h5">Phone No.</h4>
                  <p className="media-text">
                    <a href="tel:+447748018211" className="text-inherit">
                      +44(0)77 4801 8211
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-xl-8 text-center text-lg-start">
          <form action="mail.php" className="form-style2 ajax-contact">
            <h2 className="form-title h1">What are you looking for?</h2>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Phone"
                />
              </div>
              <div className="col-12 form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="vs-btn style5" type="submit">
                  Send Message
                </button>
              </div>
            </div>
            <p className="form-messages" />
          </form>
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
