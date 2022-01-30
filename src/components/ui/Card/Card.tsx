import * as React from "react";
import { Link } from "gatsby";
import { getLinkType, LinkTypes } from "../../../utils/getLinkType";

interface CardProps {
  key: string;
  linkTo?: string;
  children?: React.ReactNode | null;
}

const Card = ({
  key,
  linkTo,
  children = null,
}: CardProps): React.ReactElement => {
  if (linkTo) {
    return (
      <Link key={key} to={linkTo}>
        <div className="flex shadow-lg  md:flex-row flex-col my-4 rounded-lg transition duration-500 ease-in-out hover:shadow-xl">
          {children}
        </div>
      </Link>
    );
  } else {
    return (
      <div
        key={key}
        className="flex shadow-lg  md:flex-row flex-col my-4 rounded-lg transition duration-500 ease-in-out hover:shadow-xl"
      >
        {children}
      </div>
    );
  }
};

export default Card;
