import { useState } from 'react';
import { Task } from './types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const [editMode, setEditMode] = useState(false);
  setEditMode;

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
      type: 'Task',
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
        bg-mainBackgroundColor p-2.5 h-fit items-center flex text-left rounded-xl border-dashed border-2 border-gray-400 cursor-grab relative
        "
      >
        <TaskContend task={task}></TaskContend>
      </div>
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
        className="border-task bg-slate-500 p-2.5 h-fit items-center flex text-left rounded-xl cursor-grab relative"
      >
        <TaskContend task={task}></TaskContend>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className=" bg-white shadow-sm relative p-5 rounded-sm"
    >
      <TaskContend task={task}></TaskContend>
    </div>
  );
}

const TaskContend = ({ task }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 text-gray-700 h-fit">
      <p className="font-semibold">{task.subject}</p>
      <p className=" text-sm opacity-75">{task.content}</p>
      <div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {task.category}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
