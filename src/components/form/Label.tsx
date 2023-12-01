import React from "react";
import type { FC, ReactNode } from "react";
import { View } from "react-native";

import classnames from "classnames";

import { Typography } from "../Typography";
import type { TypographyProps } from "../Typography";

export interface LabelProps extends Omit<TypographyProps, "children"> {
  label: ReactNode;
  error: boolean;
  containerClassName?: string;
  classes?: string;
}

export const Label: FC<LabelProps> = ({
  label,
  error,
  containerClassName,
  classes,
  ...props
}) => (
  <View className={classnames("flex pb-1", containerClassName)}>
    {typeof label !== "string" ? (
      label
    ) : (
      <Typography
        type="bodySemiBold"
        {...props}
        classes={classnames("m-0 mr-3 text-lg", classes, {
          "text-error": error,
        })}
      >
        {label}
      </Typography>
    )}
  </View>
);
