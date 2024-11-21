import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodosData }) => {
    return (
        <div className=" border-b-gray-300 border-solid border-2 my-2.5">
            <strong className="text-3xl ">할 일 목록</strong>
            <input type="text" />

            {mockTodosData.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item} /* isDone={item.isDone} task={item.task} createDate={item.createDate} */
                />
            ))}
        </div>
    );
};

export default TodoList;
