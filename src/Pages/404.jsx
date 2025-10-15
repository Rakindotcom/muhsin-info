import { useTranslation } from "../hooks/useTranslation";

const NotFoundPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="nf-container">
      <div className="nf-content">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">{t('pageNotFound')}</h2>
        <p className="nf-text">
          {t('pageNotFoundMessage')}
        </p>
        <a href="/" className="nf-button">{t('goBackHome')}</a>
      </div>
    </div>
  );
};

export default NotFoundPage;