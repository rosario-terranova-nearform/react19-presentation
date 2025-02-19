"use client";

import { useActionState, useOptimistic } from "react";
import { addItemAndReturnIt } from "./actions";

const ServerActionOptimistic = () => {
  const [optmisticItem, setOptmisticItem] = useOptimistic("No item");

  const [state, submitAction, pending] = useActionState<string, FormData>(
    async (prevValue: string, formData: FormData) => {
      console.log("Adding item:", formData.get("item"));
      console.log("prevValue:", prevValue);
      setOptmisticItem(formData.get("item")?.toString() || "");
      try {
        // const itemAdded = await addItemAndReturnIt(formData);
        const itemAdded = await addItemAndReturnIt(formData, true);
        return itemAdded;
      } catch (error) {
        console.log("Error adding item:", error);
        return prevValue;
      }
    },
    ""
  );

  console.log("state:", state);

  return (
    <div>
      <h2>useOptimistic Demo</h2>
      <form action={submitAction}>
        <div>
          <label htmlFor="item">Add New Item</label>
          <input type="text" id="item" name="item" required />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {pending && <div>Loading...</div>}
      <div>Item added: {optmisticItem}</div>
    </div>
  );
};

export default ServerActionOptimistic;
