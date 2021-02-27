import React from "react";
import { XAxis, YAxis, AreaChart } from "recharts";
import SimpleBar from "simplebar-react";
import { uuid } from "uuidv4";

const Analytics = () => {
  const keys = {
    "Kage AIO": new Array(8).fill(0).map((x) => uuid()),
    Koi: new Array(2).fill(0).map((x) => uuid()),
    Nebula: new Array(7).fill(0).map((x) => uuid()),
    "Phoenix AIO": new Array(4).fill(0).map((x) => uuid()),
    TweetNinja: new Array(1).fill(0).map((x) => uuid()),
    Viper: new Array(8).fill(0).map((x) => uuid()),
    ZonosLabs: new Array(8).fill(0).map((x) => uuid()),
    ActiveCollab: new Array(3).fill(0).map((x) => uuid()),
  };

  return (
    <div className="w-full h-full flex flex-col text-white font-bold">
      <div className="text-center mb-2 font-bold">Discord</div>
      <SimpleBar className="flex-grow h-0 px-5">
        <div className="mb-3">Key Vault</div>
        <div className="flex h-72 overflow-hidden">
          <SimpleBar className="w-1/3 bg-blue-900 p-4 rounded ">
            {Object.keys(keys).map((x, i) => (
              <div key={x} className="flex items-center mb-4">
                <div className="mr-2">{x}:</div>
                <div className="text-green mr-2">{`${keys[x].length} Keys`}</div>
                <div className="text-xs bg-blue-500 rounded-xl px-3 py-0.5">View All Keys</div>
              </div>
            ))}
          </SimpleBar>
          <div className="w-2/3"></div>
        </div>
        <div className="flex flex-wrap justify-center"></div>
        <div></div>
      </SimpleBar>
    </div>
  );
};

export default Analytics;
