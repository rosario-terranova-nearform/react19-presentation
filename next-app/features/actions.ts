"use server";

import { revalidatePath } from "next/cache";

//The action attribute on <form> expects void-returning functions
export async function addItem(formData: FormData) {
  const item = formData.get("item")?.toString() || "";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // revalidatePath("/");
  console.log("Adding item:", item);
}

export async function addItemAndReturnIt(formData: FormData, throwErr = false) {
  const item = formData.get("item")?.toString() || "";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (throwErr) throw new Error("Error adding item");
  console.log("Adding item:", item);
  return item;
}
