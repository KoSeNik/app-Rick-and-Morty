import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return <h4>что-то пошло не так</h4>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
