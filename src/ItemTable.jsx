import { useState } from "react";

// icons
import deleteIcon from "./assets/delete.svg";
import penIcon from "./assets/ink_pen.svg";
import flatwareIcon from "./assets/flatware.svg";
import electricIcon from "./assets/electrical_services.svg";

// map category name → icon
const categoryIcons = {
  Stationary: penIcon,
  Kitchenware: flatwareIcon,
  Appliance: electricIcon
};

function ItemTable({ items, addItem, deleteItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    addItem({
      name,
      category,
      price: Number(price)
    });

    // reset form
    setName("");
    setCategory("");
    setPrice("");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {/* FORM ROW (inside table as required) */}
        <tr>
          <td></td>

          <td>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>

          <td>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Stationary">Stationary</option>
              <option value="Kitchenware">Kitchenware</option>
              <option value="Appliance">Appliance</option>
            </select>
          </td>

          <td>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>

          <td>
            <button onClick={handleAddItem}>Add Item</button>
          </td>
        </tr>

        {/* DATA ROWS */}
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>

            <td>
              <img
                src={categoryIcons[item.category]}
                alt={item.category}
                width="20"
              />
            </td>

            <td>{item.price}</td>

            <td>
              <img
                src={deleteIcon}
                alt="delete"
                width="20"
                style={{ cursor: "pointer" }}
                onClick={() => deleteItem(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemTable;
