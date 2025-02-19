"use client";

import { addItem } from "./actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : "Add Item"}
    </button>
  );
};

const ServerActionFormStatus = () => {
  return (
    <div>
      <h2>Server Actions Demo</h2>

      <form action={addItem}>
        <div>
          <label htmlFor="item">Add New Item</label>
          <input type="text" id="item" name="item" required />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ServerActionFormStatus;
