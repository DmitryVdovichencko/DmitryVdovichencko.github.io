import * as React from "react";

interface CardContentProps {
  children?: React.ReactNode | null;
}

const CardContent = ({
  children = null,
}: CardContentProps): React.ReactElement => {
  return (
		<div className="flex-auto p-6">
      {children}
    </div>
  );
};

export default CardContent;