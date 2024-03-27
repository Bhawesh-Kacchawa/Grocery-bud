import { useState } from "react";

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newItemName) {
            return;
        }
        addItem(newItemName);
        setNewItemName('');
        // console.log(addItem(newItemName));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery bud</h4>
            <input type="text" className="form-input" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
            <button type="submit" className="btn">Add Item</button>
        </form>
    )
}

export default Form;
