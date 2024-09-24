import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { HeaderProps } from "../types/all.types";
import { INFURA_GATEWAY } from "../../lib/constants";

const Header: FunctionComponent<HeaderProps> = ({
  changeColor,
  idiomasOpen,
  setIdiomasOpen,
  i18n,
  t,
  router,
}): JSX.Element => {
  return (
    <div className="relative w-full h-full text-mainText flex flex-col text-center gap-10 px-2 sm:px-8 py-4">
      <div className="relative w-full h-full min-h-full grid grid-flow-col auto-cols-auto">
        <div
          className="relative w-fit h-fit text-xs font-neue cursor-pointer justify-self-center"
          onClick={() => changeColor()}
        >
          EST. 1998
        </div>
        <div className="absolute w-fit h-fit flex items-center justify-self-end">
          <div
            className="relative w-6 h-10 font-neue cursor-pointer hover:scale-105"
            onClick={() => setIdiomasOpen(!idiomasOpen)}
          >
            <Image draggable={false} src="/images/fondo.png" layout="fill" />
          </div>
          {idiomasOpen && (
            <div
              className={`absolute text-right flex items-center justify-center h-fit font-neueL text-mainText text-xs top-12 flex-col rounded-sm right-0 border border-mainText w-[8rem] z-50 bg-mainBg`}
            >
              {[
                {
                  image: "QmUSR6zQuNTLy3WGHBMDcyBJ7DHXGJxuiJuoLJ1V2MyKTb",
                  name: "en",
                },
                {
                  image: "QmYQBkpgirwnNhteymuJci9FHH4Sq2eAEEDDGjNDRkXKWc",
                  name: "es",
                },
                {
                  image: "QmZVU5rZxU1REJHNHtScLuNgeKMoDVK4ruwuP7tSznTqUg",
                  name: `ع ${t("pronto")}`,
                },
                {
                  image: "QmX5L5R7y2dbFM3mEqWsydsadcScebnUDdeYJW7mWirX5d",
                  name: `א ${t("pronto")}`,
                },
                {
                  image: "QmRq7WA5H9ghy5qX1FuLLpj9EZvgZyWMuvsyPkGFyVG5ap",
                  name: `br ${t("pronto")}`,
                },
                {
                  image: "QmfRNNJKQ8QxuvdjTh1u5T1JW8WCH3cfsixd5FnGNxVD1m",
                  name: `ук ${t("pronto")}`,
                },
                {
                  image: "QmdbSbop2xMqYEyYk3hErLF9nQmmsFtLSsrwzQgkad9Koo",
                  name: `د ${t("pronto")}`,
                },
                {
                  image: "QmXzFXL5rxoqUei2X2rVEMZ5a91d4U6ommUBq4XeFHsA5k",
                  name: `あ ${t("pronto")}`,
                },
                {
                  image: "QmSG2wdnpEB8xnfmqM7gVhM6BiA2m9GhSJwXSVkQ9JXT3Z",
                  name: `yi ${t("pronto")}`,
                },
                {
                  image: "QmPkEFY3L1EnKgALyhgpYnnUXtt8KQNcSAUEPiiJcQyhEU",
                  name: `fr ${t("pronto")}`,
                },
                {       image: "QmURxxCvHcRZQNEPvGnEXjJW57iiu7uBDk9AR8JaPN8ooa",
                  name: `ç ${t("pronto")}`,
                },
                {       image: "QmWeNpFCobF9AP4PeLErQ79HxRayedhJGb2nPKtEcTvpn4",
                  name: `ű ${t("pronto")}`,
                },{
                  image: "QmfHYdrJSrmPHNaGMqzenCq9w2tKSs7NFUcB97MXuHz1cB",
                  name: `ŋ ${t("pronto")}`,
                },

              ].map(
                (
                  item: {
                    image: string;
                    name: string;
                  },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className={`relative w-full h-12 flex items-center px-2 justify-center flex-row gap-2 ${
                        index !== 9 && "border-b border-mainText"
                      } ${
                        (index === 0 || index === 1) &&
                        "hover:opacity-80 cursor-pointer"
                      }`}
                      onClick={() => {
                        if (index === 0 || index === 1) {
                          i18n.changeLanguage(item.name);

                          router.push(router.asPath, undefined, {
                            // shallow: true,
                            locale: item.name,
                          });
                        }
                      }}
                    >
                      <div className="relative w-fit h-fit flex items-center justify-center">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <Image
                            draggable={false}
                            src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className="relative w-fit h-fit flex items-center justify-center text-center">
                        {item.name}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={`relative w-full h-full grid grid-flow-col auto-cols-auto text-left eight:text-center font-sani ${
          i18n.language == "es"
            ? "text-[14vw] leading-none eight:text-[8.5vw] mod:text-[8.3vw]"
            : "text-[14vw] leading-none eight:text-[8.5vw] mod:text-[8.7vw]"
        }`}
      >
        <div className="relative w-fit h-fit justify-self-center">
          {t("titulo")}
        </div>
      </div>
    </div>
  );
};

export default Header;
