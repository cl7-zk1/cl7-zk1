import React from "react";
import { Offline, Online } from "react-detect-offline";

// React FC is FunctionComponent
const ReactDetectStatusBar: React.FC = () => {
  return (
    <React.Fragment>
      {/* React Detect Online Offline StatusBar */}
      <div>
        <Online>
          <p>✅ Online</p>
        </Online>
        <Offline>
          <p>❌ Disconnected. Please check your internet connection.</p>
        </Offline>
      </div>
    </React.Fragment>
  );
};

export default ReactDetectStatusBar;
