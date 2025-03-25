import clsx from 'clsx';
import React from 'react';

type YapProps = React.HTMLAttributes<HTMLHeadingElement> & {
    className?: string;
};

function Yap1({ className, ...props }: YapProps) {
    return(
        React.createElement('h1', { className: clsx({ className }), ...props })
    )
}

function Yap2({ className, ...props }: YapProps) {
    return(
        React.createElement('h2', { className: clsx({ className }), ...props })
    )
}

function Yap3({ className, ...props }: YapProps) {
    return(
        React.createElement('h3', { className: clsx({ className }), ...props })
    )
}

function Yap4({ className, ...props }: YapProps) {
    return(
        React.createElement('h4', { className: clsx({ className }), ...props })
    )
}

function Yap5({ className, ...props }: YapProps) {
    return(
        React.createElement('h5', { className: clsx({ className }), ...props })
    )
}

export { Yap1, Yap2, Yap3, Yap4, Yap5 };