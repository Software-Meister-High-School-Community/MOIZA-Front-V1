import React from 'react';
import NotFoundPage from '../pages/404';

interface Props {
  children?: React.ReactNode;
}

interface State {
  isNotFound: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    isNotFound: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    console.log('asd');
    return { isNotFound: false };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('UnCaught error : ', error, errorInfo);
    // this.state.isNotFound = error.message.includes('not found');
    this.state.isNotFound = true;
  }

  public render() {
    if (this.state.isNotFound) return <NotFoundPage />;
    return this.props.children;
  }
}

export default ErrorBoundary;
