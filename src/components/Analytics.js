import React, { useState, useEffect } from "react";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import SimpleBar from "simplebar-react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import CardImage from "assets/Card.svg";
import { SizeMe } from "react-sizeme";
import ButtonBase from "@material-ui/core/ButtonBase";

const Button = ({ className = "", ...rest }) => {
  return (
    <ButtonBase
      {...rest}
      className={`${className} block font-bold outline-none capitalize w-20 text-sm text-center py-1 rounded bg-blue-500 mb-2 hover:bg-blue-501 active:bg-blue-502 transition cursor-pointer select-none`}
    ></ButtonBase>
  );
};

const data = ((startDate, endDate) => {
  var data = [];

  var currDate = moment(startDate).startOf("day");
  var lastDate = moment(endDate).startOf("day");

  while (currDate.add(1, "days").diff(lastDate) < 0) {
    data.push({ date: currDate.clone().toDate(), value: Math.floor(Math.random() * 100) + 1 });
  }

  return data;
})(moment().subtract(12, "months").toDate(), moment().toDate());

const Analytics = () => {
  const keys = [
    { title: "Kage AIO", keys: new Array(8).fill(0).map((x) => uuidv4()) },
    { title: "Koi", keys: new Array(2).fill(0).map((x) => uuidv4()) },
    { title: "Nebula", keys: new Array(7).fill(0).map((x) => uuidv4()) },
    { title: "Phoenix AIO", keys: new Array(4).fill(0).map((x) => uuidv4()) },
    { title: "TweetNinja", keys: new Array(1).fill(0).map((x) => uuidv4()) },
    { title: "Viper", keys: new Array(8).fill(0).map((x) => uuidv4()) },
    { title: "ZonosLabs", keys: new Array(8).fill(0).map((x) => uuidv4()) },
    { title: "ActiveCollab", keys: new Array(3).fill(0).map((x) => uuidv4()) },
  ];

  const [figures, setFigures] = useState([
    {
      title: "Checkouts",
      values: [
        { date: "26-02", value: 34 },
        { date: "27-02", value: 56 },
        { date: "28-02", value: 43 },
        { date: "01-03", value: 100 },
      ],
    },
    {
      title: "Failed Checkouts",
      values: [
        { date: "26-02", value: 55 },
        { date: "27-02", value: 3 },
        { date: "28-02", value: 16 },
        { date: "01-03", value: 66 },
      ],
    },
    {
      title: "Tweets Caught",
      values: [
        { date: "26-02", value: 34 },
        { date: "27-02", value: 32 },
        { date: "28-02", value: 10 },
        { date: "01-03", value: 95 },
      ],
    },
    {
      title: "Servers Joined",
      values: [
        { date: "26-02", value: 4 },
        { date: "27-02", value: 69 },
        { date: "28-02", value: 67 },
        { date: "01-03", value: 7 },
      ],
    },
  ]);

  const [cartToShowIndex, setCartToShowIndex] = useState(-1);

  const [chartData, setChartData] = useState([]);
  const [chartMode, setChartMode] = useState("week");

  useEffect(() => {
    console.log(data.slice(-7));
    switch (chartMode) {
      case "month":
        setChartData(data.filter((x, i) => i % 30 === 0).slice(-12));
        break;
      case "week":
        setChartData(data.slice(-7));
        break;
      case "all-time":
        setChartData(data.filter((x, i) => i % 120 === 0));
        break;
      default:
        break;
    }
  }, [chartMode]);

  const modes = ["week", "month", "all-time"];

  return (
    <div className="w-full h-full flex flex-col text-white font-bold">
      <div className="text-center mb-3 font-bold">Analytics</div>
      <SizeMe monitorHeight>
        {({ size }) => (
          <SimpleBar className="flex-grow h-0 px-5">
            <div style={{ height: size.height }} className="flex flex-col">
              <div className="mb-2">Key Vault</div>
              <div className="flex flex-wrap overflow-hidden flex-shrink-0">
                <div className="sm:w-1/3 md:w-full lg:w-1/3 w-full">
                  <SimpleBar className="bg-blue-900 p-4 rounded sm:mr-5 md:mr-0 lg:mr-5 h-80">
                    {keys.map((x, i) => (
                      <div key={x.title} className="flex flex-wrap items-center mb-6">
                        <div className="mr-2">{x.title}:</div>
                        <div className="text-green mr-2">{`${x.keys.length} Keys`}</div>
                        <div className="text-xs bg-blue-500 rounded-xl px-3 py-0.5">
                          View All Keys
                        </div>
                      </div>
                    ))}
                  </SimpleBar>
                  <div className="pt-4 mb-5">
                    <Button>Export</Button>
                  </div>
                </div>
                <div className="sm:w-2/3 md:w-full lg:w-2/3 w-full">
                  <div className="h-80 relative bg-blue-900 rounded pt-14 flex flex-col overflow-hidden mb-1">
                    <div className="absolute top-4 left-4 z-10">
                      {modes.map((x) => (
                        <Button
                          className="font-bold"
                          key={`mode-${x}`}
                          onClick={() => setChartMode(x)}
                        >
                          {x}
                        </Button>
                      ))}
                    </div>
                    <ResponsiveContainer width="100%">
                      <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4fff9e" />
                            <stop offset="95%" stopColor="#524eee" />
                          </linearGradient>
                        </defs>
                        <Area
                          type="basis"
                          dataKey="value"
                          stroke="none"
                          fillOpacity={1}
                          fill="url(#colorUv)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between mb-5">
                    {chartData.map((x, i) => (
                      <div key={`tick-${i}`}>
                        {chartMode === "week"
                          ? moment(x.date).format("ddd")
                          : chartMode === "month"
                          ? moment(x.date).format("MMM")
                          : moment(x.date).format("YYYY-MM")}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center pb-4 flex-grow items-center">
                {figures.map((x, i) => (
                  <div
                    onClick={() => setCartToShowIndex(cartToShowIndex === i ? -1 : i)}
                    key={`figure-${i}`}
                    className="transform hover:scale-105 transition select-none cursor-pointer rounded-xl flex-none mb-4 mr-4 bg-cover bg-center w-56 bg-opacity-50 p-3 relative"
                    style={{ backgroundImage: `url(${CardImage})` }}
                  >
                    {cartToShowIndex === i ? (
                      <div
                        style={{ transform: "translateX(-50%)" }}
                        className="absolute bottom-full left-1/2 right-0 w-72 h-60 pb-5"
                      >
                        <div className="bg-blue-900 px-7 pb-7 pt-10 rounded-lg h-full">
                          <ResponsiveContainer>
                            <BarChart data={x.values} margin={{ left: 0 }}>
                              <CartesianGrid
                                strokeWidth={4}
                                className="stroke-current text-blue-500 text-opacity-30"
                                vertical={false}
                              ></CartesianGrid>
                              <Bar dataKey="value" fill="#4fff9e" radius={[6, 6, 6, 6]} />
                              <YAxis
                                width={40}
                                tick={{ fill: "white", fontWeight: 600, fontSize: 14 }}
                                axisLine={false}
                                tickLine={false}
                              />
                              <XAxis
                                axisLine={false}
                                tickLine={false}
                                tickMargin={10}
                                dataKey="date"
                                tick={{ fill: "white", fontSize: 14, fontWeight: 600 }}
                              ></XAxis>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    ) : null}
                    <div className="pt-7 text-xl mb-1 text-center">{x.title}</div>
                    <div
                      className={`${
                        x.values[x.values.length - 1].value < 5 ? "text-red-500" : "text-green"
                      } text-4xl text-center`}
                    >
                      {x.values[x.values.length - 1].value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SimpleBar>
        )}
      </SizeMe>
    </div>
  );
};

export default Analytics;
