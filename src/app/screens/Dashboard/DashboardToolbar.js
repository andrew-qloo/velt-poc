import { Button, Modal, Sheet } from "@/components";
import { useToggle } from "@/hooks";
import {
  VeltCommentTool,
  VeltCommentsSidebar,
  VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";
import styles from "./Dashboard.module.scss";

const DashboardToolbar = ({
  commentsState,
  dashboardId,
  isCommentingToggle,
  name,
  usersState,
}) => {

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
        </div>
        <div className={styles.toolbarRight}>
          <div className={styles.toolbarItem}>
            <VeltPresence
              flockMode={true}
            />
          </div>
          <div className={styles.toolbarItem}>
            <VeltCommentTool onCommentModeChange={isCommentingToggle.set} />
          </div>
          <div className={styles.toolbarItem}>
            <VeltSidebarButton />
          </div>
        </div>
      </div>
      <VeltCommentsSidebar />
    </>
  );
};

export default DashboardToolbar;
