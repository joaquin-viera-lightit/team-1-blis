import React from "react";
import * as Mini from "react-native-heroicons/mini";
import * as OutLine from "react-native-heroicons/outline";
import * as Solid from "react-native-heroicons/solid";

import classnames from "classnames";

export type HeroIcons = keyof typeof Mini;
export const heroIconsList = Object.keys(Mini) as HeroIcons[];
export function isHeroIcon(str: string): str is HeroIcons {
  return heroIconsList.some((s) => s === str);
}

const VARIANTS = {
  Solid,
  OutLine,
  Mini,
} as const;

interface IconsProps {
  name: HeroIcons;
  size?: number;
  color?: string;
  variant?: keyof typeof VARIANTS;
  classes?: string;
}

export const Icon = ({
  name,
  size = 18,
  color = "text-neutral-2",
  variant = "Solid",
  classes = "",
}: IconsProps) => {
  const IconComponent = VARIANTS[variant][name];
  return <IconComponent size={size} className={classnames(color, classes)} />;
};
