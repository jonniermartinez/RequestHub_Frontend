const Task = ({ taskId, taskTitle, taskMessage, onDragStart }) => {
  return (
    <div
      key={taskId}
      draggable
      onDragStart={(e) => onDragStart(e, taskId)}
      className=" bg-slate-50 border rounded-md p-2 mb-3 cursor-pointer shadow-md  h-24"
    >
      <p>{taskTitle}</p>
      <p>{taskMessage}</p>
    </div>
  );
};

export default Task;
