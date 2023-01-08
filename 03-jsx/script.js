const reactHeading = <h1>Hello from React</h1>;

// const reactHeading = /*#__PURE__*/ React.createElement(
//   "h1",
//   null,
//   "Hello from React"
// );

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(reactHeading);
