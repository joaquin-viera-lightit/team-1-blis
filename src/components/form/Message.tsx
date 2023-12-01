import React from "react";

import classnames from "classnames";

import { Typography } from "../Typography";
import type { TypographyProps } from "../Typography";

export interface MessageProps extends Omit<TypographyProps, "children"> {
  classes?: string;
  message?: string;
  error?: string | boolean;
}

export const Message = ({
  message,
  error,
  classes,
  ...props
}: MessageProps) => (
  <Typography
    color="text-error-6"
    classes={classnames("block pt-1 pb-1 text-md opacity-80", classes, {
      "text-error": !!error,
    })}
    {...props}
  >
    {error === true ? "\u200b" : !error ? message ?? "\u200b" : error}
  </Typography>
);
