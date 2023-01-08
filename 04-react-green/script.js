const App = ({ initialButtonText }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
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
root.render(<App initialButtonText="Click Me" />);
