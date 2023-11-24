import { useState, useEffect } from 'react';
import Task from './Task';
import { pqrQuantity } from '@/utilities/getTotalPqrs';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(Array);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pqrQuantity(); // Verifica si pqrQuantity() obtiene los datos correctamente
        console.log('Data from database:', data); // Asegúrate de que los datos se impriman correctamente
        setTasks(data); // Actualiza el estado tasks con los datos obtenidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, category) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('text/plain'));
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, category };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex bg-[#f9fafb]">
      <Column
        title="open"
        tasks={tasks}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'open')}
        category="open"
        handleDragStart={handleDragStart}
      />
      <Column
        title="reviewing"
        tasks={tasks}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'reviewing')}
        category="reviewing"
        handleDragStart={handleDragStart}
      />
      <Column
        title="done"
        tasks={tasks}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'done')}
        category="done"
        handleDragStart={handleDragStart}
      />
    </div>
  );
};

const Column = ({
  title,
  tasks,
  onDragOver,
  onDrop,
  category,
  handleDragStart,
}) => {
  return (
    <div className="w-1/3 p-4 mr-4" onDragOver={onDragOver} onDrop={onDrop}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="h-[70vh] overflow-auto">
        {tasks
          .filter((task) => task.category === category)
          .map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              taskMessage={task.message} // Asegúrate de que la propiedad sea correcta
              onDragStart={handleDragStart}
            />
          ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
