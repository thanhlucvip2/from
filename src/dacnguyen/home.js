import React from "react";
import "./css/home.css";
import "./fontawesome-free-5.15.3-web/css/all.min.css";
import Logo from "./img/Logo/logopnj.png";
import LogoFoodter from "./img/Logo/logo.png";
import imgFoodter from "./img/product/Hinh-phuc-bon-tu-do-100x70.jpeg";
import Gmail from "./img/icon/kisspng-triangle-text-brand-communication-gmail-5ab0d209c6e9c9.6068200915215375458148.png";
import Youtube from "./img/icon/PikPng.com_black-youtube-png_4579085.png";
Home.propTypes = {};

function Home(props) {
  return (
    <div>
      {/* ------------header---------- */}
      <div className="container-fluid background-img">
        <header className="container">
          <div className="row abcd">
            {/* ----------Logo--------- */}
            <div className="col-md-2">
              <img src={Logo} className="logo-header" alt="logo-dn" />
            </div>
            {/* ----------Menu-------- */}
            <div className="col-md-10">
              <ul className="header-menu">
                <li className="header-menu-1">Trang chủ</li>
                <li className="header-menu-2">|</li>
                <li className="header-menu-1">Tin Tức</li>
                <li className="header-menu-2">|</li>
                <li className="header-menu-1">Giới Thiệu</li>
                <li className="header-menu-2">|</li>
                <li className="header-menu-1">Trang chủ</li>
                <li className="header-menu-2">|</li>
                <li className="header-menu-1">Trang chủ</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      {/* -------------foodter------------ */}
      <div>
        <div className="background-foodter">
          <div className="container">
            <div className="row bottom-border">
              <div className="col-md-3">
                <img
                  src={LogoFoodter}
                  className="logo-foodter"
                  alt="img-logo-foodter"
                />
                <span className="dn-foodter">Đắc Nguyên</span>
                <div className="text-foodter">
                  <ul className="ul-text-foodter">
                    <li>
                      <a
                        href="https://goo.gl/maps/6vpRpRxu2xrZCnFa9"
                        target="_Blank"
                        rel="noreferrer"
                        className="li-text-foodter"
                      >
                        <i className="fas fa-map-marker-alt"></i>
                        _14-04 Đường số 9A, Xã Bình Hưng, Huyện Bình Chánh, Hồ
                        Chí Minh
                      </a>
                    </li>
                    <br />
                    <li>
                      <a
                        href="tel:0838160480"
                        target="_Blank"
                        rel="noreferrer"
                        className="li-text-foodter"
                      >
                        <i className="fas fa-phone-volume"></i>
                        _0838 16 0480 – 0728 80 8081 – 0348 57 5883
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="font-foodter"> Bài Viết Nổi Bật </div>
                <div>
                  <ul className="foodter-post">
                    <li>
                      <img
                        src={imgFoodter}
                        className="Featured-Posts"
                        alt="img-post"
                      />
                    </li>
                    <li className="text-Featured-Posts">
                      Phúc Bồn Tử Đỏ-Phúc Bồn Tử Đen
                    </li>
                  </ul>
                  <ul className="foodter-post">
                    <li>
                      <img
                        src={imgFoodter}
                        className="Featured-Posts"
                        alt="img-post"
                      />
                    </li>
                    <li className="text-Featured-Posts">
                      Phúc Bồn Tử Đỏ-Phúc Bồn Tử Đen
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="font-foodter"> Chuyên Mục </div>
                <div className="text-Featured-Posts">Sản Phẩm</div>
                <div className="text-Featured-Posts">Món Ngon</div>
                <div className="text-Featured-Posts">Dinh Dưỡng</div>
                <div className="text-Featured-Posts">Cách Chế Biến</div>
              </div>
              <div className="col-md-3">
                <div className="font-foodter"> Fanpage Facebook </div>
                <div
                  className="fb-page"
                  data-href="https://www.facebook.com/Vang-Ph&#xfa;c-B&#x1ed3;n-T&#x1eed;-&#x110;&#x1eaf;c-Nguy&#xea;n-105003945147334/"
                  data-tabs="timeline"
                  data-width="300"
                  data-height="150"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/Vang-Ph&#xfa;c-B&#x1ed3;n-T&#x1eed;-&#x110;&#x1eaf;c-Nguy&#xea;n-105003945147334/"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/Vang-Ph&#xfa;c-B&#x1ed3;n-T&#x1eed;-&#x110;&#x1eaf;c-Nguy&#xea;n-105003945147334/">
                      Vang Phúc Bồn Tử - Đắc Nguyên
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bottom-border">
              <ul className="icon-foodter">
                <li>
                  <div className="font-foodter">Liên Hệ</div>
                </li>
                <li>
                  <div>
                    <a
                      href="mailto:ctydacnguyen@gmail.com"
                      target="_Blank"
                      rel="noreferrer"
                      className="font-icon-text-foodter"
                    >
                      <img
                        alt="facebook"
                        src={Gmail}
                        className="style-icon-foodter"
                      />
                      congtydacnguyen@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UCLkmGY2p19nW8NPdQ13kYUA"
                      target="_Blank"
                      rel="noreferrer"
                      className="font-icon-text-foodter"
                    >
                      <img
                        alt="facebook"
                        src={Youtube}
                        className="style-icon-foodter"
                      />
                      Đắc Nguyên
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-foodter-bottom">
              Công Ty Trách Nhiệm Hữu Hạng Thương Mại Dịch Vụ Và Sản Xuất Đắc
              Nguyên ____ Thương Hiệu Phúc Bồn Tử Hàng Đầu Việt Nam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
