import React from "react";

const DiscordAuth = ({ onLogin }) => {
  return (
    <div className="w-full h-full flex flex-col text-white font-bold">
      <div className="text-center mb-2 font-bold">Discord</div>
      <div className="flex-grow mx-6 mb-6 rounded h-0 bg-blue-700 relative flex">
        <div className="rounded transition cursor-pointer absolute right-4 top-4 bg-blue-500 hover:bg-blue-501 active:bg-blue-502 px-20 py-2.5">
          Link Extension
        </div>
        <div className="m-auto">
          <div className="text-red-500 text-center mb-8">You're not logged in</div>
          <div
            onClick={onLogin}
            className=" rounded transition cursor-pointer bg-blue-500 hover:bg-blue-501 active:bg-blue-502 px-20 py-2.5"
          >
            Login via Discord
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordAuth;
