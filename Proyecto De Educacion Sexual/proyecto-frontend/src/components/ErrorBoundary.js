import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la interfaz de respaldo
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes enviar el error a un servicio de informes de errores
    console.error("Error capturado en ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de respaldo
      return <h1>Algo salió mal.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
