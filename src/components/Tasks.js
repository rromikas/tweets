import React, { useEffect, useRef, useState } from "react";
import PlayIcon from "assets/Play.png";
import PauseIcon from "assets/Pause.png";
import EditIcon from "assets/Edit.png";
import TrashIcon from "assets/Trash.png";
import InfoIcon from "assets/Info.png";
import CreateIcon from "assets/Create.png";
import SimpleBar from "simplebar-react";
import Clock from "components/Clock";
import Modal from "@material-ui/core/Modal";
import TaskForm from "components/TaskForm";
import { dashboards } from "enumerators";

const Tasks = ({ profiles }) => {
  const [tasks, setTasks] = useState([
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "stopped",
      profileId: profiles[0].id,
      dasboard: dashboards[6],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: false,
      delay: "SS",
      status: "running",
      profileId: profiles[0].id,
      dasboard: dashboards[7],
      socialNetwork: "instagram",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: false,
      delay: "SS",
      status: "stopped",
      profileId: profiles[1].id,
      dasboard: dashboards[8],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "stopped",
      profileId: profiles[0].id,
      dasboard: dashboards[4],
      socialNetwork: "instagram",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: false,
      delay: "SS",
      status: "running",
      profileId: profiles[1].id,
      dasboard: dashboards[1],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "stopped",
      profileId: profiles[0].id,
      dasboard: dashboards[0],
      socialNetwork: "instagram",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: false,
      delay: "SS",
      status: "running",
      profileId: profiles[1].id,
      dasboard: dashboards[6],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "stopped",
      profileId: profiles[0].id,
      dasboard: dashboards[5],
      socialNetwork: "instagram",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "running",
      profileId: profiles[1].id,
      dasboard: dashboards[2],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: false,
      delay: "SS",
      status: "stopped",
      profileId: profiles[0].id,
      dasboard: dashboards[1],
      socialNetwork: "instagram",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "stopped",
      profileId: profiles[1].id,
      dasboard: dashboards[3],
      socialNetwork: "twitter",
    },
    {
      username: "lushythedev",
      privateAccMode: false,
      baseUrl: "",
      retweet: true,
      delay: "SS",
      status: "running",
      profileId: profiles[0].id,
      dasboard: dashboards[4],
      socialNetwork: "twitter",
    },
  ]);

  const [taskFormOpened, setTaskFormOpened] = useState(false);

  const bodyRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerScrollbar = headerRef.current.getScrollElement();
    bodyRef.current.getScrollElement().onscroll = (e) => {
      headerScrollbar.scrollLeft = e.target.scrollLeft;
    };
  }, []);

  const onPlay = (index) => () => {
    setTasks((prev) => {
      let arr = [...prev];
      arr[index].status = "running";
      return arr;
    });
  };

  const onPause = (index) => () => {
    setTasks((prev) => {
      let arr = [...prev];
      arr[index].status = "stopped";
      return arr;
    });
  };

  const onEdit = (index) => () => {
    alert("implement edit");
  };

  const onDelete = (index) => () => {
    setTasks((prev) => {
      let arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  const onInfo = (index) => () => {
    alert("implement info");
  };

  const taskActions = [
    { icon: PlayIcon, onClick: (index) => onPlay(index) },
    { icon: PauseIcon, onClick: (index) => onPause(index) },
    { icon: EditIcon, onClick: (index) => onEdit(index) },
    { icon: TrashIcon, onClick: (index) => onDelete(index) },
    { icon: InfoIcon, onClick: (index) => onInfo(index) },
  ];

  const generalActions = [
    { icon: CreateIcon, title: "Create Task", onClick: () => setTaskFormOpened(true) },
    {
      icon: PlayIcon,
      title: "Start All",
      onClick: () => setTasks((prev) => prev.map((x) => ({ ...x, status: "running" }))),
    },
    {
      icon: PauseIcon,
      title: "Stop All",
      onClick: () => setTasks((prev) => prev.map((x) => ({ ...x, status: "stopped" }))),
    },
    { icon: TrashIcon, title: "Clear Tasks", onClick: (index) => setTasks([]) },
  ];

  const addTask = (values) => {
    setTasks((prev) => prev.concat([values]));
  };

  return (
    <div className="w-full h-full flex flex-col text-white font-semibold">
      <div className="text-center mb-2 font-bold">Manage Your Tasks</div>
      <Modal
        classes={{ root: "bg-blue-500 bg-opacity-0" }}
        open={taskFormOpened}
        onClose={() => setTaskFormOpened(false)}
        hideBackdrop
      >
        <TaskForm
          onClose={() => setTaskFormOpened(false)}
          profiles={profiles}
          addTask={addTask}
        ></TaskForm>
      </Modal>
      <SimpleBar
        ref={headerRef}
        className="w-full px-5"
        classNames={{ scrollbar: "opacity-0", track: "opacity-0" }}
      >
        <div className="flex" style={{ minWidth: 700 }}>
          <div className="flex-grow flex">
            <div className="w-3/12 text-center">User</div>
            <div className="w-3/12 text-center">Retweet</div>
            <div className="w-3/12 text-center">Delay</div>
            <div className="w-3/12 text-center">Status</div>
          </div>
          <div className="w-48 text-center">Manage</div>
        </div>
      </SimpleBar>
      <SimpleBar ref={bodyRef} className="flex-grow h-0 ml-5 mr-1 mb-4 pr-4">
        {tasks.map((task, i) => (
          <div style={{ minWidth: 700 }} key={`task-${i}`}>
            <div className="flex bg-blue-700 mb-2 rounded py-2" key={`task-${i}`}>
              <div className="flex flex-grow text-center">
                <div className="w-3/12">{task.username}</div>
                <div
                  className={`${task.retweet ? "text-green" : "text-red-500"} capitalize w-3/12`}
                >
                  {task.retweet.toString()}
                </div>
                <div className="w-3/12">{task.delay}</div>
                <div
                  className={`${
                    task.status === "running" ? "text-green" : "text-red-500"
                  } capitalize w-3/12`}
                >
                  {task.status}
                </div>
              </div>
              <div className="flex w-48 justify-center select-none">
                {taskActions.map((action, j) => (
                  <div
                    key={`task-${0}-action-${j}`}
                    onClick={action.onClick(i)}
                    className="rounded w-7 h-7 p-1.5 active:bg-blue-800 bg-blue-800 active hover:bg-blue-900 hover:scale-105 transform cursor-pointer transition-all flex items-center justify-center mr-2"
                  >
                    <img className="h-auto max-h-4 max-w-4 w-auto" src={action.icon}></img>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </SimpleBar>
      <SimpleBar className="pb-4">
        <div style={{ minWidth: 870 }} className="flex items-center px-5">
          <div className="flex select-none font-semibold text-sm">
            {generalActions.map((action, i) => (
              <div
                onClick={action.onClick}
                key={`bottom-panel-btn-${i}`}
                className="active:bg-blue-700 mr-2 bg-blue-700 hover:bg-blue-600 rounded-2xl px-4 py-3 transition cursor-pointer flex items-center"
              >
                <img src={action.icon} className="mr-3 max-w-4 max-h-4 h-auto w-auto"></img>
                <div className="whitespace-nowrap">{action.title}</div>
              </div>
            ))}
          </div>
          <div className="flex-grow">
            <Clock></Clock>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Tasks;
