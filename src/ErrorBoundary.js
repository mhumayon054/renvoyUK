import React, { Component } from "react";
// import { datadogRum } from '@datadog/browser-rum';

class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    // Report the error to Datadog or any other error monitoring service
    // datadogRum.addError(error, { info: errorInfo });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
