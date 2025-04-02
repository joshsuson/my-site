import * as React from "react";
import { createLink } from "@tanstack/react-router";
import type { LinkComponent } from "@tanstack/react-router";
import type { ComponentType } from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  color?: string;
  icon?: ComponentType<{ className: string }>;
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { text, color, icon: Icon, ...rest } = props;
    return (
      <a
        ref={ref}
        {...rest}
        className={`flex gap-2 items-center uppercase tracking-wide text-lg ${color}`}
      >
        {Icon && (
          <span>
            <Icon className="size-6" />
          </span>
        )}
        {text}
      </a>
    );
  },
);

BasicLinkComponent.displayName = "BasicLinkComponent";

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const NavLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={"intent"} {...props} />;
};
