import { ChangeEvent, FC } from "react";

interface IProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
    className?: string
}

export const Input: FC<IProps> = ({value, onChange, type, placeholder, className}) => {
    return (
        <input className={className} type={type} onChange={onChange} value={value} placeholder={placeholder}/>
    )
}

