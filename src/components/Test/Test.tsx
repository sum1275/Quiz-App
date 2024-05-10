import { v4 as uuidv4 } from 'uuid';

const MyComponent = () => {
  const uniqueId = uuidv4().slice(0, 10);;

  return (
    <div>
      <h1>Unique ID: {uniqueId}</h1>
    </div>
  );
};

export default MyComponent;
