import * as React from "react";

interface CardHeaderProps {
  title: string;
  children?: React.ReactChildren | null;
}

const CardHeader = ({
  title,
  children = null,
}: CardHeaderProps): React.ReactElement => {
  return (
    <>
      <h4 className="flex-auto text-xl font-semibold">{title}</h4>
      {children}
    </>
  );
};

export default CardHeader;
