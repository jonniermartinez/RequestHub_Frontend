import { useState } from "react";
import { Id, Task } from "./types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { client } from "@/supabase";
import { Task1, Task2, Task3 } from "./types";
import type { Id as CategoryIdType } from './types';

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}


// AGREGADO
let defaultTasks: Task1[] = [];
let defaultTasks1: Task1[] = [];
let defaultTasks2: Task1[] = [];
let categorysData: Task1[] = [];
let stateData: Task3[] = [];

// Traer las tareas To do
const { data: dataTodo, error: errorTodo } = await client
  .from('pqr_form')
  .select(`id, pqr_owner, pqr_type, subject, message, state, category( category )`)
  .eq('state', 'open');

if (errorTodo) {
  console.error('Error al consultar la base de datos:', errorTodo.message);
}

if (dataTodo && dataTodo.length > 0) {
  defaultTasks = [];
  dataTodo.forEach(item => {
    defaultTasks.push({
      id: item.id,
      category: item.category,
    })

  });
}

// Traer las tareas doing
const { data: dataDoing, error: errorDoing } = await client
  .from('pqr_form')
  .select(`id, pqr_owner, pqr_type, subject, message, state, category( category )`)
  .eq('state', 'reviwing');

if (errorDoing) {
  console.error('Error al consultar la base de datos:', errorDoing.message);
}

if (dataDoing && dataDoing.length > 0) {
  defaultTasks1 = [];
  dataDoing.forEach(item => {
    defaultTasks1.push({
      id: item.id,
      category: item.category
    })

  });
}



// Traer las tareas done
const { data: dataDone, error: errorDone } = await client
  .from('pqr_form')
  .select(`id, pqr_owner, pqr_type, subject, message, state, category( category )`)
  .eq('state', 'done');

if (errorDone) {
  console.error('Error al consultar la base de datos:', errorDone.message);
}

if (dataDone && dataDone.length > 0) {
  defaultTasks2 = [];
  dataDone.forEach(item => {
    defaultTasks2.push({
      id: item.id,
      category: item.category
    })
  });

}

// TRAER TODAS LAS CATEGORIAS DE LA DB
const { data: dataCategory, error: errorCategory } = await client
  .from('category')
  .select(`id, category`);

if (errorCategory) {
  console.error('Error al consultar la base de datos:', errorCategory.message);
}

if (dataCategory && dataCategory.length > 0) {
  categorysData = [];
  dataCategory.forEach(item => {
    categorysData.push({
      id: item.id,
      category: item.category
    })
  });

}

// TRAER TODAS LAS CATEGORIAS DE LA DB
const { data: dataState, error: errorState } = await client
  .from('pqr_form')
  .select(`state, id`);

if (errorState) {
  console.error('Error al consultar la base de datos:', errorState.message);
}

if (dataState && dataState.length > 0) {
  categorysData = [];
  dataState.forEach(item => {
    stateData.push({
      state: item.state,
      id: item.id,
    })
  });

}

defaultTasks = [...defaultTasks, ...defaultTasks1, ...defaultTasks2];

console.log('stateData: ', stateData);

const getCategotyIdByName = async (catName: String) => {

  // try {
  const { data: dataCat, error: errorCat } = await client
    .from('category')
    .select('id')
    .eq('category', catName);

  if (errorCat) {
    console.error('Error al consultar la base de datos:', errorCat.message);
  }

  return dataCat;

}



const updateState = async (newState: String) => {
  // try {
  //   const { data, error } = await client
  //     .from('pqr_form')
  //     .update({ state: newState })
  //     .eq('id', task.id);

  //   if (error) {
  //     console.error('Error al actualizar el campo state:', error.message);
  //     return null;
  //   }

  //   if (data) {
  //     console.log('Campo state actualizado con éxito:', data);
  //     return data;
  //   }
  // } catch (error) {
  //   console.error('Error inesperado:', error.message);
  //   return null;
  // }

}


