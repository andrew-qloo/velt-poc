import React, { useEffect, useState } from "react";
import { useVeltClient } from "@veltdev/react";
import DashboardLoader from "./DashboardLoader";

const DashboardVelt = ({ dashboardId, dashboardsRequest, name }) => {
  const [isReady, setIsReady] = useState(false);
  const { client } = useVeltClient();

  useEffect(() => {
    const init = async () => {
      if (client && !isReady) {
        const user = {
          userId: name,
          name,
          email: `${name}@qloo.com`,
        };

        await client.identify(user);
        client.setDocumentId(dashboardId);
        setIsReady(true);
      }
    };

    init();
  }, [client]);

  return client && isReady ? (
    <DashboardLoader
      client={client}
      dashboardId={dashboardId}
      name={name}
    />
  ) : null;
};

export default DashboardVelt;
