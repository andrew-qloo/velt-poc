import clsx from "clsx";
import { LockerOverlay, Menu, Popover } from "@/components";
import { useToggle } from "@/hooks";
import React, { useEffect, useMemo } from "react";
import { getHash } from "@/utils";
import { VeltCommentBubble } from "@veltdev/react";
import DashboardPanelBody from "./DashboardPanelBody";
import styles from "./Dashboard.module.scss";

const DashboardPanel = ({
  client,
  commentsState,
  index,
  isCommenting,
  isEditingUser,
  lock,
  name,
  panelId,
  panel,
  releaseLock,
  setPanelParam,
  title,
}) => {
  const veltLocation = useMemo(() => {
    const location = {
      panelId,
      params: panel.params,
    };
    return {
      id: getHash(JSON.stringify(location)),
      locationName: `${panelId} - ${panel.params.type}`,
      ...location,
    };
  }, [panel.params, panelId]);

  useEffect(() => {
    client.setLocation(veltLocation, true);
  }, [veltLocation]);

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelHeaderLeft} data-velt-sync-access="true">
          {title}
        </div>
      </div>
      <div
        className={styles.panelBody}
        data-velt-location={JSON.stringify(veltLocation)}
        id={`dashboard__panel__body-${panelId}`}
      >
        <DashboardPanelBody type={panel.params.type} />
      </div>
    </div>
  );
};

export default DashboardPanel;
