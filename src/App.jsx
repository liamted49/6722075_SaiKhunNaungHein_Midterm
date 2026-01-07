import { useState } from "react";
import ItemTable from "./ItemTable";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [nextId, setNextId] = useState(1);

  const addItem = (item) => {
    if (!item.name.trim()) {
      setError("Item name must not be empty");
      return;
    }

    if (items.some(i => i.name.toLowerCase() === item.name.toLowerCase())) {
      setError("Item must not be duplicated");
      return;
    }

    if (!item.category) {
      setError("Please select a category");
      return;
    }

    if (item.price < 0) {
      setError("Price must not be less than 0");
      return;
    }

    setItems([...items, { ...item, id: nextId }]);
    setNextId(nextId + 1);
    setError("");
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h2>Item Management App</h2>
      <ItemTable items={items} addItem={addItem} deleteItem={deleteItem} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
