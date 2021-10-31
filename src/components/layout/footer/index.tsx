import * as React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row flex-wrap w-full justify-center items-end p-4">
			<div className="mx-2">
      <a href="https://github.com/DmitryVdovichencko">
        <AiOutlineGithub size="1.5em" />{" "}
      </a>
			</div>
			<div className="mx-2">
      <a href="https://twitter.com/Dimetrio89">
        <AiOutlineTwitter size="1.5em" />
      </a>
			</div>
			<div className="mx-2">
      <a href="https://twitter.com/Dimetrio89">
        <AiFillLinkedin size="1.5em" />
      </a>
			</div>
    </footer>
  );
};

export default Footer;
