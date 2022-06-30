import { ReactNode } from "react";
import classnames from "classnames";

// Styles
import Styles from "./PageLayout.module.scss";

interface PageLayoutProps {
  leftPanel?: ReactNode;
  centerPanel?: ReactNode;
  rightPanel?: ReactNode;
  leftPanelClass?: string;
  rightPanelClass?: string;
  centerPanelClass?: string;
}

const PageLayout = ({
  leftPanel,
  centerPanel,
  rightPanel,
  leftPanelClass,
  centerPanelClass,
  rightPanelClass,
}: PageLayoutProps) => {
  return (
    <div className="container">
      <div className={classnames("row", Styles.row)}>
        <div className={classnames("col", Styles.leftPanel, leftPanelClass)}>
          {leftPanel}
        </div>
        <div
          className={classnames("col", Styles.centerPanel, centerPanelClass)}
        >
          {centerPanel}
        </div>
        <div className={classnames("col", Styles.rightPanel, rightPanelClass)}>
          {rightPanel}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
