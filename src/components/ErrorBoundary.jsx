import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console for debugging in localhost
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI with clear accessibility roles
      return (
        <div 
          className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-lg border border-red-100 max-w-lg mx-auto my-20 text-center"
          role="alert"
          aria-live="assertive"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-500 mb-6">
            We encountered an unexpected error while loading the search results. This could be a temporary network issue.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#0070FF] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reload Results
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;