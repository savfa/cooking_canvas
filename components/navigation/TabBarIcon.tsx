// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Octicons from "@expo/vector-icons/Octicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Octicons>["name"]>) {
  return <Octicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
