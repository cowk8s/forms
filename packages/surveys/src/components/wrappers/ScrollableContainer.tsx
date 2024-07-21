import { JSX } from "preact/jsx-runtime";

interface ScrollableContainerProps {
  children: JSX.Element;
}

export const ScrollableContainer = ({ children }: ScrollableContainerProps) => {
  return (
    <div className="fb-relative">
      <div>
        {children}
      </div>
    </div>
  );
};
