"use server";

export async function addItem(formData: FormData) {
  const item = formData.get("item")?.toString() || "";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Adding item:", item);
}
