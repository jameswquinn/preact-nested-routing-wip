/** @jsx h */
import { h, Component } from "preact";
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";
import lozad from "lozad";

export default class Home extends Component {
  componentDidMount() {
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px",
      threshold: 0.4
    });
    observer.observe();
    window.addEventListener("scroll", this.handleOpacity);
    window.addEventListener('scroll', this.handleParallax);
    document.getElementById("intro").play();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOpacity);
    window.removeEventListener('scroll', this.handleParallax);
    document.getElementById("intro").pause();
  }

  handleParallax = () => {
    const target = document.querySelectorAll('[data-rate]');
    target.forEach(function (element) {
      let pos = window.pageYOffset * element.dataset.rate;
      element.style.transform = 'translate(0, ' + pos + 'px)';
    });
  }

  handleOpacity = () => {
    const target = document.querySelectorAll('[data-opacity]')
    target.forEach(function (element) {
      let pos = parseInt(element.dataset.opacity);
      element.style.opacity = 1 - Math.max(0, window.pageYOffset / pos);
    })
  };

  render() {
    return (
      <main>

        <Helmet title="My Title Hay James" />
        <header class="video-header">
          <video id="intro" src={require("../video/intro2.mp4")} autoplay loop playsinline muted poster="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="></video>
          <div class="viewport-header viewport-header__transform">
            
    
            <div data-opacity="100" class="masthead-arrow"></div>
           
          </div>
        </header>

        <div class="splash__overlay">
          <div class="hero">
            <svg><use xlinkhref="#icon-Personal__Best"></use></svg>
            <div id="lead">Dedicated, passionate, intelligent: welcome to bespoke personal training.</div>
          </div>
        </div>
        <img
          style="z-index:-1"
          class="lazy"
          data-sizes="auto"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
          data-srcset={require("../img/strength-training-exercise-routines.jpg").srcSet}
          alt=""
        />
      </main>
    );
  }
}
