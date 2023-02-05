import { useState, useEffect } from "react";
const ContentLayout = ({ children, bgColor }) => {
  const [color, setColor] = useState(bgColor);

  useEffect(() => {
    bgColor === undefined ? setColor(`bg-white`) : setColor(bgColor);
  }, [bgColor]);
  return (
    <main
      className={`w-full h-screen flex flex-col justify-center items-center ${color}  `}
    >
      {children}
    </main>
  );
};

export default ContentLayout;
