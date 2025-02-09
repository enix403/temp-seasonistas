import { Button } from "~/components/Button/Button";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function JobBanner() {
  const t = useTranslations('information');

  return (
    <section className="bg-teal/80 py-20 text-center text-white">
      <div className="app-container">
        <h1 className="text-3xl font-extrabold">{t('yourDreamJobs')}</h1>
        <p className="font-semibold mt-2">
          {t('overMillionInteractions')}
        </p>

        <div className="flex max-ph:flex-col justify-center mt-5 gap-2">
          <Link href="/job-user">
            <Button fullRounded theme="white">
              {t('searchDocument')}
            </Button>
          </Link>
          <Button fullRounded theme="white" variant="outlined">
            {t('applyJobNow')}
          </Button>
        </div>
      </div>
    </section>
  );
}