import { createContext, use } from "react";

const UserContext = createContext(""); // step 1: create a context

const User = () => {
  const user = use(UserContext); // step 3: consume the context
  return <div>{user}</div>;
};

const Before = () => {
  return (
    <UserContext.Provider value="John">
      {/* step 2: provide a value */}
      <User />
    </UserContext.Provider>
  );
};

export default Before;
