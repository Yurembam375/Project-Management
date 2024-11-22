
import NewTask from "./NewTask";

export default function Task({ onAdd, ondelete, task }) {

    return (
        <section>
            <h2 className="text-stone-700 text-xl mb-4 font-bold ">Task</h2>
            <NewTask onAdd={onAdd} />
            {task.length === 0 && (
                <p className="text-stone-800 mb-4">This Project does not have any task yet.</p>
            )}
            {task.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {task.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                            <button onClick={() => ondelete(task.id)} className="text-stone-700  hover:text-red-600">Clear</button>
                        </li>
                    ))}
                </ul>
            )}

        </section>
    )
}
//  import NewTask from "./NewTask";
// export default function Task({ onAdd, ondelete, task = [] }) {
//     return (
//       <section>
//         <h2 className="text-stone-700 text-xl mb-4 font-bold ">Task</h2>
//         <NewTask onAdd={onAdd} />
//         {task.length === 0 && (
//           <p className="text-stone-800 mb-4">This Project does not have any task yet.</p>
//         )}
//         {task.length > 0 && (
//           <ul className="p-4 mt-8 rounded-md bg-stone-100">
//             {task.map((taskItem) => (
//               <li key={taskItem.id} className="flex justify-between my-4">
//                 <span>{taskItem.text}</span>
//                 <button
//                   onClick={() => ondelete(taskItem.id)}
//                   className="text-stone-700  hover:text-red-600"
//                 >
//                   Clear
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </section>
//     );
//   }
