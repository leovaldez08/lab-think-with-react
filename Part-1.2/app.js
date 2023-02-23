// Functional component
const Container = () => {
  return React.createElement(
    `div`,
    null,
    `Hey Kalvians! Welcome to React Learning`,
    React.createElement(`div`, null, `Let's rock and roll`)
  );
};

// Render the Container
const container = document.getElementById("react-container");
ReactDOM.render(React.createElement(Container), container);
