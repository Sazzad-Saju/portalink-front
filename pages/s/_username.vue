<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars fa-2x"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a class="nav-link" href="#page-top">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <span class="dropbtn">Hire Me
                <i class="fa fa-caret-down"></i>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://www.upwork.com/freelancers/~0106a3086034d47e06">Upwork</a>
              <a class="dropdown-item" href="https://www.fiverr.com/shamonti_haque?up_rollout=true">Fiverr</a>
              <a class="dropdown-item" href="https://www.freelancer.com/u/Shamonti17">Freelancer</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item"
                href="https://drive.google.com/file/d/1PkPZJ6xZn_1UC2NSo6nnaAAT6yMNYr6k/view">Download CV</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Carousel -->
    <!-- <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="10000"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url('~assets/media/s/banner-1.jpg');
          "
        >
          <div class="carousel-caption d-block">
            <h2 class="title-text my-auto" id="banner_text">
              Hi, I'm <span style="color: #ff1d58">Shamonti Haque</span>. <br />
              I am a web designer <br />and front-end developer.
            </h2>
          </div>
        </div>
        <div
          class="carousel-item"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url('~assets/media/s/banner-2.jpg');
          "
        >
          <div class="carousel-caption d-block">
            <h2 class="title-text my-auto">
              Hi, I'm <span style="color: #ff1d58">Shamonti Haque</span>. <br />
              I am a web designer <br />and front-end developer.
            </h2>
          </div>
        </div>
        <div
          class="carousel-item"
          style="
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ),
              url('~assets/media/s/banner-3.jpg');
          "
        >
          <div class="carousel-caption d-block">
            <h2 class="title-text my-auto">
              Hi, I'm <span style="color: #ff1d58">Shamonti Haque</span>. <br />
              I am a web designer <br />and front-end developer.
            </h2>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Banner -->
    <section class="banner d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 align-self-center">
            <h2 class="title-text text-center" id="banner_text">
              Hi, I'm
              <span style="color: rgb(255, 29, 88)"> Shamonti Haque</span>.
              <br />
              I am a web designer <br />and front-end developer.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-12 pb-3 pb-lg-0">
            <h2 class="text-center wow animate__animated animate__backInLeft" data-wow-duration="1s">
              About
            </h2>
          </div>
        </div>
        <div class="row align-items-center mt-md-4">
          <div class="col-md-8 col-sm-12 wow animate__animated animate__backInLeft" data-wow-duration="1s">
            <div class="col-lg-5 col-md-9 mx-auto mx-4 mb-4">
              <img src="~assets/media/s/person_1_sq.png" alt="shamonti_haque" class="img-fluid clip-image small-margin" />
            </div>
            <div class="text-center">
              <p>
                I build new projects just to tickle my brain.
                <br class="d-none d-lg-block" />
                I have serious passion for responsive designs and creating
                intuitive, dynamic user experiences.
              </p>
              <a href="#contact">Let's make something special.</a>
            </div>
          </div>

          <!--
          <div
            class="col-md-6 col-sm-12 p-4 wow animate__animated animate__backInRight pt-5 pt-md-4 align-items-center"
            data-wow-duration="1s"
          >
            <h3 class="progress-title">HTML5</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-danger"
                  style="width: 95%"
                ></div>
                <div class="progress-value"><span>95</span>%</div>
              </div>
            </div>
            <h3 class="progress-title">CSS3</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 80%"
                ></div>
                <div class="progress-value"><span>80</span>%</div>
              </div>
            </div> 

            <h3 class="progress-title">Sass</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 80%"
                ></div>
                <div class="progress-value"><span>80</span>%</div>
              </div>
            </div>

            <h3 class="progress-title">Bootstrap</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 90%"
                ></div>
                <div class="progress-value"><span>90</span>%</div>
              </div>
            </div>

            <h3 class="progress-title">JavaScript</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 70%"
                ></div>
                <div class="progress-value"><span>70</span>%</div>
              </div>
            </div>

            <h3 class="progress-title">Wordpress</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 75%"
                ></div>
                <div class="progress-value"><span>75</span>%</div>
              </div>
            </div>

            <h3 class="progress-title">ReactJS</h3>
            <div class="progress-outer">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-info"
                  style="width: 50%"
                ></div>
                <div class="progress-value"><span>50</span>%</div>
              </div>
            </div>
          </div>
        -->

          <div class="col-md-4 col-sm-12 p-4 wow animate__animated animate__backInRight pt-5 pt-md-4 align-items-center"
            data-wow-duration="1s">
            <div class="skill-box">
              <div class="skill-logo">
                <img src="~assets/media/s/html-logo.png" alt="HTML" class="img-fluid" />
              </div>
              <h4 class="skill-title">HTML5</h4>
            </div>
            <div class="skill-box">
              <div class="skill-logo">
                <img src="~assets/media/s/bootstrap-logo.png" alt="Bootstrap" class="img-fluid" />
              </div>
              <h4 class="skill-title">Bootstrap</h4>
            </div>
            <div class="skill-box">
              <div class="skill-logo">
                <img src="~assets/media/s/javascript-logo.png" alt="JavaScript" class="img-fluid" />
              </div>
              <h4 class="skill-title">JavaScript</h4>
            </div>
            <div class="skill-box">
              <div class="skill-logo">
                <img src="~assets/media/s/reactjs-logo.png" alt="ReactJS"
                class="img-fluid" />
              </div>
              <h4 class="skill-title">ReactJS</h4>
            </div>
            <div class="skill-box">
              <div class="skill-logo">
                <img src="~assets/media/s/wordpress-logo.png" alt="Wordpress" class="img-fluid" />
              </div>
              <h4 class="skill-title">Wordpress</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio" class="section-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow animate__animated animate__backInRight" data-wow-duration="1s">
            <h2 class="text-center">Portfolio</h2>
          </div>

          <div class="col-md-12 text-center pt-md-4 wow animate__animated animate__backInUp" data-wow-duration="1s">
            <div class="button-group filters-button-group">
              <button type="button" class="btn btn-default is-checked filter-button" data-filter="*">
                Show All
              </button>
              <button type="button" class="btn btn-default filter-button" data-filter=".HTML">
                Design to HTML5
              </button>
              <button type="button" class="btn btn-default filter-button" data-filter=".js">
                JavaScript
              </button>
              <button type="button" class="btn btn-default filter-button" data-filter=".reactjs">
                ReactJS
              </button>
              <button type="button" class="btn btn-default filter-button" data-filter=".wordpress">
                WordPress
              </button>
              <button type="button" class="btn btn-default filter-button" data-filter=".email">
                Email Templates
              </button>
              <!-- <button type="button" class="btn btn-default filter-button" data-filter=".wordpress">Wordpress</button> -->
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="row">
            <div class="col-md-4 element-item px-4 reactjs" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/usepopcorn.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>usePopcorn</h3>
                    <p style="color: #e31b6d">ReactJS Project</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/usepopcorn_large.png"
                        data-lightbox="card">View</a>
                      <a href="https://usepopcorn-react-project.netlify.app/" target="_blank" class="btn btn-default"
                      >Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item px-4 reactjs" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/react_image_gallery.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Image Gallery</h3>
                    <p style="color: #e31b6d">ReactJS Project</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/react_image_gallery.png"
                        data-lightbox="card">View</a>
                      <a href="https://react-image-gallery-lovat-two.vercel.app/" target="_blank"
                        class="btn btn-default">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 element-item px-4 reactjs" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/eat-n-split_large.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Eat-N-Split</h3>
                    <p style="color: #e31b6d">ReactJS Project</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/eat-n-split_large.png"
                        data-lightbox="card">View</a>
                      <a href="https://react-eat-n-split.netlify.app/" target="_blank" class="btn btn-default"
                      >Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item px-4 reactjs" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/calculator.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Calculator</h3>
                    <p style="color: #e31b6d">ReactJS Calculator</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/calculator_large.png"
                        data-lightbox="card">View</a>
                      <a href="https://shamonti.github.io/calculator-react/" target="_blank" class="btn btn-default"
                      >Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/natours.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Landing Page</h3>
                    <p style="color: #e31b6d">PNG to HTML using SASS</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/natours_large.png"
                        data-lightbox="card">View
                      </a>
                      <a href="https://shamonti.github.io/natours/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item wordpress px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/ascendcapital.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Landing Page</h3>
                    <p style="color: #e31b6d">Figma to WordPress</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/ascendcapital_large.png"
                        data-lightbox="card">View
                      </a>
                      <a href="https://ascendcapitalcredit.com/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item wordpress px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/globalworkpermitsolutions.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Website</h3>
                    <p style="color: #e31b6d">WordPress</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/globalworkpermitsolutions_large.png"
                        data-lightbox="card">View
                      </a>
                      <a href="https://globalworkpermitsolutions.cloud/" class="btn btn-default"
                        target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item websites px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/picsy.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>E-commerce</h3>
                    <p style="color: #e31b6d">Website</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/picsy_large.png"
                        data-lightbox="card">View
                      </a>
                      <a href="https://shamonti.github.io/picsy/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item px-4 js" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/guess-my-number-game.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>JavaScript Game</h3>
                    <p style="color: #e31b6d">Game</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/guess-my-number-game_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/guess-my-number-game/index.html" class="btn btn-default"
                        target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_6.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Landing Page</h3>
                    <p style="color: #e31b6d">ILLUSTRATOR to HTML</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_6_large.png"
                        data-lightbox="card">View
                      </a>
                      <a href="projects/adBrand/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/lapa_project.jpg" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Landing Page</h3>
                    <p style="color: #e31b6d">Bootstrap</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/lapa_project.jpg"
                        data-lightbox="card">View</a>
                      <a href="https://lapa-project.netlify.app/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item px-4 js" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/pig-game.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>JavaScript Game</h3>
                    <p style="color: #e31b6d">Browser Game</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/pig-game_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/pig-game/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/trillo.jpg" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Travel</h3>
                    <p style="color: #e31b6d">Using Flexbox</p>
                    <div>
                      <a class="btn btn-default example-image-link" href="~assets/media/s/trillo_large.jpg"
                        data-lightbox="card">View</a>
                      <a href="https://shamonti.github.io/trillo/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/nexter.jpg" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Homes</h3>
                    <p style="color: #e31b6d">Using Grid</p>
                    <div>
                      <a class="btn btn-default example-image-link" href="~assets/media/s/nexter_large.jpg"
                        data-lightbox="card">View</a>
                      <a href="https://shamonti.github.io/nexter/" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_2.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>E-commerce</h3>
                    <p style="color: #e31b6d">PNG to HTML</p>
                    <div>
                      <a class="btn btn-default example-image-link" href="~assets/media/s/img_2_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/e-commerce/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item websites px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_3.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Portfolio</h3>
                    <p style="color: #e31b6d">Website</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_3_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/portfolio/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item website px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_4.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Technology</h3>
                    <p style="color: #e31b6d">Website</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_4 _large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/software/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/dashboard.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Dashboard</h3>
                    <p style="color: #e31b6d">Figma to HTML</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/dashboard.png"
                        data-lightbox="card">View</a>
                      <a href="projects/final dashboard/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_5.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Flow Diagram</h3>
                    <p style="color: #e31b6d">PSD to HTML Canvas</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_5_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/BioEconomy/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_1.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Restaurant</h3>
                    <p style="color: #e31b6d">PSD to HTML</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_1.webp"
                        data-lightbox="card">View</a>
                      <a href="projects/restaurant/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item HTML px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/javajam.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Dashboard</h3>
                    <p style="color: #e31b6d">PNG to HTML</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/javajam_large.png"
                        data-lightbox="card">View</a>
                      <a href="projects/javajam/index.html" class="btn btn-default" target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 element-item email px-4" data-category="transition">
              <div class="card">
                <div class="card-body">
                  <img src="~assets/media/s/img_7.png" alt="" class="img-fluid card-img" />
                  <div class="card-hover">
                    <h3>Email Template</h3>
                    <p style="color: #e31b6d">PNG to HTML</p>
                    <div>
                      <a class="example-image-link btn btn-default" href="~assets/media/s/img_7.png"
                        data-lightbox="card">View</a>
                      <a href="projects/EmailTemplate[udemy]/email.html" class="btn btn-default"
                        target="_blank">Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="col-md-4 element-item HTML p-2" data-category="transition">
                  <div class="card">
                    <div class="card-body">
                      <img src="~assets/media/s/img_8.png" alt="" class="img-fluid card-img">
                      <div class="card-hover">
                        <h3>Dashboard</h3>
                        <p style="color:#e31b6d">Illustrator to HTML</p>
                        <div>
                          <a class="example-image-link btn btn-default"  href="~assets/media/s/img_8.png" data-lightbox="card">View</a>
                          <a href="projects/javajam2.1/menu.html" class="btn btn-default">Demo</a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-md-4 element-item HTML p-2" data-category="transition">
                  <div class="card">
                    <div class="card-body">
                      <img src="~assets/media/s/img_8.png" alt="" class="img-fluid card-img">
                      <div class="card-hover">
                        <h3>Dashboard</h3>
                        <p style="color:#e31b6d">Illustrator to HTML</p>
                        <div>
                          <a class="example-image-link btn btn-default"  href="~assets/media/s/img_8.png" data-lightbox="card">View</a>
                          <a href="projects/FindoctorLtd/index.html" class="btn btn-default">Demo</a>
                        </div>
                      </div>
                    </div>
                  </div>
              </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="#F5F5F5" stroke="#F5F5F5"></path>
      </svg>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center" data-aos="fade-left" data-aos-duration="1000">
            <h2 class="text-white wow animate__animated animate__backInLeft" data-wow-duration="1s">
              Contact
            </h2>
            <p class="p-2 wow animate__animated animate__backInRight" data-wow-duration="1s">
              Have a question or want to work together?
            </p>
          </div>
          <div class="col-lg-6 col-md-8 col-sm-10 mx-auto pt-3 wow animate__animated animate__pulse"
            data-wow-duration="1s">
            <form name="contact" netlify>
              <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Name" required />
              </div>
              <div class="form-group">
                <input type="text" name="subject" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group">
                <input type="email" name="email" class="form-control" placeholder="Enter Email" />
              </div>

              <!-- <div class="form-group" style="height: 38px">
                <div class="upload-btn-wrapper">
                  <button class="btn" id="file">Upload a file</button>
                  <input type="file" name="myfile" id="myfile" />
                </div>
              </div> -->

              <div class="form-group">
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="5"
                  placeholder="Your Message"></textarea>
              </div>
              <div class="form-group">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <button type="submit" class="btn btn-default float-right mt-2">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-5">
      <div class="container">
        <div class="row">
          <div class="my-page-link">
            <a href="#page-top"><span class="fas fa-angle-double-up"></span></a>
          </div>

          <div class="col-md-12 social text-center">
            <a href="https://twitter.com/Shamonti_haque"><span class="fab fa-twitter fa-2x"></span></a>
            <a href="https://www.facebook.com/shamonti.haque"><span class="fab fa-facebook-f fa-2x"></span></a>
            <a href="https://github.com/Shamonti"><span class="fab fa-github-square fa-2x"></span></a>
            <a href="https://www.linkedin.com/in/shamonti-haque-88a350159/"><span
                class="fab fa-linkedin-in fa-2x"></span></a>
          </div>
        </div>
        <div class="col-md-12 info">
          <p class="text-center">
            <span style="color: #4b5561"> SHAMONTI HAQUE</span>
            <span style="color: #931f54">&copy;<span id="year"></span> </span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    return { username: params.username };
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' },
        { rel: 'stylesheet', href: require('@/assets/css/s/lightbox.min.css') },
        { rel: 'stylesheet', href: require('@/assets/css/s/style.css') },
        { rel: 'stylesheet', href: require('@/assets/css/s/responsive.css') },
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
        // { src: require('@/assets/js/s/lightbox-plus-jquery.min.js') },
        { src: 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js' },
        { src: 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
        // { src: require('@/assets/js/s/wow.min.js')},
        // { src: require('@/assets/js/s/main.js')},
        { src: 'https://unpkg.com/typeit@8.0.7/dist/index.umd.js' },

      ]
    }
  }
};
</script>

<style scoped>
@import '@/assets/css/standard.css';
</style>