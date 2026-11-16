import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: { size: { default: "", icon: "" } },
  defaultVariants: { size: "default" },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, size, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ size }), className)} {...props} />;
}
