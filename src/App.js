import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      errorMessage: ""
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.myjson.com/bins/9d960");
      if (!response.ok) {
        this.setState({ responseError: response.statusText });
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log(json);
      this.setState({ data: json });
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  }

  render() {
    return <div>Hello world</div>;
  }
}
