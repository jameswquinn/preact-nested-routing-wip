import { h, Component } from "preact";
import { Link } from 'preact-router/match';
import Helmet from "preact-helmet";

import * as timeago from "timeago.js";
import lozad from "lozad";
import PlayerAPI from "../../api";

export default class Terms extends Component {
  render({ url }) {
    return (
      <main>
        <Helmet title="My Title Hay James Yet Another Page" />
        
        <h1>Hello from Terms{PlayerAPI.get(parseInt(url.match(/\d+/g).map(Number))).body}</h1>
        <pre>{ url }</pre>
        <h1>{url.match(/\d+/g).map(Number)}</h1>
        <Link href="/about">Back</Link>
      </main>
    );
  }
}
