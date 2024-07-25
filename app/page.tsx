import Image from "next/image";
import { Style } from "@/public/assets/css";



export default function Home() {
  return (

      <>
  
  <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@400;500;600&display=swap"
      rel="stylesheet"/>

    <link rel="stylesheet" href="assets/css/app.min.css" />
    <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
  {/*<div className="preloader">
    <button className="vs-btn preloaderCls">Cancel Preloader</button>
    <div className="preloader-inner">
      <div className="loader" />
    </div>
  </div>*/}
  {/* <div className="vs-menu-wrapper">
    <div className="vs-menu-area text-center">
      <button className="vs-menu-toggle">
        <i className="fal fa-times" />
      </button>
      <div className="mobile-logo">
        <a href="">
          <img src="../public/assets/img/SFLogo.svg"/>
        </a>
      </div>
      <div className="vs-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a href="/"></a>
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
            <a href="/about">Chro</a>
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
  </div> */}
  {/* <div className="sidemenu-wrapper d-none d-lg-block">
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
            covering all trends. and aloso on youtubue
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
  </div> */}
  {/* <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose">
      <i className="fal fa-times" />
    </button>
    <form action="#">
      <input type="text" placeholder="What are you looking for" />{" "}
      <button type="submit">
        <i className="fal fa-search" />
      </button>
    </form>
  </div> */}

{/* subminu */}
  <header className="vs-header header-layout2">
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center gx-60 justify-content-between">
          <div className="col d-none d-md-block">
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
          <div className="col-auto">
            <a href="#" className="link-btn style2">
              <i className="fas fa-user" />
              Login or Register
            </a>
          </div>
          <div className="col-auto">
            <div className="header-social style2">
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

    {/* menu */}
    <div className="menu-area">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <div className="header-logo">
              <a href="#home">
                <Image src="/assets/img/SFLogo.png" width="150" height="150" alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-auto">
            <nav className="main-menu menu-style2 d-none d-lg-block">
              <ul>
                <li className="menu-item-has-children">
                  <a href="#home">Home</a>
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
                      <a href="podcast.html">Podcast</a>
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
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-auto d-flex">
            <div className="header-btn d-none d-lg-flex">
              <a href="contact.html" className="vs-btn style3">
                Donate Now
              </a>{" "}
              <button className="bar-btn sideMenuToggler style2 d-none d-lg-inline-block">
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
  </header>
  <section
    className="vs-hero-wrapper hero-layout1"
    data-overlay="title"
    data-opacity={8}
    data-bg-src="assets/img/hero/hero-bg-1-1.jpg"
  >
    <div className="hero-shape1" />
    <div className="hero-shape2" />
    <div className="container">
      <div className="hero-content">
        <p className="hero-text">
          Manage your audio podcast website in no time. No coding knowledge
          required - choose a layout, add some content and let your voice be
          heard!
        </p>
        <h1 className="hero-title">Listeners &amp; Community</h1>
        <h2 className="hero-title2">to Show Their Love</h2>
      </div>
      <div className="row justify-content-lg-between align-items-center">
        <div className="col-lg-auto">
          <div className="hero-video">
            <div className="video-inner">
              <img src="assets/img/hero/hero-1-1.jpg" alt="hero" />{" "}
              <a
                href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
                className="play-icon popup-video"
              >
                <i className="fas fa-play" />
              </a>
            </div>
            <div className="video-shape">
              <img src="assets/img/hero/hero-shape-1-1.svg" alt="hero-shape" />
            </div>
          </div>
        </div>
        <div className="col-lg-auto">
          <div className="hero-btn-group">
            <a href="podcast.html" className="vs-btn style4">
              <i className="fab fa-soundcloud" />
              Soundcloud
            </a>{" "}
            <a href="podcast.html" className="vs-btn style4">
              <i className="fab fa-spotify" />
              Spotify
            </a>{" "}
            <a href="podcast.html" className="vs-btn style4">
              <i className="fab fa-apple" />
              Apple
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="">
    <div className="container">
      <div className="podcast-style2">
        <div className="podcast-img">
          <a href="podcast-details.html">
            <img src="assets/img/podcast/podcast-2-1.jpg" alt="podcast" />
          </a>
        </div>
        <div className="podcast-content">
          <span className="podcast-label">Latest Podcast.</span>
          <h2 className="podcast-title">
            <a href="podcast-details.html" className="text-inherit">
              The Crazy Resident Podcast
            </a>
          </h2>
          <div className="podcast-meta">
            <a href="podcast-details.html">
              <i className="fas fa-signal-alt-3" />
              56 Subscribers
            </a>{" "}
            <a href="podcast-details.html">
              <i className="fal fa-play" />
              135 Episodes
            </a>
          </div>
          <a
            href="https://www.youtube-nocookie.com/embed/ckOWcNLkbZc?si=IL6RZazFYLMcQK5B"
            className="watch-btn style2 popup-video"
          >
            <span className="play-btn">
              <i className="fal fa-play" />
            </span>{" "}
            <span className="btn-text">Play Episode</span>
          </a>
          <div className="podcast-shape">
            <img src="assets/img/podcast/pod-shape-1-1.png" alt="shape" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="space-top space-extra-bottom">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-auto text-center text-md-start">
          <div className="title-area">
            <span className="sec-subtitle2">
              <img
                className="icon"
                src="assets/img/icon/microphone.svg"
                alt="icon"
              />
              Enjoy New Shows
            </span>
            <h2 className="sec-title">Podcast Series</h2>
          </div>
        </div>
        <div className="col-auto d-none d-md-block">
          <div className="sec-btns">
            <button className="arrow-btn" data-slick-prev="#podcastslide1">
              <i />
            </button>{" "}
            <button className="arrow-btn" data-slick-next="#podcastslide1">
              <i />
            </button>
          </div>
        </div>
      </div>
      <div
        className="row vs-carousel"
        data-slide-show={3}
        data-md-slide-show={2}
        id="podcastslide1"
      >
        <div className="col-xl-4">
          <div className="podcast-style1">
            <div className="podcast-img">
              <a href="podcast-details.html">
                <img src="assets/img/podcast/podcast-1-1.jpg" alt="podcast" />
              </a>
              <div className="author">
                <img src="assets/img/podcast/pod-avater-1-1.png" alt="author" />
              </div>
            </div>
            <div className="podcast-content">
              <h3 className="podcast-title h4">
                <a href="podcast-details.html" className="text-inherit">
                  The world of technology that connects us
                </a>
              </h3>
              <a href="podcast-details.html" className="podcast-btn">
                <span className="play-btn">
                  <i className="fal fa-play" />
                </span>
                <span className="btn-text">Listen Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="podcast-style1">
            <div className="podcast-img">
              <a href="podcast-details.html">
                <img src="assets/img/podcast/podcast-1-2.jpg" alt="podcast" />
              </a>
              <div className="author">
                <img src="assets/img/podcast/pod-avater-1-2.png" alt="author" />
              </div>
            </div>
            <div className="podcast-content">
              <h3 className="podcast-title h4">
                <a href="podcast-details.html" className="text-inherit">
                  Have you picked the right polaroid camera?
                </a>
              </h3>
              <a href="podcast-details.html" className="podcast-btn">
                <span className="play-btn">
                  <i className="fal fa-play" />
                </span>
                <span className="btn-text">Listen Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="podcast-style1">
            <div className="podcast-img">
              <a href="podcast-details.html">
                <img src="assets/img/podcast/podcast-1-3.jpg" alt="podcast" />
              </a>
              <div className="author">
                <img src="assets/img/podcast/pod-avater-1-1.png" alt="author" />
              </div>
            </div>
            <div className="podcast-content">
              <h3 className="podcast-title h4">
                <a href="podcast-details.html" className="text-inherit">
                  Learn the strategies for your podcast shows
                </a>
              </h3>
              <a href="podcast-details.html" className="podcast-btn">
                <span className="play-btn">
                  <i className="fal fa-play" />
                </span>
                <span className="btn-text">Listen Now</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="podcast-style1">
            <div className="podcast-img">
              <a href="podcast-details.html">
                <img src="assets/img/podcast/podcast-1-4.jpg" alt="podcast" />
              </a>
              <div className="author">
                <img src="assets/img/podcast/pod-avater-1-2.png" alt="author" />
              </div>
            </div>
            <div className="podcast-content">
              <h3 className="podcast-title h4">
                <a href="podcast-details.html" className="text-inherit">
                  My digital broadcast : A speedy answers issue
                </a>
              </h3>
              <a href="podcast-details.html" className="podcast-btn">
                <span className="play-btn">
                  <i className="fal fa-play" />
                </span>
                <span className="btn-text">Listen Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="space" data-bg-src="assets/img/bg/cta-bg-1-1.jpg">
    <div className="container">
      <div className="row align-items-center justify-content-between text-center text-md-start">
        <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
          <div className="mb-2">
            <img src="assets/img/logo-2.svg" alt="Audicast" />
          </div>
          <h2 className="mb-0 sec-title2 text-white">
            Let’s start your own podcast today!
          </h2>
        </div>
        <div className="col-md-auto">
          <a href="contact.html" className="vs-btn style2">
            TUNE FOR NEW PODCAST
          </a>
        </div>
      </div>
    </div>
  </section>
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
  <section className="position-relative space">
    <div
      className="about-shape1"
      data-bg-src="assets/img/bg/ab-shape-1-1.png"
    />
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6 col-xl-5 mb-30 mb-md-0">
          <div className="title-area">
            <span className="sec-subtitle2">
              <img
                className="icon"
                src="assets/img/icon/microphone.svg"
                alt="icon"
              />
              Streaming Applications
            </span>
            <h2 className="sec-title">Explore podcast in Fashion Life</h2>
            <p className="sec-text">
              Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare
              non condimentum et, egestas vel massa. Nullam hendrerit felis quis
              pellentesque porttitor.
            </p>
          </div>
          <div className="img-box1">
            <img src="assets/img/about/ab-1-1.jpg" alt="about" />
          </div>
          <a href="episode.html" className="vs-btn">
            view All Episodes
          </a>
        </div>
        <div className="col-md-6">
          <div className="media-wrap1">
            <div className="media-style1">
              <button className="play-btn">
                <i className="fal fa-play" />
              </button>
              <div className="media-body">
                <div className="media-meta">
                  <a href="podcast.html">Episode 14</a>{" "}
                  <a href="podcast.html">Fashion Life</a>
                </div>
                <h3 className="media-title h4">
                  <a href="podcast-details.html" className="text-inherit">
                    The most remarkable style plans for you
                  </a>
                </h3>
              </div>
            </div>
            <div className="media-style1">
              <button className="play-btn">
                <i className="fal fa-play" />
              </button>
              <div className="media-body">
                <div className="media-meta">
                  <a href="podcast-details.html">Episode 5</a>{" "}
                  <a href="podcast.html">Top Rated</a>
                </div>
                <h3 className="media-title h4">
                  <a href="podcast-details.html" className="text-inherit">
                    How to fabricate propensity in 3 days with Linda?
                  </a>
                </h3>
              </div>
            </div>
            <div className="media-style1">
              <button className="play-btn">
                <i className="fal fa-play" />
              </button>
              <div className="media-body">
                <div className="media-meta">
                  <a href="podcast.html">Episode 11</a>{" "}
                  <a href="podcast.html">Popular Trend</a>
                </div>
                <h3 className="media-title h4">
                  <a href="podcast-details.html" className="text-inherit">
                    How to plan a site with Figma Instrument?
                  </a>
                </h3>
              </div>
            </div>
            <div className="media-style1">
              <button className="play-btn">
                <i className="fal fa-play" />
              </button>
              <div className="media-body">
                <div className="media-meta">
                  <a href="podcast.html">Episode 12</a>{" "}
                  <a href="podcast.html">Classic</a>
                </div>
                <h3 className="media-title h4">
                  <a href="podcast-details.html" className="text-inherit">
                    Seven books each imaginative ought to have perused
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="space-top space-extra-bottom"
    data-bg-src="assets/img/bg/blog-bg-1-1.png"
  >
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-5">
          <div className="title-area">
            <span className="sec-subtitle2">
              <img
                className="icon"
                src="assets/img/icon/microphone.svg"
                alt="icon"
              />
              Streaming Applications
              <img
                className="icon"
                src="assets/img/icon/microphone.svg"
                alt="icon"
              />
            </span>
            <h2 className="sec-title">Direct from the best Blog Posts</h2>
          </div>
        </div>
      </div>
      <div
        className="row vs-carousel"
        data-slide-show={3}
        data-md-slide-show={2}
      >
        <div className="col-xl-4">
          <div className="vs-blog blog-style1">
            <a className="blog-date" href="blog.html">
              <span className="month">Jan</span> 12
            </a>
            <div className="blog-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/blog-1-1.jpg"
                  alt="Blog Thumbnail"
                  className="w-100"
                />
              </a>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Everybody loves pineapples and donuts
                </a>
              </h3>
              <div className="blog-meta">
                <a href="blog.html">
                  <i className="fas fa-user" />
                  John Deo
                </a>{" "}
                <a href="blog.html">
                  <i className="fas fa-comments" />3 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="vs-blog blog-style1">
            <a className="blog-date" href="blog.html">
              <span className="month">Feb</span> 18
            </a>
            <div className="blog-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/blog-1-2.jpg"
                  alt="Blog Thumbnail"
                  className="w-100"
                />
              </a>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Clever ways to get your podcast heard
                </a>
              </h3>
              <div className="blog-meta">
                <a href="blog.html">
                  <i className="fas fa-user" />
                  Vivi Marian
                </a>{" "}
                <a href="blog.html">
                  <i className="fas fa-comments" />5 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="vs-blog blog-style1">
            <a className="blog-date" href="blog.html">
              <span className="month">Mar</span> 19
            </a>
            <div className="blog-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/blog-1-3.jpg"
                  alt="Blog Thumbnail"
                  className="w-100"
                />
              </a>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Business podcasts at different levels
                </a>
              </h3>
              <div className="blog-meta">
                <a href="blog.html">
                  <i className="fas fa-user" />
                  Jane Baker
                </a>{" "}
                <a href="blog.html">
                  <i className="fas fa-comments" />8 Comments
                </a>
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
  <section className="space" data-bg-src="assets/img/bg/newsletter-bg-1-1.jpg">
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