import styled, { CSSObject } from "@emotion/styled";
import React, {
  CSSProperties,
  ElementType,
  MouseEvent,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTheme } from "../../theme/useTheme";
import { createPolymorphicComponent } from "../Box";
import { composeRef } from "../../utils/composeRef";
import { colors } from "@simm/theme";

export type AvatarSize = "sm" | "md" | "lg" | number;

export type AvatarShape = "circle" | "square";

const GAP_DEFAULT = 4 as const;

export interface AvatarProps {
  children?: ReactNode;
  alt?: string;
  classes?: Object;
  className?: string;
  component?: ElementType;
  src?: string;
  srcSet?: string;
  style?: CSSProperties;
  shape?: AvatarShape;
  size?: AvatarSize;
  gap?: number;
  icon?: ReactNode;
  crossOrigin?: "" | "anonymous" | "use-credentials";
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  onError?: () => boolean;
}

const getAvatarStylesBySize = (size?: AvatarSize): CSSObject => {
  switch (size) {
    case "sm": {
      return {
        height: "1.5rem",
        width: "1.5rem",
        fontSize: "0.75rem",
      };
    }
    case "md": {
      return {
        height: "2.5rem",
        width: "2.5rem",
        fontSize: "1.25rem",
      };
    }
    case "lg": {
      return {
        height: "3.5rem",
        width: "3.5rem",
        fontSize: "1.75rem",
      };
    }
    case Number(size): {
      return {
        height: size,
        width: size,
        fontSize: size / 32 + "rem",
      };
    }
    default: {
      return {
        height: "2.5rem",
        width: "2.5rem",
        fontSize: "1.25rem",
      };
    }
  }
};

const AvatarWrapper = styled("div")<AvatarProps>((props) => {
  const { size } = props;
  const theme = useTheme();
  const avatarStyles: CSSObject = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: colors.gray[300],
    overflow: "hidden",
    color: theme.pallete?.common?.white,
    borderRadius: props.shape === "square" ? "6px" : "50%",
    ...getAvatarStylesBySize(size),
  };

  return avatarStyles;
});

const AvatarImg = styled("img")({
  width: "100%",
  height: "100%",
  textAlign: "center",
  objectFit: "cover",
  color: "transparent",
  textIndent: 10000,
});

export const Avatar = createPolymorphicComponent<HTMLDivElement, AvatarProps>(
  (props, ref) => {
    const {
      color,
      src,
      srcSet,
      alt,
      crossOrigin,
      icon,
      children,
      gap = GAP_DEFAULT,
      ...rest
    } = props;

    const [isImgExist, setIsImgExist] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [scale, setScale] = useState(1);

    const avatarChildrenRef = useRef<HTMLSpanElement>(null);
    const avatarNodeRef = useRef<HTMLDivElement>(null);

    const avatarNodeMergedRef = composeRef<HTMLDivElement>(
      ref as MutableRefObject<HTMLDivElement>,
      avatarNodeRef as MutableRefObject<HTMLDivElement>,
    );

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (!mounted) return;

      const container = (avatarChildrenRef as MutableRefObject<HTMLDivElement>)
        ?.current;

      const resizeObserver = new ResizeObserver(() => {
        const childrenWidth = (
          avatarChildrenRef as MutableRefObject<HTMLSpanElement>
        ).current.offsetWidth;
        const nodeWidth = (avatarNodeRef as MutableRefObject<HTMLDivElement>)
          .current.offsetWidth;
        if (childrenWidth !== 0 && nodeWidth !== 0) {
          if (gap * 2 < nodeWidth) {
            setScale(
              nodeWidth - gap * 2 < childrenWidth
                ? (nodeWidth - gap * 2) / childrenWidth
                : 1,
            );
          }
        }
      });

      if (container) {
        resizeObserver.observe(container);
      }

      return () => {
        if (container) {
          resizeObserver.unobserve(container);
        }
      };
    }, [mounted]);

    const handleImgLoadError = () => {
      const { onError } = props;
      const errorFlag = onError?.();
      if (!!errorFlag) {
        setIsImgExist(false);
      }
    };

    let renderChildren: ReactNode;

    if (typeof src === "string" && isImgExist) {
      renderChildren = (
        <AvatarImg
          src={src}
          srcSet={srcSet}
          onError={handleImgLoadError}
          alt={alt || ""}
          crossOrigin={crossOrigin}
        />
      );
    } else if (icon) {
      renderChildren = icon;
    } else if (mounted || scale !== 1) {
      const transformString = `scale(${scale})`;
      const childrenStyle: CSSProperties = {
        msTransform: transformString,
        WebkitTransform: transformString,
        transform: transformString,
      };
      renderChildren = (
        <span ref={avatarChildrenRef} style={{ ...childrenStyle }}>
          {children}
        </span>
      );
    }

    return (
      <AvatarWrapper ref={avatarNodeMergedRef} {...rest}>
        {renderChildren}
      </AvatarWrapper>
    );
  },
);
