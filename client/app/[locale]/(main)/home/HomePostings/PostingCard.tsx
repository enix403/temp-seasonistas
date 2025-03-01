import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "~/components/Button/Button";
import { UserOwnedCard } from "~/components/UserOwnedCard";
import { apiRoutes } from "~/app/api-routes";
import { useResumableAction } from "~/app/hooks/useResumableAction";
import { reportedCall } from "~/app/utils/promises";
import Link from "next/link";
import { useTranslations } from "next-intl";

import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Dialog,
  DialogHeader,
  IconButton,
  Input,
  Radio,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { IconX } from "@tabler/icons-react";
import toast from "react-hot-toast";

export function PostingCard({
  posting,
  isBestMatch,
  isFavourite = false,
  setIsFavourite,
  shouldBeVisible,
}: {
  posting: any;
  isBestMatch?: boolean;
  isFavourite?: boolean;
  setIsFavourite?: (fav: boolean) => void;
  shouldBeVisible?: (applied: boolean) => boolean;
}) {
  const postingId = posting["_id"];
  const t = useTranslations("home");
  const [msgUrl, setMsgUrl] = useState("");

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

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isLoading || isApplying) return;

    setIsVisible(shouldBeVisible?.(isApplied) ?? true);
  }, [shouldBeVisible, isApplied, isApplying, isLoading]);

  if (!isVisible) return null;

  return (
    <UserOwnedCard
      user={posting?.poster}
      title={posting?.title}
      companyCountry={posting?.companyCountry}
      startTime={posting?.startTime}
      endTime={posting?.endTime}
      subtitle={posting?.description}
      tag={isBestMatch && t("bestMatch")}
      withFavouriteToggle
      isFavourite={isFavourite}
      setIsFavourite={setIsFavourite}
      actions={
        <>
          <AskApplicationQuestionsModal
            posting={posting}
            questions={posting?.questions || []}
            onComplete={async () => {}}
          >
            <Button
              fullRounded
              // onClick={() => apply()}
              loading={isApplying}
              disabled={isLoading || isApplied}
            >
              {isApplied === true ? t("alreadyApplied") : t("apply")}
            </Button>
          </AskApplicationQuestionsModal>
          <Link href={msgUrl}>
            <Button fullRounded variant="outlined">
              {t("message")}
            </Button>
          </Link>
        </>
      }
    />
  );
}

function AskApplicationQuestionsModal({
  posting,
  questions,
  onComplete,
  children,
}: {
  posting: any;
  questions: string[];
  onComplete: (answers: string[]) => Promise<void>;
} & PropsWithChildren) {
  let [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      // TODO: reset form
    }
  }, [open, questions]);

  const onSubmit = (payload) => {
    onComplete(payload)
      .then(() => {
        setOpen(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[72rem] max-h-[95vh] overflow-scroll">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Apply to job <strong>{posting?.title}</strong>
              </Typography>
              <IconButton
                color="blue-gray"
                size="sm"
                variant="text"
                onClick={() => setOpen(false)}
              >
                <IconX />
              </IconButton>
            </div>

            <Typography variant="h5" color="blue-gray" className="-mb-4">
              Answer the following questions to apply
            </Typography>

            {(posting?.questions || []).map((qs) => (
              <>
                <Typography className="-mb-2 mt-4" variant="h6">
                  {qs}
                </Typography>
                <Textarea
                  required
                  label="Anwser"
                  size="lg"
                />
              </>
            ))}

          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={() => {
                console.log(posting);
              }}
              loading={loading}
              fullWidth
            >
              Apply
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
