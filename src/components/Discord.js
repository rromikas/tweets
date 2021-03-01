import React, { useEffect, useState, useRef } from "react";
import SimpleBar from "simplebar-react";
import UserPhoto from "assets/Photo.png";
import { SizeMe } from "react-sizeme";
import Select from "@material-ui/core/Select";
import moment from "moment";
import Modal from "@material-ui/core/Modal";
import DiscordTaskForm from "components/DiscordTaskForm";
import ButtonBase from "@material-ui/core/ButtonBase";

const Button = ({ primary = true, ...rest }) => {
  return (
    <ButtonBase
      {...rest}
      className={`outline-none py-.05 px-4 select-none rounded font-bold ${
        primary ? "bg-blue-500 hover:bg-blue-501" : "bg-red-500 hover:bg-red-501"
      }  transition cursor-pointer`}
    ></ButtonBase>
  );
};

const Discord = () => {
  const users = [
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
    { user_photo: UserPhoto },
  ];

  const [channels, setChannels] = useState([
    {
      category: "text",
      channel: "General",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello everyone, do you see messages?",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yes, I see.", date: new Date() },
        { user_photo: UserPhoto, message: "Okay, great.", date: new Date() },
      ],
    },
    {
      category: "text",
      channel: "Football",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
        {
          user_photo: UserPhoto,
          message: "Hello, John, whats up?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "All good! Have you seen how psg made barce 4 - 1???",
          date: new Date(),
        },
        { user_photo: UserPhoto, message: "Yeah, lol. Xavi for a couch.", date: new Date() },
      ],
    },
    {
      category: "voice",
      channel: "Voice",
      messages: [
        {
          user_photo: UserPhoto,
          message: "Hello, are monkeys smart?",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "I don't know, but I surely know they are smarter than you...",
          date: new Date(),
        },
        {
          user_photo: UserPhoto,
          message: "Hahaha. And than you too... ",
          date: new Date(),
        },
      ],
    },
  ]);

  const [currentChannel, setCurrentChannel] = useState({
    category: "text",
    channel: "General",
  });

  const [discordTaskFormOpened, setDiscordTaskFormOpened] = useState(false);
  const [tasks, setTasks] = useState([
    { channel: "General", category: "text", dashboard: "", keywords: "+cyber", baseUrl: "" },
    { channel: "General", category: "text", dashboard: "", keywords: "+cyber", baseUrl: "" },
    { channel: "General", category: "text", dashboard: "", keywords: "+cyber", baseUrl: "" },
  ]);

  const [initialTaskIndex, setInitialTaskIndex] = useState(-1);

  const chatRef = useRef(null);

  useEffect(() => {
    const scrollChatToBottom = () => {
      setTimeout(() => {
        if (chatRef.current) {
          const chat = chatRef.current.getScrollElement();
          chat.scrollTop = 1000;
        } else {
          scrollChatToBottom();
        }
      }, 100);
    };

    scrollChatToBottom();
  }, [currentChannel]);

  return (
    <>
      <Modal
        open={discordTaskFormOpened}
        onClose={() => setDiscordTaskFormOpened(false)}
        hideBackdrop
      >
        <DiscordTaskForm
          initialTask={initialTaskIndex > -1 ? tasks[initialTaskIndex] : null}
          currentChannel={currentChannel}
          onClose={() => {
            setDiscordTaskFormOpened(false);
            setInitialTaskIndex(-1);
          }}
          onAddTask={(values) => {
            setTasks((prev) => prev.concat([values]));
          }}
          onEdit={(values) => {
            setTasks((prev) => {
              let arr = [...prev];
              arr[initialTaskIndex] = values;
              return arr;
            });
          }}
        ></DiscordTaskForm>
      </Modal>
      <div className="w-full h-full flex flex-col text-white font-bold">
        <div className="text-center mb-2 font-bold">Discord</div>
        <div className="flex-grow h-0 bg-blue-700 mx-6 mb-6 rounded overflow-hidden">
          <div className="flex h-full">
            <SimpleBar className="w-24 flex-shrink-0 lg:mr-4">
              <div className="bg-blue-900 px-2.5 py-4">
                {users.map((u, i) => (
                  <div
                    className="bg-center bg-cover w-16 h-16 mx-auto mb-2"
                    style={{ backgroundImage: `url(${u.user_photo})` }}
                  ></div>
                ))}
              </div>
            </SimpleBar>
            <SimpleBar className="w-48 bg-blue-900 flex-shrink-0 py-3 hidden lg:block">
              <div className="mb-2 text-gray-300">- Text Channels</div>
              <div className="mb-4 pl-2">
                {channels
                  .filter((x) => x.category === "text")
                  .map((ch, i) => (
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setCurrentChannel((prev) =>
                          Object.assign({}, prev, { category: ch.category, channel: ch.channel })
                        )
                      }
                      key={`text-channel-${i}`}
                    >
                      #{ch.channel}
                    </div>
                  ))}
              </div>
              <div className="mb-2 text-gray-300">- Voice Channels</div>
              <div className="mb-4 pl-2">
                {channels
                  .filter((x) => x.category === "voice")
                  .map((ch, i) => (
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setCurrentChannel((prev) =>
                          Object.assign({}, prev, { category: "voice", channel: ch.channel })
                        )
                      }
                      key={`voice-channel-${i}`}
                    >
                      #{ch.channel}
                    </div>
                  ))}
              </div>
            </SimpleBar>
            <div className="flex-grow flex flex-col pt-2">
              <SizeMe monitorHeight>
                {({ size }) => {
                  return (
                    <SimpleBar className="flex-grow h-0 px-3">
                      <div className="justify-between flex mb-2">
                        <div>
                          <Select
                            className="inline-flex lg:hidden"
                            disableUnderline
                            native
                            id="grouped-native-select"
                            classes={{
                              root:
                                "py-0.5 bg-blue-500 px-3 rounded text-white font-jost capitalize font-semibold",
                            }}
                            onChange={(e) => {
                              setCurrentChannel(JSON.parse(e.target.value));
                            }}
                          >
                            <optgroup label="Text Channels" className="text-black text-sm">
                              {channels
                                .filter((x) => x.category === "text")
                                .map((ch, i) => (
                                  <option
                                    key={`text-ch-${i}`}
                                    value={JSON.stringify({
                                      category: "text",
                                      channel: ch.channel,
                                    })}
                                  >
                                    #{ch.channel}
                                  </option>
                                ))}
                            </optgroup>
                            <optgroup label="Voice Channels" className="text-black text-sm">
                              {channels
                                .filter((x) => x.category === "voice")
                                .map((ch, i) => (
                                  <option
                                    key={`voice-ch-${i}`}
                                    value={JSON.stringify({
                                      category: "voice",
                                      channel: ch.channel,
                                    })}
                                  >
                                    #{ch.channel}
                                  </option>
                                ))}
                            </optgroup>
                          </Select>
                        </div>
                        <div className="flex">
                          <div className="mr-2">
                            <Button
                              onClick={() => {
                                setChannels((prev) => {
                                  let arr = [...prev];
                                  arr.find(
                                    (x) =>
                                      x.channel === currentChannel.channel &&
                                      x.category === currentChannel.category
                                  ).messages = [];
                                  return arr;
                                });
                              }}
                            >
                              Clear
                            </Button>
                          </div>
                          <Button primary={false}>Close</Button>
                        </div>
                      </div>
                      <SimpleBar
                        className="bg-blue-900 rounded"
                        ref={chatRef}
                        style={{ height: size.height - 122 }}
                      >
                        <div
                          style={{ height: size.height - 122 }}
                          className="flex items-end flex-wrap pt-3"
                        >
                          <div className="px-3 w-full">
                            {channels
                              .find(
                                (x) =>
                                  x.category === currentChannel.category &&
                                  x.channel === currentChannel.channel
                              )
                              .messages.map((m, i) => (
                                <div
                                  className="flex items-center justify-between mb-3"
                                  key={`message-${i}`}
                                >
                                  <div className="flex items-center mr-3">
                                    <div
                                      className="bg-center bg-cover w-16 h-16 mr-2 flex-none"
                                      style={{ backgroundImage: `url(${m.user_photo})` }}
                                    ></div>
                                    <div>
                                      <div>{m.message}</div>
                                      <div className="text-xs font-semibold text-gray-400 block xl:hidden whitespace-nowrap">
                                        {moment(m.date).format("DD/MM/YYYY, hh:mm:ss")}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-gray-400 hidden xl:block whitespace-nowrap">
                                    {moment(m.date).format("DD/MM/YYYY, hh:mm:ss")}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </SimpleBar>
                      <SimpleBar className="mt-3" style={{ height: 400 }}>
                        <div className="bg-blue-900 rounded-t p-3" style={{ minHeight: 400 }}>
                          <div className="flex justify-between mb-3">
                            <div>#{currentChannel.channel}</div>
                            <Button onClick={() => setDiscordTaskFormOpened(true)}>Create</Button>
                          </div>
                          {tasks
                            .filter(
                              (x) =>
                                x.category === currentChannel.category &&
                                x.channel === currentChannel.channel
                            )
                            .map((x, i) => (
                              <div className="flex mb-2">
                                <div className="w-2/5 flex-shrink">#{x.channel}</div>
                                <div className="w-2/5 flex-shrink">{x.keywords}</div>
                                <div className="flex-grow flex justify-end">
                                  <div className="mr-2">
                                    <Button
                                      onClick={() => {
                                        setInitialTaskIndex(i);
                                        setDiscordTaskFormOpened(true);
                                      }}
                                    >
                                      Edit
                                    </Button>
                                  </div>
                                  <Button primary={false}>Stop</Button>
                                </div>
                              </div>
                            ))}
                        </div>
                      </SimpleBar>
                    </SimpleBar>
                  );
                }}
              </SizeMe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discord;