function TaskCard({task, deleteTask, updateTask }: Props) {

  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryId, setCategoryId] = useState<CategoryIdType>('');

  const categorias = defaultTasks.find(item => item.id === task.id)?.category;
  const stateDat = stateData.find(item => item.id !== task.id)?.state;

  // Función pra actualizar la categoría en la base de datos
  async function updateCategoryInDatabase(catId: Id) {
    // catId: Id de la categoria 1 - 2 - 3 - 4.

    try {
      const { data, error } = await client
        .from('pqr_form')
        .update({ pqr_type: catId, })
        .eq('id', task.id);

      if (error) {
        console.error('Error al actualizar la categoría:', error.message);
      } else {
        
      }
    } catch (error) {
      console.error('Error al actualizar la categoría:', error.message);
    }
  }

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        // EFECTO AL ARRASTRAR TASK
        className="
        opacity-30
        bg-mainBackgroundColor p-2.5 h-[200px] min-h-[200px] items-center flex text-left rounded-xl border-dashed border-2 border-gray-400 cursor-grab relative
        "
      // bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-dashed border-2 border-gray-400 cursor-grab relative
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        // TAREA INDIVUAL BORDES
        className="border-task bg-
        BackgroundColor p-2.5 h-[200px] min-h-[200px] items-center flex text-left rounded-xl cursor-grab relative"
      // BackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-grab relative"
      >
        <textarea
          // h-[90%]
          className="
        h-[90%]
        w-[90%] resize-none rounded bg-transparent text-black focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>

    );
  }

  // SET CATEGORY DATA
  const handletSelect = async (category: string) => {
    try {
      const result: Task2[] | null = await getCategotyIdByName(category);

      if (result) {
        updateCategoryInDatabase(result[0].id);
      } else {
        console.error('Error al obtener la categoría por nombre');
      }
    } catch (error) {
      console.error('Error al manejar la selección:', error);
    }
  }

  
  // ACTUALIZAR ESTADO
  const setState = async (newState: string) => {
    try {
      if (newState !== task.state) {
        // Solo realiza la actualización si el nuevo estado es diferente al estado actual
        await updateState(newState);
      } else {
        console.log('El estado no ha cambiado, no es necesario actualizar la base de datos.');
      }
    } catch (error) {
      console.error('Error al manejar la actualización de estado:', error);
    }
  }

  // console.log('currentState: ',currentState);
  
  

  // if (currentState) {
  //   setState(currentState);
  // }


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      //   Contenedor de tareas individuales
      // className="task-content bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl cursor-grab relfative task"
      className="task-content bg-mainBackgroundColor p-2.5 h-[200px] min-h-[200px] items-center flex text-left rounded-xl cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >

      <div className="all-content">
        <div>
          {/* {categorysData.map((category) => {
          return ( */}
          <span
            className="btn-cat h-[30px] w-[90px] justify-center inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            key={task.id}
          >{categorias?.category}</span>








          {/* STATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
          {/* <div className="content-state"> */}

          {/* {stateData.map(item => (
          <span className="span-cat h-[30px] w-[90px] justify-center inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            // key={item.id}
            defaultValue={task.state}
            onVolumeChange={() =>{
              setState(item.state);
            }}
            >
            {task.id}
          </span>
            ))} */}

          {/* {currentState && ( */}
            <span
              className="span-cat h-[30px] w-[90px] justify-center inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
              // defaultValue={task.state}
            >
              {task.state}
            </span>
          {/* )} */}

          {/* </div> */}
        </div>

        <div className="content-opcions">
          <div className="subject-content font-bold">
            {task.subject}
          </div>

          {/* ESTADO */}
          {/* <div className="subject-content"> */}

          {/* <div className="pqr-opcion">
              <Select onValueChange={(value: string) => {
                handletSelect(value);
              }}>
                <SelectTrigger className="h-[35px] w-[180px]">
                  <SelectValue key={task.id}
                    placeholder={categorias?.category}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categorías</SelectLabel>
                    {categorysData.map((category) => {
                      return (
                        <SelectItem
                          key={category.id}
                          value={category.category}
                        >
                          {category.category}
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}
          {/* </div> */}
          <div className="contentState">
            {/* <span className="span-cat h-[30px] w-[90px] justify-center inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            key={task.id}
            onClick={() => setState(task.state)}
            >
              {task.state}
            </span> */}
          </div>
        </div>
        {/* {mouseIsOver && ( */}

        {/* )} */}
        <div className="content-message">
          <p className="my-auto h-[90%] w-[90%] overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
            {/* {task.content} */}
            {task.content}
          </p>
        </div>
      </div >

      {/* {mouseIsOver && ( */}
      {/* <button
        onClick={() => {
          deleteTask(task.id);
        }}
        // ELIMINAR TAREA
        className="btn-opciones stroke-black absolute right-3 -translate-y-1/2 bg-columnBackgroundColor p-1 rounded opacity-60 hover:opacity-100"
      >
        <TrashIcon />
      </button> */}
      {/* )} */}
    </div >
  );
}

export default TaskCard;