import { h, Component } from "preact";
import { Link } from 'preact-router/match';
import Helmet from "preact-helmet";

import * as timeago from "timeago.js";
import lozad from "lozad";
import PlayerAPI from "../../api";

export default class About extends Component {
  componentDidMount() {
    const observer = lozad(".lazy", {
      loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.4 // ratio of element convergence
    });
    observer.observe();
  }

  componentDidUpdate() {}

  componentWillUnmount() {

  }

  render() {
    return (
      <main>
          <h1>meet your trainer</h1>
        
        <Helmet title="My Title Hay James Yet Another Page" />
        {PlayerAPI.all().map(item => (
          <figure key={item.id}>
            <figcaption>
              <h3>{item.heading}</h3>
              <h4>{item.subHeading}</h4>
              <p>{item.body}</p>
            </figcaption>
            <img
              className="lazy"
              data-sizes="auto"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              data-srcset={item.image.srcSet}
              alt=""
            />
            <Link href={`/terms?q=${item.id}`}>{item.heading}</Link>
          </figure>
        ))}
      </main>
    );
  }
}
