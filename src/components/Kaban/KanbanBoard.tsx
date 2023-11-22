import { useMemo, useState } from 'react';
import { Column, Id, Task } from './types';
import { client } from '@/supabase';
import ColumnContainer from './ColumnContainer';
import './style-kabanCompo.css';

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import TaskCard from './TaskCard';

const defaultCols: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
  },
  {
    id: 'doing',
    title: 'In progress',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

// const defaultTasks: Task[] = [

//   {
//     id: "1",
//     columnId: "todo",
//     content: "List admin APIs for dashboard",
//   },
//   {
//     id: "2",
//     columnId: "todo",
//     content:
//       "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
//   },
//   {
//     id: "3",
//     columnId: "doing",
//     content: "Conduct security testing",
//   },
//   {
//     id: "4",
//     columnId: "doing",
//     content: "Analyze competitors",
//   },
//   {
//     id: "5",
//     columnId: "done",
//     content: "Create UI kit documentation",
//   },
//   {
//     id: "6",
//     columnId: "done",
//     content: "Dev meeting",
//   },
//   {
//     id: "7",
//     columnId: "done",
//     content: "Deliver dashboard prototype",
//   },
//   {
//     id: "8",
//     columnId: "todo",
//     content: "Optimize application performance",
//   },
//   {
//     id: "9",
//     columnId: "todo",
//     content: "Implement data validation",
//   },
//   {
//     id: "10",
//     columnId: "todo",
//     content: "Design database schema",
//   },
//   {
//     id: "11",
//     columnId: "todo",
//     content: "Integrate SSL web certificates into workflow",
//   },
//   {
//     id: "12",
//     columnId: "doing",
//     content: "Implement error logging and monitoring",
//   },
//   {
//     id: "13",
//     columnId: "doing",
//     content: "Design and implement responsive UI",
//   },
// ];

let defaultTasks: Task[] = [];
let defaultTasks1: Task[] = [];
let defaultTasks2: Task[] = [];

// Traer las tareas To do
const { data: dataTodo, error: errorTodo } = await client
  .from('pqr_form')
  .select(
    `id, pqr_owner, pqr_type, subject, message, state, category( category )`
  )
  .eq('tablero', 'todo');

if (errorTodo) {
  console.error('Error al consultar la base de datos:', errorTodo.message);
}

if (dataTodo && dataTodo.length > 0) {
  defaultTasks = [];
  dataTodo.forEach((item) => {
    defaultTasks.push({
      id: item.id,
      columnId: 'todo',
      content: item.message,
      category: item.category,
    });
  });
}

// Traer las tareas Doing/ In progress
const { data: dataDoing, error: errorDoing } = await client
  .from('pqr_form')
  .select(
    `id, pqr_owner, pqr_type, subject, message, state, category( category )`
  )
  .eq('tablero', 'doing');

// .from('pqr_form')
// .select('id, pqr_owner, pqr_type, subject, message, state')
// .eq('tablero', 'doing');

if (errorDoing) {
  console.error('Error al consultar la base de datos:', errorDoing.message);
}

if (dataDoing && dataDoing.length > 0) {
  defaultTasks1 = [];
  dataDoing.forEach((item) => {
    // console.log(item.message);
    // console.log(item.id);
    defaultTasks1.push({
      id: item.id,
      columnId: 'doing',
      content: item.message,
      category: item.category,
    });
  });
}

// Traer las tareas Done
const { data: dataDone, error: errorDone } = await client
  .from('pqr_form')
  .select(
    `id, pqr_owner, pqr_type, subject, message, state, category( category )`
  )
  .eq('tablero', 'done');

if (errorDone) {
  console.error('Error al consultar la base de datos:', errorDone.message);
}

if (dataDone && dataDone.length > 0) {
  defaultTasks2 = [];
  dataDone.forEach((item) => {
    // console.log(item.message);
    // console.log(item.id);
    defaultTasks2.push({
      id: item.id,
      columnId: 'done',
      content: item.message,
      category: item.category,
    });
  });
}

// Agregar todos las pqrs para agregar a los tableros
defaultTasks = [...defaultTasks, ...defaultTasks1, ...defaultTasks2];

// Realiza la actualización en la base de datos del campo tablero
async function actualizarCampoTablero(
  taskId: number,
  nuevoValorTablero: string
) {
  try {
    const { data, error } = await client
      .from('pqr_form')
      .update({ tablero: nuevoValorTablero })
      .eq('id', taskId);

    if (error) {
      console.error('Error al actualizar el campo tablero:', error.message);
      return null;
    }

    if (data) {
      console.log('Campo tablero actualizado con éxito:', data);
      return data;
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return null;
  }
}

// ACTUALIZAR CONTENIDO EN LA BASE DE DATOS
async function actualizarCampoMessage(taskId: number, nuevoMessage: string) {
  try {
    const { data, error } = await client
      .from('pqr_form')
      .update({ message: nuevoMessage })
      .eq('id', taskId);

    if (error) {
      console.error('Error al actualizar el campo message:', error.message);
      return null;
    }

    if (data) {
      console.log('Campo message actualizado con éxito:', data);
      return data;
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return null;
  }
}

function KanbanBoard(): JSX.Element {
  // Realiza la consulta SELECT
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <div
      // CONTENEDOR DE TODO
      className="
        kabanContainer
        m-auto
        flex
        overflow-x-auto
        w-full
         h-full
    "
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className=" gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>
          {/* <button
            onClick={() => {
              createNewColumn();
            }}
            // AGREGAR COLUMNA
            className="
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-mainBackgroundColor
      border-2
      border-columnBackgroundColor
      p-4
      hover:ring-2
      flex
      gap-2
      "
          >
            <PlusIcon />
            Add Column
          </button> */}
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  // CREAR NUEVA TAREA

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
      category: 'Abierto',
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  // ACTUALIZAR CONTENIDO DE LA TASK
  function updateTask(id: Id, content: string) {
    let taskId: any;
    let nuevoMessage: any;

    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    nuevoMessage = content;
    taskId = id;

    // console.log('content: ',content);
    actualizarCampoMessage(taskId, nuevoMessage);
    setTasks(newTasks);
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === 'Column';
    if (!isActiveAColumn) return;

    console.log('DRAG END');

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverATask = over.data.current?.type === 'Task';

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      let taskId: any;
      let nuevoValorTablero: any;

      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        // AGREGADO
        taskId = tasks[activeIndex].id;
        nuevoValorTablero = tasks[overIndex].columnId;

        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
      actualizarCampoTablero(taskId, nuevoValorTablero);

      actualizarCampoTablero(taskId, nuevoValorTablero);
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    // Arrastrar tarea sobre una columna
    if (isActiveATask && isOverAColumn) {
      let taskId: any;
      let nuevoValorTablero: any;

      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        tasks[activeIndex].columnId = overId;

        console.log('Arrastrar tarea sobre una columna', { activeIndex });
        taskId = tasks[activeIndex].id;
        nuevoValorTablero = tasks[activeIndex].columnId;
        return arrayMove(tasks, activeIndex, activeIndex);
      });
      actualizarCampoTablero(taskId, nuevoValorTablero);
    }
  }
}

function generateId() {
  /* Generate a random number between 0 and 10000 */
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
