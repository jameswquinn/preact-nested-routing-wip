import { h, Component } from "preact";
import { Link } from 'preact-router/match';
import Helmet from "preact-helmet";

import * as timeago from "timeago.js";
import lozad from "lozad";
import PlayerAPI from "../../api";

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
  }

  componentDidUpdate() { }

  componentWillUnmount() {

  }

  render({ url, q }) {
    let item = PlayerAPI.get(parseInt(q))
    return (
      <main>
        <Helmet title="My Title Hay James Yet Another Page" />

        <h1>The q is: {q}</h1>
        
        <h1>{item.heading}</h1>
        <h1>{item.body}</h1>
        <h3>{PlayerAPI.get(parseInt(4)).image}</h3>
        <img
          data-sizes="auto"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
          srcset={item.image.srcSet}
          alt=""
        />


        <img src="{require.(PlayerAPI.get(parseInt(4)).image).src}" alt=""/>


        <Link href="/about">Back</Link>
      </main>
    );
  }
}
