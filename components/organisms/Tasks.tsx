import { ReactElement, FC } from "react";
import { Paragraph } from "../atoms/typography/paragraph";

interface ITaskProps {
    icon: ReactElement;
    title: string;
}

export const Tasks: FC<ITaskProps> = (props) => {
    return (
        <div className="bg-[--color-bright] ">
            <div className="px-2">
                {props?.icon}
                <Paragraph text={props?.title} className=""/>
            </div>
            
        </div>
    );
};
