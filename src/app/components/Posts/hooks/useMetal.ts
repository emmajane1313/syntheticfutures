import { ColorContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "@lens-protocol/client/actions";
import { FEED } from "@/app/lib/constants";
import { PageSize, Post } from "@lens-protocol/client";

const useMetal = () => {
  const context = useContext(ColorContext);
  const [metalLoading, setMetalLoading] = useState<boolean>(false);
  const [timeline, setTimeline] = useState<Post[]>([]);

  const llamarPublicacions = async () => {
    setMetalLoading(true);
    try {
      const res = await fetchPosts(context?.lensClient!, {
        pageSize: PageSize.Fifty,
        filter: {
          feeds: [
            {
              feed: FEED,
            },
          ],
        },
      });

      if (res?.isOk()) {
        setTimeline(res?.value?.items as Post[]);
      }
    } catch (err: any) {
      console.error(err?.message);
    }
    setMetalLoading(false);
  };

  useEffect(() => {
    if (context?.lensClient) {
      llamarPublicacions();
    }
  }, [context?.lensClient]);

  return {
    metalLoading,
    timeline
  };
};

export default useMetal;
