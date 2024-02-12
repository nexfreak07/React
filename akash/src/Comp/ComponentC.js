import React from "react";
import ComponentD from "./ComponentD";

// Creating the context
export const UserContext = React.createContext();
export const ChannelConext = React.createContext();
export const SkillContext = React.createContext();

export default function ComponentC() {
  return (
    <SkillContext.Provider value={"React JS"}>
      <ChannelConext.Provider value={"Algorithmic Toolbox"}>
        <UserContext.Provider value={"Akash"}>
          <div>
            <ComponentD />
          </div>
        </UserContext.Provider>
      </ChannelConext.Provider>
    </SkillContext.Provider>
  );
}
