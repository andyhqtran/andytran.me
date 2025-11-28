import ReactFrame from "react-frame-component";

export const Frame = () => {
  return (
    <ReactFrame
      className="h-full w-full"
      initialContent='<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"></script></head><body><div></div></body></html>'
    >
      <h1 className="bg-slate-1 text-sm">Frame</h1>
    </ReactFrame>
  );
};
