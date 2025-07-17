import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, type = "button", ...rest }, ref) => (
    <button ref={ref} type={type} className={className} {...rest}>
      {children}
    </button>
  )
);

Button.displayName = "Button";
