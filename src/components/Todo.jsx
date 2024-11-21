'use client';
import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodosData } from '@/data/todoData';
import { format } from 'date-fns';

const Todo = () => {
    const [todos, setTodos] = useState(mockTodosData);

    //할일 추가하는 함수
    const addTodo = (task) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                isDone: false,
                task: task,
                createDate: new Date().toLocaleDateString(),
            },
        ]);
    };
    return (
        <>
            <h1 className="text-center">Todo</h1>
            <div className="flex flex-col  w-3/5 m-auto text-center ">
                <TodoHd />
                <TodoEditor addTodo={addTodo} />
                <TodoList mockTodosData={todos} />
            </div>
        </>
    );
};

export default Todo;
