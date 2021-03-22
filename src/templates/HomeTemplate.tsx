import React from "react";
import { Route } from "react-router-dom";
const HomeLayout = (props: any) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};
interface routeComponent {
  Component: any;
  key: any;
  exact: any;
  path: any;
}
export const HomeTemplate: React.FC<routeComponent> = ({
  Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
