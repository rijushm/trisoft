import logo from './img/logo.jpg';
import img1 from './img/img-1.jpg';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <a href="">
            <img src={logo}/>
          </a>
        </div>

        <div className="nav_content">
          <div className="nav_upper">
            <form id="" action="" method="">
              <i className="fas fa-search"></i>
              <input type="name" name="" placeholder="Search"/>
            </form>
            <a href="">Post a Look</a>
            <a href="">Login/Register</a>
          </div>
          <div className="nav_lower">
            <ul>
              <li><a href="" className="active">Flaunt</a></li>
              <li><a href="">Read</a></li>
              <li><a href="">Watch</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Style:wedding</a></li>
              <li><a href="">Charity Auction</a></li>
            </ul>
          </div>
        </div>
          <div className="nav_toggle">
            <i className="fas fa-bars toggle_start"></i>
            <i className="fas fa-times toggle_end"></i>
          </div>
      </header>

      <section className="">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide s1">Slide 1</div>
              <div className="swiper-slide s2">Slide 2</div>
              <div className="swiper-slide s3">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
      </section>

      <section className="main container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <div className="left-container">
              <h2 className="text_right">styleXstyle TV episode 46: Fragnance of Love</h2>
              <div className="hr"></div>
              <img src={img2} className="img1"/>
              <p className="mt-3"><em>Go Lunar New Year Shopping with Sharon Au!</em></p>
              <h2 className="text_right upper">Trending Looks</h2>
              <div className="hr"></div>
              <div className="row">
                <div className="col-sm-6">
                  <img src={img2} className="img1 rounded"/>
                  <img src={img2} className="img1 mt-3 rounded"/>
                </div>
                <div className="col-sm-6">
                  <img src={img2} className="img1 rounded"/>
                  <img src={img2} className="img1 mt-3 rounded"/>
                </div>
              </div>
              <div className="tag_div">
                <a href="" className="tag upper text_right">More looks</a>
              </div>
              <h2 className="text_right upper" >latest stories</h2>
              <div className="hr"></div>
              <p className="upper fade1">23 JANUARY 2017 | STYLEWEDDING</p>
              <h2 className="half">Auspicious Dates To Start Work In The New Lunar Year</h2>
              <p className="half">
                Auspicious Dates To Start Work In The New Lunar Year Auspicious Dates To Start Work In The New Lunar Year Auspicious Dates To Start Work In The New Lunar Year
                <span><em className="fade1">By Style Weddings</em></span>
              </p>
              <div className="tag_div">
                <a href="" className="tag2 upper text_right">More looks</a>
                <img src={img2} className="img1 border_img"/>
              </div>
              <p className="upper fade1 mt-5">23 JANUARY 2017 | STYLEWEDDING</p>
              <h2 className="half">Auspicious Dates To Start Work In The New Lunar Year</h2>
              <p className="half">
                Auspicious Dates To Start Work
                <span><em className="fade1">By Style Weddings</em></span>
              </p>
              <div className="tag_div">
                <a href="" className="tag2 upper text_right">More looks</a>
                <img src={img2} className="img1 border_img"/>
              </div>
              <p className="upper fade1 mt-5">23 JANUARY 2017 | STYLEWEDDING</p>
              <h2 className="half">8 Hipster Wedding Venues in Singapore</h2>
              <p className="half">
                You won't find any hotel function rooms here.
                <span><em className="fade1">By Chelsea Tan</em></span>
              </p>
              <div className="tag_div">
                <a href="" className="tag2 upper text_right">More looks</a>
                <img src={img2} className="img1 border_img"/>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="right_container">
              <img src={img2} className="imgR img-fluid rounded"/>
              <img src={img1} className="imgR img-fluid rounded mt-1"/>
              <img src={img1} className="imgR-1 img-fluid rounded"/>
              <div className="card text-center cardR-1">
                <p className="mt-3">Get them now</p>
                <h1 className="upper">shop</h1>
                <hr/>
                <div className="row shop_img">
                  <div className="col-sm-6">
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                  </div>
                  <div className="col-sm-6">
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                    <img src={img2} className="imgR mt-2 img-fluid"/>
                  </div>
                </div>
              </div>
              <div className="card text-center cardR-1">
                <h1 className="upper">shop</h1>
                <img src={img3} className="imgR img-fluid"/>
                <div className="styleR">
                  <p>
                    Style: Wedding's Present 'A Garden City'..
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <img src={img3} className="imgR img-fluid"/>
                <div className="styleR">
                  <p>
                    Style: Wedding's Present 'A Garden City'..
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <img src={img3} className="imgR img-fluid"/>
                <div className="styleR">
                  <p>
                    Style: Wedding's Present 'A Garden City'..
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <img src={img3} className="imgR img-fluid"/>
                <div className="styleR">
                  <p>
                    Style: Wedding's Present 'A Garden City'..
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
                <img src={img3} className="imgR img-fluid"/>
                <div className="styleR">
                  <p>
                    Style: Wedding's Present 'A Garden City'..
                  </p>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
              <div className="card text-center cardR-1 last">
                <p className="mt-3"><em>Stay</em></p>
                <h2 className="upper">connected</h2>
                <hr/>
                <div className="styleR next">
                  <a href=""><i className="fab fa-youtube"></i></a>
                  <a href=""><i className="fas fa-camera"></i></a>
                  <a href=""><i className="fab fa-twitter"></i></a>
                  <a href=""><i className="fab fa-facebook"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="gallery_section container">
        <h2>Instagram</h2>
        <div className="row1">
          <div className="gallery g1">
            <img src={img1} className="img-fluid"/>
            <img src={img1} className="img-fluid"/>
          </div>
          <div className="gallery g2">
            <img src={img1} className="img-fluid"/>
            <img src={img1} className="img-fluid"/>
          </div>
          <div className="gallery g3">
            <img src={img1} className="img-fluid"/>
            <img src={img1} className="img-fluid"/>
          </div>
          <div className="gallery g4">
            <img src={img1} className="img-fluid"/>
            <img src={img1} className="img-fluid"/>
          </div>
          <div className="gallery g5">
            <img src={img1} className="img-fluid"/>
            <img src={img1} className="img-fluid"/>
          </div>
        </div>

        <div className="hr last"></div>
      </section>


      <footer className=" text-center mt-3 text-lg-start">
       
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase">Flaunt</h3>
            </div>

            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0">Read</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-uppercase">fashion</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">beauty</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">lifestyle</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">ask sxs</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">blogs</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Watch</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="">sXs TV</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">interviews</a>
                    </li>
                    <li>
                      <a href="#!" className="text-uppercase">c channel</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0">Shop</h5>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0">Style: Weddings</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-uppercase">sw events</a>
                    </li>
                  </ul>
                  <h5 className="text-uppercase mb-0">Charity Auction</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center p-3" >
          © 2020 Copyright:
          <a className="" href="">example.com</a>
        </div>
      </footer>
    </div>
  );
}

     var toggle_start = document.querySelector(".toggle_start");
      var toggle_end = document.querySelector(".toggle_end");
      var nav_content = document.querySelector(".nav_content");
      toggle_end.style.display = "none";
      toggle_start.onclick = () =>{
        nav_content.style.left = "0%";
        toggle_end.style.display = "block";
        toggle_start.style.display = "none";
      }
      toggle_end.onclick = () =>{
        nav_content.style.left = "100%";
        toggle_end.style.display = "none";
        toggle_start.style.display = "block";
      };

export default App;
