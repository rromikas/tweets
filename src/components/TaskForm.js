import React from "react";
import Select from "@material-ui/core/Select";
import ArrowDown from "assets/ArrowDown.png";
import Checkbox from "components/Checkbox";
import { dashboards } from "enumerators";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "components/Button";

const IconComponent = () => {
  return (
    <div className="absolute right-3 w-4 top-0 bottom-0 my-auto h-7">
      <img alt="expand" src={ArrowDown}></img>
    </div>
  );
};

const TaskForm = ({ profiles, onClose, addTask }) => {
  const { values, handleSubmit, setFieldValue, handleChange, errors, submitCount } = useFormik({
    onSubmit: (values, { resetForm }) => {
      addTask(values);
      resetForm();
      onClose();
    },
    initialValues: {
      socialNetwork: "twitter",
      profileId: "",
      username: "",
      dashboard: "",
      baseUrl: "",
      retweet: true,
      privateAccMode: true,
      delay: "SS",
      status: "running",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Required"),
      profileId: Yup.string().required("Required"),
      dashboard: Yup.string().required("Required"),
      baseUrl: Yup.string().required("Required"),
    }),
  });

  return (
    <div className="w-full h-full flex bg-blue-900 bg-opacity-50" onMouseDown={onClose}>
      <form
        onSubmit={handleSubmit}
        className="text-white font-semibold m-auto bg-blue-900 rounded max-w-lg w-full px-16 py-6"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="text-center text-xl mb-7">
          Create A Task (<span className="capitalize">{values.socialNetwork}</span>)
        </div>
        <div className="flex justify-between mb-3">
          <Button onClick={() => setFieldValue("socialNetwork", "twitter")}>Twitter</Button>
          <Button onClick={() => setFieldValue("socialNetwork", "instagram")}>Instagram</Button>
        </div>
        <div className="flex justify-between mb-1">
          <div>Profile Name</div>
          <div className="text-red-500">
            {submitCount > 0 && errors.profileId ? errors.profileId : ""}
          </div>
        </div>
        <Select
          value={values.profileId}
          IconComponent={IconComponent}
          disableUnderline
          className="w-full mb-3"
          native
          classes={{
            root:
              "py-3.5 bg-blue-700 px-3 rounded-2xl text-white font-jost capitalize font-semibold",
          }}
          onChange={(e) => {
            setFieldValue("profileId", e.target.value);
          }}
        >
          <option value={""} className="text-blue-900"></option>
          {profiles.map((x, i) => (
            <option key={`text-ch-${i}`} value={x.id} className="text-blue-900">
              {x.profile_name}
            </option>
          ))}
        </Select>
        <div className="flex justify-between mb-1">
          <div>
            <span className="capitalize">{values.socialNetwork}</span> Username
          </div>
          <div className="text-red-500">
            {submitCount > 0 && errors.username ? errors.username : ""}
          </div>
        </div>
        <input
          spellCheck={false}
          type="text"
          value={values.username}
          name="username"
          onChange={handleChange}
          className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4 mb-3"
        ></input>
        <div className="flex justify-between mb-1">
          <div>Dashboard</div>
          <div className="text-red-500">
            {submitCount > 0 && errors.dashboard ? errors.dashboard : ""}
          </div>
        </div>
        <Select
          value={values.dashboard}
          IconComponent={IconComponent}
          disableUnderline
          className="w-full mb-3"
          native
          classes={{
            root:
              "py-3.5 bg-blue-700 px-3 rounded-2xl text-white font-jost capitalize font-semibold",
          }}
          onChange={(e) => {
            setFieldValue("dashboard", e.target.value);
          }}
        >
          <option value="" className="text-blue-900"></option>
          {dashboards.map((x, i) => (
            <option key={`text-ch-${i}`} value={x} className="text-blue-900">
              {x}
            </option>
          ))}
        </Select>
        {values.socialNetwork === "twitter" ? (
          <div className="flex flex-wrap justify-center mt-2">
            <div className="flex mr-2 items-center mb-3">
              <Checkbox
                checked={values.retweet}
                onClick={(prevVal) => setFieldValue("retweet", !prevVal)}
                className="mr-2"
              ></Checkbox>
              <div>Include Retweets</div>
            </div>
            <div className="flex items-center mb-3">
              <Checkbox
                checked={values.privateAccMode}
                onClick={(prevVal) => setFieldValue("privateAccMode", !prevVal)}
                className="mr-2"
              ></Checkbox>
              <div>Private Account Mode</div>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between mb-1">
          <div>Base URL</div>
          <div className="text-red-500">
            {submitCount > 0 && errors.baseUrl ? errors.baseUrl : ""}
          </div>
        </div>
        <input
          spellCheck={false}
          type="text"
          name="baseUrl"
          value={values.baseUrl}
          onChange={handleChange}
          className="bg-blue-700 mb-5 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4 mb-3"
        ></input>
        <div className="flex justify-center">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
