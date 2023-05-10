import React, { FC } from 'react';

interface IBadgeProps {
    className: string;
    text: string;
}

export const Badge: FC<IBadgeProps> = ({className, text}) => {
    return (
        <span className={className}>{text}</span>
    );
};

