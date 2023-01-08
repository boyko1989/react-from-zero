const reactHeading = React.createElement("h1", null, "Hello from React");
console.log(reactHeading);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(reactHeading);

//
// Just vanilla

const vanillaHeading = document.createElement("h1");
vanillaHeading.textContent = "Hello from Vanilla";
document.getElementById("vanilla-root").appendChild(vanillaHeading);

console.log(vanillaHeading);
