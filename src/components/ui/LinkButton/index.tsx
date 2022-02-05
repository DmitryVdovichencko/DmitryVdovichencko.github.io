import React from "react";

interface LinkButtonProps {
  icon: React.ReactNode;
  href: string;
  title: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  href,
  title,
}: LinkButtonProps) => {
  return (
    <a href={href} target="_blank">
      <button className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
        {icon}
        <span className="ml-2 mt-0.5">{title}</span>
      </button>
    </a>
  );
};

export default LinkButton;
