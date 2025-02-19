import { useEffect, useState } from "react";
import { Button } from "~/components/Button/Button";
import { UserOwnedCard } from "~/components/UserOwnedCard";
import { apiRoutes } from "~/app/api-routes";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { reportedCall } from "~/app/utils/promises";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function PostingCard({
  posting,
  isBestMatch,
  isFavourite = false,
  setIsFavourite,
}: {
  posting: any;
  isBestMatch?: boolean;
  isFavourite?: boolean;
  setIsFavourite?: (fav: boolean) => void;
}) {
  const postingId = posting["_id"];
  const t = useTranslations('home');
  const [ msgUrl, setMsgUrl ] = useState("");
  useEffect(() => {
    const locale = localStorage.getItem("locale") || "en";
    setMsgUrl(`/${locale}/chat/${posting?.poster["_id"]}`);
  }, []);

  const {
    isDone: isApplied,
    isExecuting: isApplying,
    isLoading,
    execute: apply,
  } = useResumableAction({
    executeFn: async (isApplied) => {
      if (!isApplied) {
        await reportedCall(
          apiRoutes.applyToJob({
            postingId: postingId,
            answers: [],
          })
        );
      }

      return true;
    },
    hydrateFn: async () => {
      const { applied } = await apiRoutes.isPostingApplied(postingId);
      return applied;
    },
    hydrateDeps: [postingId],
  });

  return (
    <UserOwnedCard
      user={posting?.poster}
      title={posting?.title}
      companyCountry={posting?.companyCountry}
      startTime={posting?.startTime}
      endTime={posting?.endTime}
      subtitle={posting?.description}
      tag={isBestMatch && t('bestMatch')}
      withFavouriteToggle
      isFavourite={isFavourite}
      setIsFavourite={setIsFavourite}
      actions={
        <>
          <Button
            fullRounded
            onClick={apply}
            loading={isApplying}
            disabled={isLoading || isApplied}
          >
            {isApplied === true ? t('alreadyApplied') : t('apply')}
          </Button>
          <Link href={msgUrl}>
            <Button fullRounded variant="outlined">
              {t('message')}
            </Button>
          </Link>
        </>
      }
    />
  );
}
