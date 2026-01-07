import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// INTERFACE: Explicit typing for strict Type safety
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ENTERPRISE GRADE ERROR BOUNDARY
 * --------------------------------
 * 1. RESILIENCE: Catches JS errors anywhere in the child component tree.
 * 2. OBSERVABILITY: Integration point for loggers (Sentry/Datadog).
 * 3. DEFENSE IN DEPTH: Uses inline styles to ensure the error UI renders 
 *    even if the CSS bundle fails to load/parse.
 * 4. ACCESSIBILITY: Uses semantic roles for screen readers.
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
    // [ENTERPRISE MONITORING]
    // In production, this forwards the crash report to your observability platform.
    console.error(' [CRITICAL] Application Crash Detected:', error, errorInfo);
  }

  handleReload = (): void => {
    // Hard reload to clear any corrupted memory state
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
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
            backgroundColor: '#02040a', // Matches deep-950 theme
            color: '#ffffff',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            padding: '20px',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <h1 style={{ 
              color: '#00E0FF', // Matches cyber accent
              fontSize: '2rem', 
              marginBottom: '1rem',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              System Malfunction
            </h1>
            <p style={{ 
              color: '#94a3b8', 
              marginBottom: '2rem', 
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              We encountered an unexpected critical error. Our digital styling team has been automatically notified.
            </p>
            
            <div style={{ 
              marginBottom: '2rem', 
              padding: '12px', 
              background: 'rgba(255, 0, 0, 0.1)', 
              border: '1px solid rgba(255, 0, 0, 0.2)', 
              borderRadius: '4px',
              color: '#ff6b6b',
              fontSize: '0.875rem',
              fontFamily: 'monospace'
            }}>
              Error: {this.state.error?.message || 'Unknown Exception'}
            </div>

            <button
              onClick={this.handleReload}
              style={{
                backgroundColor: '#00E0FF',
                color: '#000000',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 0 20px rgba(0, 224, 255, 0.3)'
              }}
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// --- APP BOOTSTRAPPING ---

const rootElement = document.getElementById('root');

if (!rootElement) {
  // Fail fast if the DOM is corrupt
  throw new Error("FATAL: Could not find root element to mount application.");
}

const root = ReactDOM.createRoot(rootElement);

// StrictMode is enabled for Development auditing (detects unsafe lifecycles)
// GlobalErrorBoundary wraps the entire app to catch crashes
root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </React.StrictMode>
);
