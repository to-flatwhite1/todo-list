import classNames from 'classnames';
import React, { useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    function onChangeTask(e) {
        setTask(e.target.value);
    }
    function onSubmit() {
        addTodo(task);
        setTask('');
    }
    return (
        <div className=" border-b-gray-300 border-solid border-2 my-2.5">
            <strong className="text-3xl">새로운 Todo 작성하기✏</strong>
            <div className="flex justify-center">
                <form>
                    <input
                        type="text"
                        className="w-56 border-solid border-2 rounded-sm"
                        placeholder="할 일을 추가로 입력해주세요."
                        value={task}
                        onChange={onChangeTask}
                    />
                    <button
                        type="submit"
                        onClick={onSubmit}
                        disabled={!task}
                        className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')}
                    >
                        할일추가
                    </button>
                </form>
                {/* 객체 안에 비어지어있을 때 false를 준다 */}
                {/* disabled={!task} task 값이 없으면 비활성화 */}
            </div>
        </div>
    );
};

export default TodoEditor;
