import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type GoonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline";
    loading?: boolean;
    className?: string;
    onClick?: () => void;
}

export default function Goon({ variant, loading, className, onClick, ...props }: GoonProps) {
    return(
        <button onClick={onClick} className={clsx(buttonVariants({ variant }), className)} {...props}>
            {props.children}
        </button>
    )
}


const buttonVariants = cva(
    "px-4 py-2 inline-flex items-center justify-center rounded-md disabled:opacity-50 disabled:pinter-events-none text-base",
    {
        variants: {
            variant: {
                default: "bg-blue-500",
                outline: "border border-blue-500"
            }
        },
    }
)