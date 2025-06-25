const NotFoundPage = () => {
  return (
    <div className="nf-container">
      <div className="nf-content">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        <p className="nf-text">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="nf-button">Go Back Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
