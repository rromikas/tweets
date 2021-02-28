import React from "react";
import Toolbar from "components/Toolbar";

const ImageViewer = ({ onClose }) => {
  return (
    <div
      className="w-full h-full flex text-white font-bold bg-blue-900 bg-opacity-40"
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="max-w-lg w-full m-auto relative rounded-xl flex flex-col bg-blue-900"
        style={{ height: 430 }}
      >
        <div className="absolute top-3 right-3">
          <Toolbar onClose={onClose}></Toolbar>
        </div>
        <div className="text-center py-1 text-lg">Images Appear Here Once Detected</div>
        <div className="flex-grow rounded-2xl bg-blue-700 mx-8 mb-8 mt-3"></div>
      </div>
    </div>
  );
};

export default ImageViewer;
