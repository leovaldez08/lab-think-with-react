class ReactContainer extends React.Component {
  // JSX tags
  // JSX there should be one parent element
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>Let's Rock and Roll- This is babel</div>
      </div>
    );
  }
}

const container = document.getElementById("react-container");
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);
