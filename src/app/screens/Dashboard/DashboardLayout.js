import { ArrowDownRight } from "react-feather";
import RGL, { WidthProvider } from "react-grid-layout";
import DashboardPanel from "./DashboardPanel";
import styles from "./Dashboard.module.scss";
import { NUMBER_OF_COLUMNS } from "../../../constants";

const ReactGridLayout = WidthProvider(RGL);

const DashboardLayout = ({
  client,
  isCommenting,
  layout,
  name,
  panelsById,
}) => {

  return (
    <div>
      <ReactGridLayout
        cols={NUMBER_OF_COLUMNS}
        draggableHandle={`.${styles.panelHeaderLeft}`}
        items={layout.length}
        layout={layout}
        resizeHandle={
          <div
            className={`${styles.panelFooterButton} ${styles.reactResizableHandle} react-resizable-handle`}
            data-velt-sync-access="true"
          >
            <ArrowDownRight size={14} />
          </div>
        }
        rowHeight={30}
      >
        {layout
          .filter((item) => panelsById[item.i])
          .map((item, i) => (
            <div key={item.i}>
              <DashboardPanel
                client={client}
                index={i}
                isCommenting={isCommenting}
                name={name}
                panelId={item.i}
                panel={panelsById[item.i]}
                title={item.i}
              />
            </div>
          ))}
      </ReactGridLayout>
    </div>
  );
};

export default DashboardLayout;
