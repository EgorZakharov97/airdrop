// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ud9JpUD8N987dWHx7H9cnr
// Component: 5zWDW2y05Q
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ButtonLink from "../../ButtonLink"; // plasmic-import: yJlgIVbQgj/component
import Feature from "../../Feature"; // plasmic-import: zWiclsueNN/component
import HeroBlock from "../../HeroBlock"; // plasmic-import: 8tGQscQ3JT/component
import { useScreenVariants as useScreenVariantsi8XEoDvLpFaqh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: i8XEoDVLpFaqh/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_airdrop.module.css"; // plasmic-import: ud9JpUD8N987dWHx7H9cnr/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: 5zWDW2y05Q/css
import Ellipse1719Icon from "./icons/PlasmicIcon__Ellipse1719"; // plasmic-import: 1-OTZfc-jH/icon

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsi8XEoDvLpFaqh()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"NFT-Tools.io"}</title>
        <meta key="og:title" property="og:title" content={"NFT-Tools.io"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "NFT Airdrop tool for everyone. Transfer NFT tokens on Ethereum, Polygon and BNB chains fast and easy."
          }
        />

        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/609a2a67731189afee497eb86dd0ffc6.png"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root2"}
          data-plasmic-override={overrides.root2}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root2
          )}
        >
          <div
            data-plasmic-name={"maskGroup2"}
            data-plasmic-override={overrides.maskGroup2}
            className={classNames(projectcss.all, sty.maskGroup2)}
          >
            <div
              data-plasmic-name={"rectangle5913"}
              data-plasmic-override={overrides.rectangle5913}
              className={classNames(projectcss.all, sty.rectangle5913)}
            />
          </div>

          <Ellipse1719Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div className={classNames(projectcss.all, sty.freeBox__aVkIp)}>
            <div className={classNames(projectcss.all, sty.columns__hwNyv)}>
              <div className={classNames(projectcss.all, sty.column__d7Hdg)}>
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Airdrop NFTs to your holders fast and easily with low gas"}
                </h1>

                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__sf1TJ
                  )}
                >
                  {
                    "The ultimate NFT Airdrop Tool to simplify your life as a creator"
                  }
                </h2>

                <ButtonLink
                  data-plasmic-name={"toTheApp"}
                  data-plasmic-override={overrides.toTheApp}
                  className={classNames("__wab_instance", sty.toTheApp)}
                  link={"/app/airdrop"}
                  text={"Explore"}
                />

                <div className={classNames(projectcss.all, sty.freeBox__x33Sr)}>
                  <p.PlasmicImg
                    alt={"Ethereum"}
                    className={classNames(sty.img__emfeY)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "small")
                        ? "80px"
                        : "auto"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"80px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/airdrop/images/ethereumpng2.png",
                      fullWidth: 300,
                      fullHeight: 300,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={"Polygon (Matic)"}
                    className={classNames(sty.img___4Ytxc)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "small")
                        ? "80px"
                        : "auto"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"80px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/airdrop/images/polygonpng2.png",
                      fullWidth: 300,
                      fullHeight: 300,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={"Binance Smart Chain (BNB)"}
                    className={classNames(sty.img__vPnlr)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "small")
                        ? "80px"
                        : "auto"
                    }
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"80px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/airdrop/images/bnBpng.png",
                      fullWidth: 300,
                      fullHeight: 300,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__rh6Wt)}>
                <div
                  data-plasmic-name={"maskGroup"}
                  data-plasmic-override={overrides.maskGroup}
                  className={classNames(projectcss.all, sty.maskGroup)}
                >
                  <div
                    data-plasmic-name={"rectangle5912"}
                    data-plasmic-override={overrides.rectangle5912}
                    className={classNames(projectcss.all, sty.rectangle5912)}
                  />
                </div>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__mzlwX)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "small")
                      ? "300px"
                      : "auto"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/airdrop/images/nftTransferpng.png",
                    fullWidth: 2000,
                    fullHeight: 2000,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox__mLr43)}
                />
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__peCrm)}>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__dsd59
              )}
            >
              {"Interact with your holders easily"}
            </h2>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
            ) ? (
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__udGcI
                )}
              >
                {"Interact with your holders easily"}
              </h2>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__i6YaO)}
            >
              <div className={classNames(projectcss.all, sty.column__rtoAt)}>
                <Feature
                  className={classNames("__wab_instance", sty.feature__rXuzS)}
                  image={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__byKZ)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/airdrop/images/nftContractpng.png",
                        fullWidth: 600,
                        fullHeight: 479,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  text={"Works with most common NFT Interfaces"}
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__y2UPn)}>
                <Feature
                  className={classNames("__wab_instance", sty.feature__qhHzz)}
                  image={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___3Ski)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/airdrop/images/nftFramepng.png",
                        fullWidth: 600,
                        fullHeight: 479,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  text={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__svtju
                      )}
                    >
                      {"Sends NFTs to different addresses"}
                    </div>
                  }
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__jZpUl)}>
                <Feature
                  className={classNames("__wab_instance", sty.feature__z5MQa)}
                  image={
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___5Ori4)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/airdrop/images/bftBoxpng.png",
                        fullWidth: 600,
                        fullHeight: 479,
                        aspectRatio: undefined
                      }}
                    />
                  }
                  text={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nJnvK
                      )}
                    >
                      {"Wraps 500 transfers into 1 transaction"}
                    </div>
                  }
                />
              </div>

              <div className={classNames(projectcss.all, sty.column__ueyNw)}>
                <Feature
                  className={classNames("__wab_instance", sty.feature__lBqxe)}
                  text={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kMr2E
                      )}
                    >
                      {"Designed for Ethereum-Compatible Networks"}
                    </div>
                  }
                />
              </div>
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__zEuY6)}>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2___0Bo6W
              )}
            >
              {"Who is it for?"}
            </h2>

            {true ? (
              <HeroBlock
                className={classNames("__wab_instance", sty.heroBlock__ztJ3W)}
              />
            ) : null}
            {true ? (
              <HeroBlock
                className={classNames("__wab_instance", sty.heroBlock__sltl6)}
                heading={"Crypto holders"}
                image={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ue8WV)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/airdrop/images/lbRelaxpng.png",
                      fullWidth: 3000,
                      fullHeight: 3000,
                      aspectRatio: undefined
                    }}
                  />
                }
                reverse={
                  hasVariant(globalVariants, "screen", "small")
                    ? undefined
                    : true
                }
                text={
                  "Transfer NFTs you own to four friends in a single transaction with lower gas."
                }
              />
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root2: [
    "root2",
    "maskGroup2",
    "rectangle5913",
    "svg",
    "h1",
    "toTheApp",
    "maskGroup",
    "rectangle5912"
  ],

  maskGroup2: ["maskGroup2", "rectangle5913"],
  rectangle5913: ["rectangle5913"],
  svg: ["svg"],
  h1: ["h1"],
  toTheApp: ["toTheApp"],
  maskGroup: ["maskGroup", "rectangle5912"],
  rectangle5912: ["rectangle5912"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    maskGroup2: makeNodeComponent("maskGroup2"),
    rectangle5913: makeNodeComponent("rectangle5913"),
    svg: makeNodeComponent("svg"),
    h1: makeNodeComponent("h1"),
    toTheApp: makeNodeComponent("toTheApp"),
    maskGroup: makeNodeComponent("maskGroup"),
    rectangle5912: makeNodeComponent("rectangle5912"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
