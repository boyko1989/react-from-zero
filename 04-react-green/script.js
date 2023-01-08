const App = () => {
  const [buttonText, setButtonText] = React.useState("Click Me");
  const [buttonClass, setButtonClass] = React.useState("");

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setButtonClass("green-btn");
  };

  return (
    <div className="app">
      <button className={buttonClass} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
