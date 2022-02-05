import * as React from "react";

interface CardDescriptionProps {
  children?: React.ReactNode | string | null;
}

const CardDescription = ({
  children = null,
}: CardDescriptionProps): React.ReactElement => {
  return (
		<div className="w-full flex-none text-sm text-gray-500 font-light mt-2">
      {children}
    </div>
  );
};

export default CardDescription;