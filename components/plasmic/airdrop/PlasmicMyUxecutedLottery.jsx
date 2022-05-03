// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ud9JpUD8N987dWHx7H9cnr
// Component: kngkp2xcPF
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: QvnJ1wWMq8/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_airdrop.module.css"; // plasmic-import: ud9JpUD8N987dWHx7H9cnr/projectcss
import sty from "./PlasmicMyUxecutedLottery.module.css"; // plasmic-import: kngkp2xcPF/css

export const PlasmicMyUxecutedLottery__VariantProps = new Array("error");

export const PlasmicMyUxecutedLottery__ArgProps = new Array(
  "lotteryNumber",
  "nParticipants",
  "lAddress",
  "hash",
  "message",
  "onSubmit"
);

function PlasmicMyUxecutedLottery__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rooterror]: hasVariant(variants, "error", "error") }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__kkCnH)}>
        <div className={classNames(projectcss.all, sty.columns___6Z6Cv)}>
          <div className={classNames(projectcss.all, sty.column__wFcRx)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aXfaB
              )}
            >
              {"Lottery Number"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column___1JzR)}>
            <div className={classNames(projectcss.all, sty.freeBox__lBvyH)}>
              {p.renderPlasmicSlot({
                defaultContents: "1234",
                value: args.lotteryNumber,
                className: classNames(sty.slotTargetLotteryNumber)
              })}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.columns__hNfJi)}>
          <div className={classNames(projectcss.all, sty.column__hjFhW)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6Gl0O
              )}
            >
              {"#Participants"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__hBrM)}>
            <div className={classNames(projectcss.all, sty.freeBox__rBd0X)}>
              {p.renderPlasmicSlot({
                defaultContents: "4000",
                value: args.nParticipants,
                className: classNames(sty.slotTargetNParticipants)
              })}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.columns__gnNbc)}>
          <div className={classNames(projectcss.all, sty.column__rtTlk)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wW4Ib
              )}
            >
              {"#Winners"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__y5RyM)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jHeou
              )}
            >
              {"3"}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.columns___1MAHp)}>
          <div className={classNames(projectcss.all, sty.column__rg4U)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2Ck7
              )}
            >
              {"Lottery Address"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__sO8NM)}>
            <div className={classNames(projectcss.all, sty.freeBox__nG2Pa)}>
              {p.renderPlasmicSlot({
                defaultContents: "0xfno8u3h490pgf834h0g98h423g234f",
                value: args.lAddress,
                className: classNames(sty.slotTargetLAddress)
              })}
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.columns__p55S)}>
          <div className={classNames(projectcss.all, sty.column__qdzvB)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__m3BTv
              )}
            >
              {"Table Hash"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column___58Wru)}>
            <div className={classNames(projectcss.all, sty.freeBox__dvn8V)}>
              {p.renderPlasmicSlot({
                defaultContents: "ueiugrbhp3qio8u54hg39p587ugh3p9q4g8uh",
                value: args.hash,
                className: classNames(sty.slotTargetHash)
              })}
            </div>
          </div>
        </div>
      </div>

      {(hasVariant(variants, "error", "error") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__jC7G, {
            [sty.freeBoxerror__jC7GBlJuP]: hasVariant(
              variants,
              "error",
              "error"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Sorry, Something went wrong",
            value: args.message,
            className: classNames(sty.slotTargetMessage, {
              [sty.slotTargetMessageerror]: hasVariant(
                variants,
                "error",
                "error"
              )
            })
          })}
        </div>
      ) : null}

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
        name={"Play Lottery"}
        onClick={args.onSubmit !== undefined ? args.onSubmit : ""}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMyUxecutedLottery__ArgProps,
      internalVariantPropNames: PlasmicMyUxecutedLottery__VariantProps
    });

    return PlasmicMyUxecutedLottery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMyUxecutedLottery";
  } else {
    func.displayName = `PlasmicMyUxecutedLottery.${nodeName}`;
  }
  return func;
}

export const PlasmicMyUxecutedLottery = Object.assign(
  // Top-level PlasmicMyUxecutedLottery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicMyUxecutedLottery
    internalVariantProps: PlasmicMyUxecutedLottery__VariantProps,
    internalArgProps: PlasmicMyUxecutedLottery__ArgProps
  }
);

export default PlasmicMyUxecutedLottery;
/* prettier-ignore-end */
