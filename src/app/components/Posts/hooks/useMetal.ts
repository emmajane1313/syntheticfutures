import { ColorContext } from "@/app/providers";
import { useContext, useEffect, useState } from "react";
import { fetchPosts } from "@lens-protocol/client/actions";
import { FEED, TOPICS, TYPES } from "@/app/lib/constants";
import { PageSize, Post, PostType } from "@lens-protocol/client";

const useMetal = () => {
  const context = useContext(ColorContext);
  const [timeline, setTimeline] = useState<Post[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [timelineOpen, setTimelineOpen] = useState<boolean[]>([]);

  const llamarPublicacions = async () => {
    try {
      let cursor = undefined;
      let items: Post[] = [];

      while (cursor != 0) {
        const res = await fetchPosts(context?.lensClient!, {
          pageSize: PageSize.Fifty,
          filter: {
            postTypes: [PostType.Root],
            feeds: [
              {
                feed: FEED,
              },
            ],
          },
        });

        if (res?.isOk()) {
          if (res?.value?.pageInfo?.next) {
            cursor = res?.value?.pageInfo?.next;
          } else {
            cursor = 0;
          }

          items.push(...(res?.value?.items as Post[]));
        }
      }

      const sorted = items?.sort(
        (a, b) =>
          new Date(a?.timestamp).getTime() - new Date(b?.timestamp).getTime()
      );

      setTimeline(sorted);
      setSelectedTypes(TYPES.sort(() => Math.random() - 0.5).slice(0, 3));
      setSelectedTopics(TOPICS.sort(() => Math.random() - 0.5).slice(0, 2));
      setTimelineOpen(Array.from({ length: sorted.length }, () => false));
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const toggleSelection = (value: string, setFunc: any, selected: string[]) => {
    if (selected.includes(value)) {
      setFunc(selected.filter((v) => v !== value));
    } else {
      setFunc([...selected, value]);
    }
  };

  useEffect(() => {
    if (context?.lensClient) {
      llamarPublicacions();
    }
  }, [context?.lensClient]);

  return {
    timeline,
    toggleSelection,
    selectedTypes,
    setSelectedTypes,
    selectedTopics,
    setSelectedTopics,
    setTimelineOpen,
    timelineOpen,
  };
};

export default useMetal;
