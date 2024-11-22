import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd,onCancel }) {
    const tittle = useRef();
    const description = useRef();
    const due = useRef();
    const modal = useRef();
    function handeSaveproject() {
        const enterTittle = tittle.current.value;
        const enterDescription = description.current.value;
        const enterDue = due.current.value;
        if (enterTittle.trim() === '' || enterDescription.trim() === '' || enterDue.trim() === '') {
            modal.current.open();
            return
        }
        onAdd({
            tittle: enterTittle,
            description: enterDescription,
            due: enterDue

        });

    }


    return (
        <>
            {/* <Modal ref={modal} buttonCption='Okay' >
                <h2>Invalid Input</h2>
                <p>Opps Invalid</p>
            </Modal> */}
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-950 hover:text-stone-500">Cancel</button></li>
                    <li><button
                        onClick={handeSaveproject}
                        className="px-6 py-3 rounded-md bg-stone-950 text-stone-50 hover:bg-stone-700 hover:text-stone-400">Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={tittle} label="Tittle" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={due} label="Due Date" />
                </div>
            </div>
        </>
    )
}