import { useRequest } from "@/hooks";
import { useEffect } from "react";

import Dashboard from "./Dashboard";

const dashboard = {
  created_at: "2024-02-13T05:29:56.978226+00:00",
  layout: [
    {
      h: 12,
      i: "1",
      w: 3,
      x: 0,
      y: 0,
      minH: 2,
      moved: false,
      static: false,
    },
    {
      h: 21,
      i: "2",
      w: 3,
      x: 3,
      y: 0,
      minH: 2,
      moved: false,
      static: false,
    },
    {
      h: 15,
      i: "3",
      w: 3,
      x: 0,
      y: 12,
      minH: 2,
      moved: false,
      static: false,
    },
  ],
  comments: {
    "87ea36b5-ae81-4689-9865-f01227cd780f": {
      id: "87ea36b5-ae81-4689-9865-f01227cd780f",
      name: "load gravatar",
      text: " ccc",
      panelId: "2",
      createdAt: "2024-02-23T18:30:48.118Z",
    },
  },
  panels: {
    "1": {
      id: "1",
      params: {
        type: "table",
        ageSlider: 53,
      },
      createdAt: "2024-02-13T06:52:15.345Z",
    },
    "2": {
      id: "2",
      params: {
        type: "donut",
      },
      createdAt: "2024-02-13T20:22:37.135Z",
    },
    "3": {
      id: "3",
      params: {
        type: "line",
      },
      createdAt: "2024-03-26T14:30:29.776Z",
    },
  },
  base_query: {
    age: "35_and_younger",
    gender: "male",
    target:
      "POLYGON ((-65.1077143 32.2100812, -65.1232222 32.2749861, -65.1011204 32.3829851, -65.0599375 32.4387285, -65.0291918 32.4633471, -64.9259484 32.5147199, -64.7948708 32.5638944, -64.7297384 32.5859544, -64.6305832 32.5879734, -64.5235102 32.5455536, -64.4465259 32.4737713, -64.4133707 32.3960326, -64.4112283 32.3381144, -64.4199048 32.2992949, -64.4581158 32.2322669, -64.4863296 32.2043054, -64.6629474 32.0970677, -64.7758895 32.0528207, -64.8629693 32.0475226, -64.9275398 32.055428, -65.0131806 32.0932887, -65.0830717 32.1607965, -65.1077143 32.2100812))",
  },
  name: "Baha Men",
  id: 2,
  modified_at: "2024-04-05T01:43:49.365228+00:00",
  deleted_at: null,
};

const DashboardLoader = ({ client, dashboardId, dashboardsRequest, name }) => {
  return (
    <Dashboard
      client={client}
      dashboard={dashboard}
      dashboardId={dashboardId}
      name={name}
    />
  );
};

export default DashboardLoader;
