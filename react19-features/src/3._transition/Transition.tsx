import { useState, useTransition } from "react";

const Transition = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState<string[]>(
    Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update input immediately
    setSearchQuery(value);

    // Wrap slow state update in startTransition
    startTransition(() => {
      const filtered = Array.from(
        { length: 10000 },
        (_, i) => `Item ${i + 1}`
      ).filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setItems(filtered);
    });
  };

  return (
    <div className="p-4">
      <h2>Search Example with useTransition</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 mb-4"
        placeholder="Search items..."
      />

      {isPending && <div>Loading...</div>}

      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transition;
