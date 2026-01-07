import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ==========================================
// 1. TYPE DEFINITIONS
// ==========================================

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ==========================================
// 2. GLOBAL ERROR BOUNDARY (Resilience Layer)
// ==========================================

/**
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */
class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // [ENTERPRISE LOGGING]
    // In production, send this to Sentry/Datadog/NewRelic
    console.error('[CRITICAL SYSTEM FAILURE]', error, errorInfo);
  }

  private handleReload = (): void => {
    // Force a hard reload to clear corrupted memory states
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Inline styles used intentionally to ensure visibility 
      // even if external CSS fails to load.
      return (
        <div 
          role="alert"
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#02040a', // Theme: deep-950
            color: '#ffffff',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '2rem',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
          }}
        >
          <div style={{ maxWidth: '500px' }}>
            <h1 style={{ 
              color: '#00E0FF', // Theme: cyber
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: 'bold' 
            }}>
              System Unavailable
            </h1>
            <p style={{ 
              color: '#94a3b8', 
              marginBottom: '2rem',
              lineHeight: '1.5' 
            }}>
              A critical error has occurred. Our engineering team has been notified.
            </p>
            
            <button
              onClick={this.handleReload}
              style={{
                backgroundColor: '#00E0FF',
                color: '#02040a',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Reboot Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ==========================================
// 3. APPLICATION BOOTSTRAP
// ==========================================

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("FATAL: Root element 'root' not found in document.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </React.StrictMode>
);
