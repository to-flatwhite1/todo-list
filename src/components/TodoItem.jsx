import React from 'react';

const TodoItem = ({ isDone, createDate, task }) => {
    return (
        <div className=" border-b-gray-300 border-solid border-2 mx-2 my-7">
            <ul className="flex flex-col justify-around text-center">
                <li>
                    <label>
                        <input type="checkbox" check={isDone} />
                        {task}
                    </label>
                    <span>{createDate}</span>
                    <input className={'w-16 h-7 x-5 bg-gray-300 rounded-md '} type="reset" value="삭제" />
                </li>
            </ul>
        </div>
    );
};

export default TodoItem;
