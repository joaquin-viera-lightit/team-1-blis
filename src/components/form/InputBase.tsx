import React from "react";
import { TextInput, View } from "react-native";
import type { TextInputProps } from "react-native";

import classnames from "classnames";

import { Icon, isHeroIcon } from "../Icon";
import type { HeroIcons } from "../Icon";
import { FontTypes } from "../Typography";
import { Label } from "./Label";
import { Message } from "./Message";

export interface InputBaseProps extends TextInputProps {
  label?: string;
  message?: string;
  error?: string | boolean;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  icon?: HeroIcons | React.ReactNode;
  classes?: string;
}

export const InputBase: React.FC<InputBaseProps> = ({
  label,
  error = true,
  message,
  icon,
  classes,
  ...props
}) => {
  const IconComp =
    typeof icon === "string" && isHeroIcon(icon) ? (
      <Icon name={icon} classes="text-neutral-0.5" />
    ) : (
      icon
    );
  return (
    <View className="my-1">
      {!!label && <Label label={label} error={!!error} />}
      <View className="mt-1 flex-row items-center overflow-hidden rounded border border-neutral-0">
        {IconComp && <View className="pl-3.5">{IconComp}</View>}
        <TextInput
          {...props}
          className={classnames(
            "w-full p-3 text-black",
            FontTypes.bodyRegular,
            classes,
          )}
        />
      </View>
      <Message message={message} error={error} />
    </View>
  );
};
