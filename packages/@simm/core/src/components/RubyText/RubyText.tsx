import React, { ClipboardEvent, ReactNode, useCallback } from "react";
import { useRubyText } from "./Ruby.context";
import styled from "@emotion/styled";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      rb: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export type RubyTextPosition =
  | "over"
  | "under"
  | "inter-character"
  | "inherit"
  | "initial"
  | "unset";

export type RubyTextProps = {
  kanji?: string;
  kanjiProps?: React.CSSProperties;
  furigana?: string;
  furiganaProps?: React.CSSProperties;
  position?: RubyTextPosition;
  children?: ReactNode;
  formatString?: string;
  isVertical?: boolean;
};

const RubyTextRoot = styled.ruby<{
  position: RubyTextPosition;
  preventCopy?: boolean;
  isVertical?: boolean;
}>(({ position, preventCopy, isVertical }) => ({
  rubyPosition: position,
  ...(preventCopy && {
    userSelect: "none",
  }),
  ...(isVertical && {
    writingMode: "vertical-rl",
  }),
}));

export const RubyText = ({
  position = "initial",
  kanji,
  furigana,
  kanjiProps,
  furiganaProps,
  children,
  formatString,
  isVertical,
}: RubyTextProps) => {
  const { showDescription, preventCopy } = useRubyText();

  const removeRpRtTags = useCallback(
    (node: ReactNode): ReactNode => {
      if (!showDescription) {
        if (Array.isArray(node)) {
          return React.Children.map(node, removeRpRtTags);
        }
        if (React.isValidElement(node)) {
          const { type, props } = node;
          if (type === "rp" || type === "rt") {
            return null;
          }
          const newChildren = React.Children.map(
            props.children,
            removeRpRtTags,
          );
          return React.cloneElement(node, { ...props, children: newChildren });
        }
        return node;
      } else {
        return node;
      }
    },
    [showDescription],
  );

  const handlePreventCopy = (e: ClipboardEvent<HTMLInputElement>) => {
    if (preventCopy) e.preventDefault();
  };

  const convertStringToTag = (input: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    input.replace(regex, (match, kanji, furigana, index) => {
      if (index > lastIndex) {
        parts.push(input.slice(lastIndex, index));
      }
      parts.push(
        <ruby key={index}>
          <rb style={{ ...kanjiProps }}>{kanji}</rb>
          {showDescription && (
            <>
              <rp>（</rp>
              <rt style={{ ...furiganaProps }}>{furigana}</rt>
              <rp>）</rp>
            </>
          )}
        </ruby>,
      );
      lastIndex = index + match.length;
      return match;
    });
    if (lastIndex < input.length) {
      parts.push(input.slice(lastIndex));
    }
    return parts;
  };

  const render = () => {
    if (formatString) return convertStringToTag(formatString);
    if (children) return removeRpRtTags(children);
    return (
      <>
        <rb style={{ ...kanjiProps }}>{kanji}</rb>
        {showDescription && (
          <>
            <rp>（</rp>
            <rt style={{ ...furiganaProps }}>{furigana}</rt>
            <rp>）</rp>
          </>
        )}
      </>
    );
  };

  return (
    <span>
      <RubyTextRoot
        position={position}
        preventCopy={preventCopy}
        onCopy={handlePreventCopy}
        isVertical={isVertical}
      >
        {render()}
      </RubyTextRoot>
    </span>
  );
};
