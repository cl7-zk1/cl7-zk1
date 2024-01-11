import React, { useEffect } from "react";

// Higher Order Component
const HOC = (WrappedComponent: React.ComponentType<React.Component>) => {
  const WithLogger: React.FC<any> = (props) => {
    // Component didMount and didUnmount method
    useEffect(() => {
      // Log data on component mount
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        // Log data on component unmount
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []); 

    // Component didUpdate
    useEffect(() => {
      // Log data on component update
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    // Wrap and return new component
    return <WrappedComponent {...props} />;
  };

  // Display the Component name
  WithLogger.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  // Return logger
  return WithLogger;
};

export default HOC;
