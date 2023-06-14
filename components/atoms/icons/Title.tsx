import { FC } from "react";

interface IProps {
  className: string;
}

export const TitleIcon: FC<IProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#8a8a8a"
        d="M2 2.75A.75.75 0 012.75 2h10a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3.5H8.5v9H10a.75.75 0 010 1.5H5.5a.75.75 0 010-1.5H7v-9H3.5v.75a.75.75 0 01-1.5 0v-1.5z"
      />
    </svg>
  );
};
