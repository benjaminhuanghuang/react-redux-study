import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    // React component the state holds data which can be rendered to the user.
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "TypeScript tutorial for beginners", id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}