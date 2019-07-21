/** @jsx h */
import { h, Component } from "preact";
import { Link } from 'preact-router/match';
import Helmet from "preact-helmet";
import lozad from "lozad";
import PlayerAPI from "../api";

export default class Terms extends Component {
  componentDidMount() {
    const observer = lozad(".lazy", {
      loaded: function (el) {
        // Custom implementation on a loaded element
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.4 // ratio of element convergence
    });
    observer.observe();
    document.querySelector("#branding__logo").classList.remove("branding__logo-alt");
  }

  componentWillUnmount() {
    document.querySelector("#branding__logo").classList.add("branding__logo-alt");
  }

  render({ url, q }) {
    let item = PlayerAPI.get(parseInt(q));
    return (
      <main class="container">
        <Helmet title="My Title Hay James Yet Another Page" />        
        <figure>
          <figcaption>
            <h3>{item.heading}</h3>
            <h4>{item.subHeading}</h4>
            <p>{item.body}</p>
          </figcaption>
          <img
            class="lazy"
            data-sizes="auto"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            srcset={item.image.srcSet}
            alt=""
          />
          </figure>
        <Link href="/about">Back</Link>
      </main>
    );
  }
}
