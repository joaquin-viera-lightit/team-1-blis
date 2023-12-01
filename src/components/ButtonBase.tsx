import React from "react";
import type { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

import { Icon } from "./Icon";
import type { HeroIcons } from "./Icon";
import { Typography } from "./Typography";

const sizes = {
  xs: "w-btn-xs py-2 px-3",
  sm: "w-btn-sm  py-2 px-3",
  base: "w-btn-base  py-2.5 px-5",
  lg: "w-btn-lg py-3 px-5",
  xl: "w-btn-xl py-3.5 px-6",
  full: "w-full py-3.5 px-6",
  "50%": "w-1/2 py-3.5 px-6",
  fit: "w-fit ",
} as const;

const types = {
  filled: "rounded-md",
  pill: "rounded-xl",
  outline: "rounded-md",
  link: "rounded-md",
  google: "rounded-md",
} as const;

const fontColors = {
  primary: {
    filled: "text-white",
    pill: "text-white",
    disabled: "text-white",
    outline: "text-info-5",
    link: "text-info-5",
    google: "text-gray-400",
  },
  secondary: {
    filled: "text-white",
    pill: "text-white",
    disabled: "text-white",
    outline: "text-success-5",
    link: "text-success-5",
  },
  red: {
    link: "text-error-5",
  },
} as const;

const colors = {
  primary: {
    filled: "bg-primary-900 hover:bg-primary active:bg-primary",
    pill: "bg-primary-900 hover:bg-primary active:bg-primary",
    outline:
      "border border-primary-900 hover:border-info-6 active:border-info-6",
    link: "",
    disabled: "bg-primary-300",
    google: "bg-white hover:bg-gray-200 active:bg-gray-200",
  },
  secondary: {
    filled: "bg-black-900 hover:bg-black-300 active:bg-black-300",
    pill: "bg-success-5 hover:bg-success-6 active:bg-success-6",
    outline:
      "border border-success-5 hover:border-success-6 active:border-success-6",
    link: "",
    disabled: "bg-success-1.5",
  },
  red: {
    filled: "bg-red-600",
    pill: "",
    outline: "",
    link: "bg-transparent",
    disabled: "",
  },
} as const;

export type ButtonType = keyof typeof types;
export type ButtonColor = keyof typeof colors;
export type ButtonSize = keyof typeof sizes;

export interface ButtonProps {
  title: ReactNode;
  onPress?: () => void;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  classes?: string;
  icon?: JSX.Element | HeroIcons;
  leftIcon?: JSX.Element | HeroIcons;
  textBlack?: boolean;
}

export const ButtonBase = ({
  title,
  onPress,
  type = "filled",
  color = "primary",
  size = "base",
  classes,
  disabled = false,
  leftIcon,
  icon,
  textBlack = false,
}: ButtonProps) => {
  const bType = types[type];
  const bSize = sizes[size];
  const bColor = colors[color][disabled ? "disabled" : type];

  const fontColor = fontColors[color][disabled ? "disabled" : type];

  const LeftIcon =
    leftIcon && typeof leftIcon === "string" ? (
      <Icon name={leftIcon} />
    ) : (
      leftIcon
    );
  const RightIcon =
    icon && typeof icon === "string" ? <Icon name={icon} /> : icon;

  return (
    <TouchableOpacity
      className={`${bColor} ${bSize} ${bType} ${classes} flex-row items-center justify-center`}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
    >
      {LeftIcon && <View className="mr-1">{LeftIcon}</View>}

      {typeof title === "string" ? (
        <Typography
          type="bodyRegular16"
          classes="text-bold text-base"
          color={textBlack ? "black" : fontColor}
        >
          {title}
        </Typography>
      ) : (
        title ?? null
      )}
      {RightIcon && (
        <View className={RightIcon && title ? "ml-1" : ""}>{RightIcon}</View>
      )}
    </TouchableOpacity>
  );
};
