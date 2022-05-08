import useTranslation from 'next-translate/useTranslation';

export default function NotFound() {
  const { t } = useTranslation();
  return <div>Not Found</div>;
}
