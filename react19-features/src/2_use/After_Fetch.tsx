import { Suspense, use } from "react";

const fetchPerson = async () => {
  // step 1: create fetch data function
  const response = await fetch("https://swapi.dev/api/people/1");
  if (!response.ok) {
    throw new Error("Failed to fetch person");
  }
  return response.json();
};

const personPromise = fetchPerson(); // step 2: reference the function

const Person = () => {
  const person = use(personPromise); // step 3: consume the promise
  return <p>{person.name}</p>;
};

const After = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      {/* step 4: wrap the component with Suspense */}
      <Person /> {/* step 5: render the component */}
    </Suspense>
  );
};

export default After;

/*

use is a Multi-purpose hook to load resources asynchronously
resolves promises and context
no more useContext for reading context
no more useEffect for data fetching

*/
