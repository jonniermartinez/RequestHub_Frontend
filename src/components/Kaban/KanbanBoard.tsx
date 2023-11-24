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

const defaultCols: Column[] = [
  {
    id: 'open',
    title: 'Open',
  },
  {
    id: 'reviwing',
    title: 'Reviwing',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

let defaultTasks: Task[] = [];
let defaultTasks1: Task[] = [];
let defaultTasks2: Task[] = [];

// Traer las tareas To do
const { data: dataTodo, error: errorTodo } = await client
  .from('pqr_form')
  .select(
    `id, pqr_owner, pqr_type, subject, message, state, category( category )`
  )
  .eq('state', 'open');

if (errorTodo) {
  console.error('Error al consultar la base de datos:', errorTodo.message);
}

if (dataTodo && dataTodo.length > 0) {
  defaultTasks = [];
  dataTodo.forEach((item) => {
    defaultTasks.push({
      id: item.id,
      columnId: 'open',
      content: item.message,
      category: item.category,
      subject: item.subject,
      state: item.state,
    });
  });
}

interface DatabaseResponse {
  data: Task[];
  error: Error | null;
}

async function fetchDataFromDatabase(): Promise<DatabaseResponse> {
  try {
    const { data: dataDoing, error: errorDoing } = await client
      .from('pqr_form')
      .select(
        `id, pqr_owner, pqr_type, subject, message, state, category( category )`
      )
      .eq('state', 'reviwing');

    if (errorDoing) {
      console.error('Error al consultar la base de datos:', errorDoing.message);
      return { data: [], error: null };
    }

    if (dataDoing && dataDoing.length > 0) {
      const Tasks1: Task[] = dataDoing.map((item) => ({
        id: item.id,
        columnId: 'reviwing',
        content: item.message,
        category: item.category,
        subject: item.subject,
        state: item.state,
      }));
      // Push
      defaultTasks1 = Tasks1;
      console.log('Fetch Data:', defaultTasks1);
      return { data: Tasks1, error: null };
    } else {
      return { data: [], error: null };
    }
  } catch (error) {
    console.error('Error:', error.message);
    return { data: [], error };
  }
}
fetchDataFromDatabase();
// Traer las tareas Done
const { data: dataDone, error: errorDone } = await client
  .from('pqr_form')
  .select(
    `id, pqr_owner, pqr_type, subject, message, state, category( category )`
  )
  .eq('state', 'done');

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
      subject: item.subject,
      state: item.state,
    });
  });
}

// Agregar todos las pqrs para agregar a los tableros
defaultTasks = [...defaultTasks, ...defaultTasks1, ...defaultTasks2];

function KanbanBoard(): JSX.Element {
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
      className="kabanContainer m-auto flex overflow-x-auto w-full h-full"
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
      subject: '',
      state: '',
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

    // actualizarCampoMessage(taskId, nuevoMessage);
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

// Realiza la actualización en la base de datos del campo tablero
async function actualizarCampoTablero(
  taskId: number,
  nuevoValorTablero: string
) {
  fetchDataFromDatabase();
  // isChanged = true
  try {
    const { data, error } = await client
      .from('pqr_form')
      .update({ state: nuevoValorTablero })
      .eq('id', taskId);

    if (error) {
      console.error('Error al actualizar el campo state:', error.message);
      return null;
    }

    if (data) {
      console.log('Campo state actualizado con éxito:', data);
      return data;
    }
  } catch (error) {
    console.error('Error inesperado:', error.message);
    return null;
  }
}
