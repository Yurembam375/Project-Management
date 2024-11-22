import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enterText, setEnterText] = useState('');

    function handleChange(event) {
        setEnterText(event.target.value);
    }
    function handleClick() {
        if (enterText.trim === '') {
            return;
        }
        onAdd(enterText);
        setEnterText("");
    }
    return (
        <div className="flex items-center gap-4">
            <input onChange={handleChange} value={enterText} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}