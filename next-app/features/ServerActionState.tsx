"use client";

import { useActionState } from "react";
import { addItemAndReturnIt } from "./actions";

const ServerActionState = () => {
  const [state, submitAction, pending] = useActionState<string, FormData>(
    async (prevValue: string, formData: FormData) => {
      console.log("Adding item:", formData.get("item"));
      console.log("prevValue:", prevValue);
      const itemAdded = await addItemAndReturnIt(formData);
      return itemAdded;
    },
    ""
  );

  console.log("state:", state);

  return (
    <div>
      <h2>useActionState Demo</h2>
      <form action={submitAction}>
        <div>
          <label htmlFor="item">Add New Item</label>
          <input type="text" id="item" name="item" required />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {pending && <div>Loading...</div>}
      {state && <div>Item added: {state}</div>}
    </div>
  );
};

export default ServerActionState;
