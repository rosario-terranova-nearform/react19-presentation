import { useState, useEffect } from "react";

const Before = () => {
  const [person, setPerson] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1") // step 1: fetch data
      .then((response) => response.json())
      .then((data) => {
        setPerson(data); // step 2: store data in a state
        setLoading(false); // step 3: update another state for handling loading
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!person) return <div>No data found</div>;

  return <div>Name: {person.name}</div>;
};

export default Before;
