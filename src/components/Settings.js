import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import Checkbox from "components/Checkbox";

const Button = ({ primary = true, className = "", ...rest }) => {
  return (
    <div
      {...rest}
      className={`py-2 w-36 text-center select-none rounded-xl font-bold ${
        primary
          ? "bg-blue-500 hover:bg-blue-501 active:bg-blue-502"
          : "bg-red-500 hover:bg-red-501 active:bg-red-502"
      }  transition cursor-pointer ${className}`}
    ></div>
  );
};
const Settings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    link_opener: true,
    autocopy_password: true,
    automerge_password: true,
    force_chrome_browser: true,
    tweet_processing: true,
    paste_haste_scraper: true,
    staff_message: true,
    tweetdeck_spoofer: true,
  });

  const [discordWebhook, setDiscordWebhook] = useState("");
  const [twitterAccount, setTwitterAcount] = useState(null);
  const [customSound, setCustomSound] = useState(null);

  return (
    <div className="w-full h-full flex flex-col text-white font-bold">
      <div className="text-center mb-2">Settings</div>
      <SimpleBar className="flex-grow h-0 px-5 mb-5">
        <div className="flex flex-wrap">
          <div className="sm:w-1/3 md:w-full lg:w-1/3 w-full">
            <div className="mb-4">
              <div className="mb-1">General Settings</div>
              <div className="bg-blue-700 rounded px-3 py-2">
                {Object.keys(generalSettings).map((x, i) => (
                  <div
                    key={`general-setting-${i}`}
                    className="flex justify-between items-center mb-3"
                  >
                    <div className="capitalize">{x.split("_").join(" ")}</div>
                    <Checkbox
                      checked={generalSettings[x]}
                      onClick={(prevChecked) =>
                        setGeneralSettings((prev) => Object.assign({}, prev, { [x]: !prevChecked }))
                      }
                    ></Checkbox>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>Discord Auto Joiner</div>
              <div className="bg-blue-700 rounded px-3 py-6">
                <div className="flex justify-center flex-wrap mb-4">
                  <Button className="mx-2 mb-2">Login</Button>
                  <Button className="mx-2 mb-2">Enable</Button>
                </div>
                <div className="text-red-500 text-center">Not Logged In</div>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 md:w-full lg:w-2/3 w-full sm:pl-4">
            <div className="mb-3">
              <div className="mb-1">Discord Webhook</div>
              <div className="p-3 bg-blue-700 rounded">
                <input
                  spellCheck={false}
                  type="text"
                  className="w-full outline-none bg-blue-900 mb-3 py-1.5 px-4 rounded-xl font-bold"
                ></input>
                <div className="flex justify-center">
                  <Button className="mr-2">Save</Button>
                  <Button className="ml-2">Test</Button>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1">Twitter Account</div>
              <div className="p-3 bg-blue-700 rounded flex justify-center">
                <div>
                  <Button className="inline-block mb-2">Login</Button>
                  <div className="text-center text-red-500">Not Logged In</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1">Custom Sound</div>
              <div className="p-3 bg-blue-700 rounded flex justify-center">
                <Button className="mr-2">Set</Button>
                <Button className="ml-2">Test</Button>
              </div>
            </div>
            <div>
              <div className="mb-1">Account Modes (Twitter) and Discord Tokens</div>
              <div className="px-3 py-10 bg-blue-700 rounded flex justify-center">
                <Button className="mr-2">Add Keys</Button>
                <Button className="ml-2">Discord</Button>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Settings;
