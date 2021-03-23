import React from "react";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={`mb-auto overflow-auto`}>{children}</div>;
};
