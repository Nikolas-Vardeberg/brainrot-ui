
import "tailwindcss";

import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

type GoonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline";
    className?: string;
}

export default function Goon({ variant, className, ...props }: GoonProps) {
    return(
        <button className={clsx(buttonVariants({ variant }), className)} {...props}>
            {props.children}
        </button>
    )
}

const buttonVariants = cva(
    "inline-flex items-center justify-center px-4 py-2 text-base disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                "default": "bg-black text-white",
                "outline": "border border-black text-black"
            }
        }
    }
)