import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { Column, Task } from './types';
import { CSS } from '@dnd-kit/utilities';
import { useMemo } from 'react';
import TaskCard from './TaskCard';

interface Props {
  column: Column;
  tasks: Task[];
}

function ColumnContainer({ column, tasks }: Props) {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const { setNodeRef, transform, transition } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className=" w-[330px] h-full flex flex-col"
    >
      {/* Column task container */}
      <div className="scroll-m-20 text-base font-semibold tracking-tight pb-5">
        {column.title}
      </div>
      <div className=" flex flex-col gap-4 overflow-y-auto   ">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default ColumnContainer;
