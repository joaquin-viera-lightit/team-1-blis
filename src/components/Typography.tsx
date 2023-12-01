import React from "react";
import { Text } from "react-native";

import classnames from "classnames";

export type TypographyTypes =
  | "title"
  | "title20"
  | "title16"
  | "title12"
  | "subtitle"
  | "subtitle20"
  | "subtitle16"
  | "subtitle14"
  | "subtitle12"
  | "bodyBold"
  | "bodySemiBold"
  | "bodyRegular"
  | "bodyRegular16"
  | "bodyRegular10"
  | "unitMeasureXL"
  | "unitMeasureL"
  | "unitMeasureM"
  | "unitMeasure";

export interface TypographyProps {
  type?: TypographyTypes;
  children: React.ReactNode;
  bold?: boolean;
  color?: string;
  classes?: string;
  numberOfLines?: number | undefined;
}

export const FontTypes = {
  title: "font-default font-bold text-[24px] tracking-wide",
  title20: "font-default font-bold text-[20px] tracking-wide",
  title16: "font-default font-bold text-[16px] tracking-wide",
  title12: "font-default font-bold text-[12px] tracking-wide",
  subtitle: "font-default font-semibold text-[24px] tracking-wide",
  subtitle20: "font-default font-semibold text-[20px] tracking-wide",
  subtitle16: "font-default font-semibold text-[16px] tracking-wide",
  subtitle14: "font-default font-semibold text-[14px] tracking-wide",
  subtitle12: "font-default font-semibold text-[12px] tracking-wide",
  bodyBold: "font-default font-bold text-[24px] tracking-wide",
  bodySemiBold: "font-default font-semibold text-[14px] tracking-wide",
  bodyRegular: "font-default text-[14px] tracking-wide",
  bodyRegular16: "font-default text-[16px] tracking-wide",
  bodyRegular10: "font-default text-[10px] tracking-wide",
  unitMeasureXL: "font-default font-semibold text-[86px] tracking-wide",
  unitMeasureL: "font-default font-semibold text-[60px] tracking-wide",
  unitMeasureM: "font-default font-semibold text-[36px] tracking-wide",
  unitMeasure: "font-default leading-3 text-[10px] tracking-wide",
};

export const Typography = ({
  children,
  color = "text-neutral-5",
  type = "bodyRegular",
  classes = "",
  numberOfLines = undefined,
}: TypographyProps) => {
  const typeStyle = FontTypes[type] ?? FontTypes.bodyRegular;

  return (
    <Text
      numberOfLines={numberOfLines}
      className={classnames(color, typeStyle, classes)}
    >
      {children}
    </Text>
  );
};
