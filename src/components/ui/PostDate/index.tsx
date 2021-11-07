import React, { ComponentProps, FunctionComponent } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

interface PostDateProps extends ComponentProps<FunctionComponent> {
  date: string;
}

const PostDate = ({ date }: PostDateProps): React.ReactElement => {
  return (
    <div className="w-full flex flex-row text-sm text-gray-500">
      <AiOutlineCalendar size="18px" />
      <span className="ml-1 text-sm -mb-0.5">{date}</span>
    </div>
  );
};

export default PostDate;
