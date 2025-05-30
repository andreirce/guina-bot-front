import React from 'react';
import { button, ButtonVariants } from './button.component.style';

interface ButtonProps extends ButtonVariants {
    children: React.ReactNode;
}

function Button({
    children,
    disabled,
    variant = 'primary',
}: ButtonProps) {
    const className = button({ variant, disabled });

    return (
        <button type='button' className={className} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
