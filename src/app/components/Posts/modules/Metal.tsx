import { FunctionComponent, JSX } from "react";
import useMetal from "../hooks/useMetal";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { ImageMetadata, TextOnlyMetadata } from "@lens-protocol/client";
import moment from "moment";
import Image from "next/image";
import { INFURA_GATEWAY, TOPICS, TYPES } from "@/app/lib/constants";
import descriptionRegex from "@/app/lib/helpers/descriptionRegex";
import { handleImage } from "@/app/lib/helpers/handleImage";

const Metal: FunctionComponent = (): JSX.Element => {
  const {
    timeline,
    toggleSelection,
    selectedTypes,
    setSelectedTypes,
    selectedTopics,
    setSelectedTopics,
    setTimelineOpen,
    timelineOpen,
  } = useMetal();
  const router = useRouter();

  return (
    <div className="min-h-screen px-2 sm:px-10 pb-8 pt-3 bg-gradient-to-br from-pink-50 via-white to-green-50 font-sans text-black">
      <div className="relative w-full h-fit pb-4 flex items-center justify-start">
        <div
          className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <PiArrowFatLinesLeftFill color={"black"} size={24} />
        </div>
      </div>
      <h1 className="text-6xl font-extrabold mb-8">
        Timeline
        <sup className="text-base font-medium pl-2">({timeline?.length})</sup>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full h-fit relative">
        <div className="relative w-fit h-fit flex flex-col font-neueL">
          <div className="relative w-fit h-fit flex text-xs uppercase border-b pb-1 mb-4 whitespace-nowrap">
            / Filter
          </div>
          <div className="relative w-fit h-fit flex flex-row md:flex-col gap-4">
            <div className="mb-4 relative w-fit h-fit flex flex-col gap-1">
              <div className="font-neue mb-2">Type</div>
              {TYPES.map((type) => (
                <div key={type} className="relative flex w-fit h-fit gap-2">
                  <label className="flex items-center space-x-2">
                    <div className="relative w-fit h-fit flex">
                      <div
                        className="relative w-4 h-4 flex cursor-pointer"
                        onClick={() =>
                          toggleSelection(type, setSelectedTypes, selectedTypes)
                        }
                      >
                        <Image
                          alt="clock"
                          src={`${INFURA_GATEWAY}/ipfs/${
                            selectedTypes.includes(type)
                              ? "QmcnxnZR3QV9ZwZYPyxYd2ahirzrET8CMfow3XD5LWrPqh"
                              : "QmZeHNY29pT99SSquBRH6V9XXD8JnUjPpBdGUXBp97kHGv"
                          }`}
                          draggable={false}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <span className="text-sm bg-fuchsia-300 text-black px-2 rounded-sm whitespace-nowrap">
                      {type}
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-4 relative w-fit h-fit flex flex-col gap-1">
              <div className="font-neue mb-2">Topic</div>
              {TOPICS.map((topic) => (
                <div key={topic}>
                  <label className="flex items-center space-x-2">
                    <div className="relative w-fit h-fit flex">
                      <div
                        className="relative w-4 h-4 flex cursor-pointer"
                        onClick={() =>
                          toggleSelection(
                            topic,
                            setSelectedTopics,
                            selectedTopics
                          )
                        }
                      >
                        <Image
                          alt="clock"
                          src={`${INFURA_GATEWAY}/ipfs/${
                            selectedTopics.includes(topic)
                              ? "QmcnxnZR3QV9ZwZYPyxYd2ahirzrET8CMfow3XD5LWrPqh"
                              : "QmZeHNY29pT99SSquBRH6V9XXD8JnUjPpBdGUXBp97kHGv"
                          }`}
                          draggable={false}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <span className="text-sm bg-fuchsia-300 text-black px-2 rounded-sm whitespace-nowrap">
                      {topic}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col">
          <div className="text-xs uppercase border-b pb-1 mb-2 flex justify-between">
            <div className="relative w-fit h-fit flex flex-row sm:gap-0 gap-3">
              <div className="relative w-fit h-fit flex">
                <div className="relative w-fit sm:w-52">/ Date</div>
              </div>
              <div className="relative w-fit h-fit flex">/ Name</div>
            </div>
            <div className="relative w-fit h-fit flex">/ Type</div>
          </div>
          {timeline?.length < 1
            ? Array.from({ length: 10 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="relative w-full h-fit flex border-b py-2 text-sm cursor-pointer hover:opacity-40 flex-col animate-pulse"
                  >
                    <div className="relative w-full h-4 flex"></div>
                  </div>
                );
              })
            : (selectedTopics?.length > 0 || selectedTypes?.length > 0
                ? timeline?.filter((time) =>
                    (time?.metadata as TextOnlyMetadata)?.tags?.some((tag) =>
                      [...selectedTypes, ...selectedTopics].includes(tag)
                    )
                  )
                : timeline
              ).map((post, i) => (
                <div
                  key={i}
                  className={`relative flex border-b py-2 gap-6 text-sm flex-col`}
                >
                  <div
                    className={`flex sm:flex-row flex-col justify-between relative w-full h-fit sm:gap-0 gap-3 ${
                      (post.metadata?.__typename == "ImageMetadata" ||
                        (post.metadata as TextOnlyMetadata).content?.length >
                          50) &&
                      "cursor-pointer hover:opacity-40"
                    }`}
                    onClick={() =>
                      (post.metadata?.__typename == "ImageMetadata" ||
                        (post.metadata as TextOnlyMetadata).content?.length >
                          50) &&
                      setTimelineOpen((prev) =>
                        prev.map((el, ind) => (ind == i ? !el : false))
                      )
                    }
                  >
                    <div className="relative w-fit h-fit flex sm:flex-row flex-col sm:gap-0 gap-3">
                      <div className="relative w-fit flex flex-col h-fit">
                        <div className="relative w-52 h-fit flex flex-row gap-2 items-center justify-center">
                          <div className="relative w-fit h-fit flex">
                            <div className="relative w-4 h-4 flex">
                              <Image
                                alt="clock"
                                src={`${INFURA_GATEWAY}/ipfs/QmViika5CY5CRLCVuyRy8JWXTSqzzSimXKquYQ6PbjVEgY`}
                                draggable={false}
                                layout="fill"
                              />
                            </div>
                          </div>
                          <div className="relative w-full whitespace-nowrap">
                            {moment(post.timestamp).format(
                              "YYYY-MM-DD HH:mm:ss"
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-2/3 break-words pr-2">
                        {(post.metadata as TextOnlyMetadata).content?.length >
                        50
                          ? (post.metadata as TextOnlyMetadata).content?.slice(
                              0,
                              47
                            ) + "..."
                          : (post.metadata as TextOnlyMetadata).content}
                      </div>
                    </div>
                    <div className="bg-gray-200 px-2 py-1 rounded text-xs w-fit h-fit relative">
                      {post.metadata?.__typename?.replace(
                        /([a-z])([A-Z])/g,
                        "$1 $2"
                      )}
                    </div>
                  </div>
                  {timelineOpen[i] && (
                    <div className="relative w-full h-fit flex items-start justify-start">
                      {post?.metadata?.__typename !== "TextOnlyMetadata" ? (
                        <div className="relative w-full h-fit flex flex-col gap-3">
                          <div className="relative w-full sm:w-fit h-fit flex items-start justify-start">
                            <div className="relative w-full sm:min-w-60 w-fit h-60 flex flex-grow">
                              <Image
                                layout="fill"
                                objectFit="contain"
                                objectPosition="left"
                                draggable={false}
                                alt={(post.metadata as ImageMetadata).content}
                                src={handleImage(
                                  (post.metadata as ImageMetadata)?.image?.item
                                )}
                              />
                            </div>
                          </div>
                          <div
                            className="relative w-full h-fit flex"
                            dangerouslySetInnerHTML={{
                              __html: descriptionRegex(
                                (post.metadata as ImageMetadata).content
                              ),
                            }}
                          ></div>
                        </div>
                      ) : (
                        <div
                          className="relative w-full h-fit flex"
                          dangerouslySetInnerHTML={{
                            __html: descriptionRegex(
                              (post.metadata as TextOnlyMetadata).content
                            ),
                          }}
                        ></div>
                      )}
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Metal;
