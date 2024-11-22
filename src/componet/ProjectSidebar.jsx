import Button from './Button';

export default function ProjectsideBar({ onStartAddProject, project, onSelectProject, selected }) {
    return (
        <aside className="w-1/3 px-8 py-3 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-4">
                {project.map((project) => (
                    <li key={project.id}>
                        <button
                            className={`w-full text-left px-2 py-1 rounded-sm my-1 ${
                                selected === project.id
                                    ? 'text-stone-200 bg-stone-800'
                                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                            }`}
                            onClick={() => onSelectProject(project.id)} // Pass project ID to onSelectProject
                        >
                            {project.tittle}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
