const { h, Component, render } = preact; /** @jsx h */
const { Router } = preactRouter;

history.replaceState(null, null, '/');

class App extends Component {
	render() {
		return (
			<Router>
				<Demo path="/" />
			</Router>
		);
	}
}

class Demo extends Component {
	render({ url, q }) {
		return (
			<div>
				<a href="/">Home</a>
				|
				<a href={'/?q='+((q|0)+1)}>Page {(q|0)+1}</a>
				<br />
				<pre>{JSON.stringify({ url, q },0,2)}</pre>
			</div>
		);
	}
}

render(<App />, document.body);

