"use client";

import clsx from "clsx";
import { QueryBuilder } from "@/components";
import { useToggle } from "@/hooks";
import React, { useEffect } from "react";
import { getHash } from "@/utils";
import { useUserEditorState, VeltComments, VeltCursor } from "@veltdev/react";

import DashboardLayout from "./DashboardLayout";
import DashboardToolbar from "./DashboardToolbar";
import "./index.scss";
import styles from "./Dashboard.module.scss";

const Dashboard = ({
  client,
  dashboard,
  dashboardId,
  name,
}) => {
  const isEditor = useUserEditorState();
  const isCommentingToggle = useToggle();

  useEffect(() => {
    const veltLocation = {};
    const id = JSON.stringify(veltLocation);

    client.setLocation(
      {
        id: getHash(id),
        locationName: id,
        ...veltLocation,
      },
      true
    );
  }, []);

  return (
    <>
      <div
        className={clsx({
          [styles.readOnly]: isEditor === false,
          [styles.isCommenting]: isCommentingToggle.value,
        })}
        id="dashboard"
      >
        <DashboardToolbar
          dashboardId={dashboardId}
          isCommentingToggle={isCommentingToggle}
          name={name}
        />
        <DashboardLayout
          client={client}
          isCommenting={isCommentingToggle.value}
          layout={dashboard.layout}
          name={name}
          panelsById={dashboard.panels}
        />
      </div>
      <VeltCursor />
      <VeltComments
        allowedElementClassNames={[styles.panelBody]}
        onCommentAdd={(event) => {
          console.log("event", event);
        }}
        status={false}
      />
    </>
  );
};

export default Dashboard;
