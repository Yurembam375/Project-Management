import { useState } from "react";
import NewProject from "./componet/NewProject";
import NoProjectSelected from "./componet/NoProjectSelected";
import ProjectsideBar from "./componet/ProjectSidebar";
import SelecteProject from "./componet/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjecId: undefined,
    project: [],
    task:[]
  });
  function handeleSelectPoject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectProjecId: id,
      };
    });
  }
  function handeleStartAddPoject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectProjecId: null,
      };
    });
  }
  function handleAddTask(text) {
    setProjectState(
      (prevState) => {
        const taskId = Math.random();
        const newTAsk = {
          text: text,
          projectId: prevState.selectProjecId,
          id: taskId
        };
        return {
          ...prevState,
          task: [newTAsk, ...prevState.task]
        };
      }
    );

  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjecId: undefined,
        task: prevState.task.filter(
          (task) => task.id !== id
        ),
      };
    });
  }

  function handeleCancleAddPoject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjecId: undefined,
      };
    });
  }
  function deletPoject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectProjecId: undefined,
        project: prevState.project.filter(
          (project) => project.id !== prevState.selectProjecId
        )
      };
    });
  }
  const selectedProject = projectState.project.find(project => project.id === projectState.selectProjecId)
  let content = <SelecteProject
    ondelete={deletPoject}
    project={selectedProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    task={projectState.task}
  />;
  if (projectState.selectProjecId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handeleCancleAddPoject} />
  } else if (projectState.selectProjecId === undefined) {
    content = <NoProjectSelected onStartAddProject={handeleStartAddPoject} />
  }
  function handleAddProject(projectData) {
    setProjectState(
      prevState => {
        const projectId = Math.random();
        const newProject = {

          ...projectData,
          id: projectId
        };
        return {
          ...prevState,
          selectProjecId: undefined,
          project: [...prevState.project, newProject]
        };
      }
    );
  }
  console.log(projectState)
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsideBar project={projectState.project}
        onStartAddProject={handeleStartAddPoject}
        onSelectProject={handeleSelectPoject}
        selected={projectState.selectProjecId}
      />
      {content}
    </main>
  );
}

export default App;
