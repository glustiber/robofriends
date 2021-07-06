import React, { Component } from 'react';

/*
Ideally wrappy a component with ErrorBoundary.
If Component fails we can catch it in ErrorBoundary
*/
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError:true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good.</h1>
        }
        return this.props.children; // children anything between ErrorBoundary so else render children (i.e. CardList)
    }
}

export default ErrorBoundary;