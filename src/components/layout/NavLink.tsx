import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={(renderProps) =>
          cn(
            typeof className === "function" ? className(renderProps) : className,
            renderProps.isActive && "text-blue-600 font-semibold",
            renderProps.isPending && "opacity-70 animate-pulse"
          )
        }
      />
    );
  }
);

NavLink.displayName = "NavLink";
export { NavLink };
