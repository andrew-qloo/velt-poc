import React from "react";
import { useParams as useReactRouterParams } from "react-router-dom";
import DashboardVelt from "./DashboardVelt";

const dashboardId = 1;

const DashboardContainer = ({ name }) => {
  return (
    <div>
      <DashboardVelt
        dashboardId={String(dashboardId)}
        key={String(dashboardId)}
        name={name}
      />
    </div>
  );
};

export default DashboardContainer;
