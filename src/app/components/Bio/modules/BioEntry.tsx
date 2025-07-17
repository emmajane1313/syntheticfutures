"use client";

import { ColorContext } from "@/app/providers";
import { useRouter } from "next/navigation";
import { FunctionComponent, JSX, useContext } from "react";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

const BioEntry: FunctionComponent<{ dict: any; lang: string }> = ({
  dict,
  lang,
}): JSX.Element => {
  const router = useRouter();
  const context = useContext(ColorContext);
  return (
    <div className="relative h-auto min-h-screen w-full overflow-x-hidden">
      <div className="relative w-full h-full flex flex-col gap-10">
        <div className="relative w-full h-fit flex flex-row items-center justify-center text-center px-2 sm:px-8 py-4">
          <div className="absolute left-2 top-4 w-full h-fit flex items-center justify-start">
            <div
              className="relative w-fit h-fit flex items-center justify-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              <PiArrowFatLinesLeftFill
                color={
                  context?.color == "maroon"
                    ? "C92D1F"
                    : context?.color == "gris"
                    ? "F2F2F2"
                    : "F6EC7B"
                }
                size={24}
              />
            </div>
          </div>
          <div
            className="relative w-fit h-fit text-xs font-neue cursor-pointer justify-self-center"
            onClick={() => context?.changeColor()}
          >
            {dict?.est}
          </div>
        </div>
        <div
          className="relative w-full h-fit flex flex-col gap-5 items-start justify-start text-left px-12 pt-10"
          dir={["en", "es"]?.includes(lang) ? "ltr" : "rtl"}
        >
          <div className={`relative w-fit h-full font-sani text-4xl`}>
            {dict?.hey}
          </div>
          <div
            className={`relative w-fit h-full font-sani text-6xl underline cursor-pointer underline-offset-8`}
            onClick={() => window.open("https://github.com/emmajane1313")}
          >
            {dict?.me}
          </div>
          <div
            dir={["en", "es"]?.includes(lang) ? "ltr" : "rtl"}
            className="relative w-2/3 h-fit text-base font-neueL"
            dangerouslySetInnerHTML={{
              __html: dict?.bio,
            }}
          ></div>
        </div>
        <div
          className="relative w-full h-fit gap-3 flex flex-col items-start justify-start px-12"
          dir={["en", "es"]?.includes(lang) ? "ltr" : "rtl"}
        >
          <div className="relative w-fit h-fit flex font-neue opacity-70 text-sm">
            {dict?.timeline}:
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-col gap-8">
            {[
              {
                titulo: dict?.spaceT,
                descripcion: dict?.spaceD,
                fecha: "2017-2019",
              },
              {
                titulo: dict?.cryptoT,
                descripcion: dict?.cryptoD,
                fecha: "2019-2020",
              },
              {
                titulo: "DIGITALAX",
                enlace: "https://digitalax.xyz/",
                descripcion: dict?.digiD,
                fecha: "2020-Current",
                subs: [
                  {
                    titulo: dict?.npcT,
                    descripcion: dict?.npcD,
                    techstack: "Rust, C++, Solidity, NextJS, TS, React",
                    enlace: "https://npcstudio.xyz/",
                  },
                  {
                    titulo: "Chromadin",
                    descripcion: dict?.chroma,
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://chromadin.xyz/",
                  },
                  {
                    titulo: dict?.litT,
                    descripcion: dict?.litD,
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://listener.irrevocable.dev/",
                  },
                  {
                    titulo: "Coin Op",
                    descripcion: dict?.coin,
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://coinop.themanufactory.xyz/",
                  },
                  {
                    titulo: "Cypher Search",
                    descripcion: dict?.cypher,
                    techstack: "NextJS, TS, React, Solidity, Node",
                    enlace: "https://cypher.digitalax.xyz/",
                  },
                  {
                    titulo: "Kinora SDK",
                    descripcion: dict?.kin,
                    techstack: "NextJS, TS, React, Solidity, Node, Python",
                    enlace: "https://kinora.irrevocable.dev/",
                  },
                  {
                    titulo: "TripleA",
                    enlace: "https://triplea.agentmeme.xyz/",
                    descripcion: dict?.trip,
                    techstack:
                      "Rust, NextJS, Tailwind, TS, React, Solidity (ZK), Node",
                  },
                ],
              },
              {
                titulo: "F3Manifesto",
                enlace: "https://f3manifesto.xyz/",
                descripcion: dict?.f3mD,
                fecha: "2021-Current",
              },
              {
                titulo: "Lucidity",
                enlace: "https://lucidity.agentmeme.xyz/",
                descripcion: dict?.lucD,
                fecha: "2025-Current",
              },
              {
                titulo: "Emancipa",
                enlace: "https://emancipa.xyz/",
                descripcion: dict?.emancipaD,
                fecha: "2024-Current",
                subs: [
                  {
                    titulo: "Dhäwu",
                    descripcion: dict?.dhawuD,
                    techstack: "NextJS, TS, React",
                    enlace: "https://dhawu.emancipa.xyz/",
                  },
                  {
                    titulo: "Boudica",
                    descripcion: dict?.boudicaD,
                    techstack: "NextJS, TS, React",
                    enlace: "https://boudica.emancipa.xyz",
                  },
                ],
              },
              {
                titulo: dict?.noiseT,
                enlace: "https://www.youtube.com/@noisemachine13",
                descripcion: dict?.noiseD,
                fecha: "2025-Current",
                subs: [
                  {
                    titulo: "Casa de Espejos",
                    descripcion: dict?.casaD,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://casadeespejos.com/",
                  },
                  {
                    titulo: "Runway",
                    descripcion: dict?.runwayD,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://emmajanemackinnonlee-runway.xyz/",
                  },
                  {
                    titulo: "Wan Interviews",
                    descripcion: dict?.interD,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://emmajanemackinnon.com/",
                  },
                ],
              },
              {
                titulo: "Global Designer Network",
                enlace: "https://globaldesignernetwork.com/",
                descripcion: dict?.gdnD,
                fecha: "2020-Current",
                subs: [
                  {
                    titulo: "Web3 Fashion Week",
                    descripcion: dict?.w3fwD,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://web3fashionweek.com/",
                  },
                  {
                    titulo: "I Coined Web3 Fashion",
                    descripcion: dict?.coinedD,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://icoinedweb3fashion.com/",
                  },
                ],
              },
              {
                titulo: "CC0",
                enlace: "https://emmajanemackinnonlee-cc0.com/",
                descripcion: dict?.cc0d,
                fecha: "2025-Current",
                subs: [
                  {
                    titulo: "CC0 Web3 Fashion",
                    descripcion: dict?.cc0wf,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://casadeespejos.com/",
                  },
                  {
                    titulo: "CC0 Web3",
                    descripcion: dict?.cc0w,
                    techstack: "NextJS, TS, React, Wan, Flux",
                    enlace: "https://emmajanemackinnonlee-runway.xyz/",
                  },
                ],
              },
            ].map(
              (
                elemento: {
                  titulo: string;
                  descripcion: string;
                  fecha: string;
                  enlace?: string;
                  subs?: {
                    titulo: string;
                    descripcion: string;
                    techstack: string;
                    enlace: string;
                  }[];
                },
                indice: number
              ) => {
                return (
                  <div
                    key={indice}
                    className="relative w-full h-fit flex items-start justify-start flex-col gap-8"
                  >
                    <div className="relative w-full h-fit flex flex-col gap-1 items-start justify-start">
                      <div
                        className={`relative w-fit h-fit flex text-xl font-neue ${
                          elemento.enlace && "cursor-pointer"
                        }`}
                        onClick={() =>
                          elemento.enlace && window.open(elemento.enlace)
                        }
                      >
                        {elemento.titulo}
                      </div>
                      <div className="relative w-fit h-fit flex text-sm font-sani">
                        {elemento.fecha}
                      </div>
                      <div className="relative w-3/5 h-fit flex text-base font-neueL opacity-80">
                        {elemento.descripcion}
                      </div>
                    </div>
                    {elemento?.subs && (
                      <div
                        className={`relative w-full h-fit flex items-start justify-start flex-col gap-8 ${
                          lang == "ar" ? "pr-4" : "pl-4"
                        }`}
                      >
                        {elemento?.subs?.map(
                          (
                            sub: {
                              titulo: string;
                              descripcion: string;
                              techstack: string;
                              enlace: string;
                            },
                            indice: number
                          ) => {
                            return (
                              <div
                                key={indice}
                                className="relative w-full h-fit flex flex-col gap-1 items-start justify-start"
                              >
                                <div
                                  className="relative w-fit h-fit flex text-base font-neue cursor-pointer"
                                  onClick={() => window.open(sub.enlace)}
                                >
                                  {sub.titulo}
                                </div>
                                <div className="relative w-fit h-fit flex text-xs font-sani">
                                  {sub.techstack}
                                </div>
                                <div className="relative w-2/5 h-fit flex text-base font-neueL opacity-80">
                                  {sub.descripcion}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioEntry;
