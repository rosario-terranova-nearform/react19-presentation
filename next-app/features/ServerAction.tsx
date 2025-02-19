"use client";

import { addItem } from "./actions";

const ServerAction = () => {
  return (
    <div>
      <h2>Server Actions Demo</h2>

      <form action={addItem}>
        <div>
          <label htmlFor="item">Add New Item</label>
          <input type="text" id="item" name="item" required />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ServerAction;
