import React, { useState, useEffect } from 'react';

// Props interface
interface StudentInformationPageProps {
  prop1: string;
  prop2: number;
}

// Component
const StudentInformationPage: React.FC<StudentInformationPageProps> = ({ prop1, prop2 }) => {
  // State hooks
  const [state1, setState1] = useState<string>(''); // Example of a string state
  const [state2, setState2] = useState<number>(0); // Example of a number state

  // Effect hook
  useEffect(() => {
    // Code to run on component mount or when state/props change
    // Example: fetch data, subscribe to events, etc.
    return () => {
      // Cleanup code (optional)
      // Example: unsubscribe from events, clean up resources, etc.
    };
  }, [prop1, prop2]); // Dependency array

  // Component JSX
  return (
    <div>
      {/* Render component content */}
      <h1>{prop1}</h1>
      <p>{prop2}</p>
      {/* Use state and handle events */}
      {/* <input
        type="text"
        value={state1}
        onChange={(e) => setState1(e.target.value)}
      />
      <button onClick={() => setState2(state2 + 1)}>Increment</button> */}
    </div>
  );
};

export default StudentInformationPage;