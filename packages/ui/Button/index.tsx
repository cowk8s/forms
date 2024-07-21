import { LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonBaseProps = {
  variant?: "highlight" | "primary" | "secondary" | "minimal" | "warn" | "alert" | "darkCTA";
  size?: "base" | "sm" | "lg" | "fab" | "icon";
  loading?: boolean;
  disabled?: boolean;

  shallow?: boolean;
};

type ButtonBasePropsWithTarget = ButtonBaseProps & { target?: string };

export type ButtonProps = ButtonBasePropsWithTarget &
  (
    | (Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "target"> & LinkProps)
    | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "target"> & { href?: never })
  );

export const Button: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ButtonProps> & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>
> = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(
  props: ButtonProps,
) {
  const {
    loading = false,

    shallow,
    ...passThroughProps
  } = props;
  // Buttons are **always** disabled if we're in a `loading` state
  const disabled = props.disabled || loading;

  // If pass an `href`-attr is passed it's `<a>`, otherwise it's a `<button />`
  const isLink = typeof props.href !== "undefined";
  const elementType = isLink ? "span" : "button";

  const element: any = React.createElement(
    elementType,
    {
      ...passThroughProps,
      disabled,
      ref: forwardRef,
    }
  )

  return (
    <></>
  )
})
