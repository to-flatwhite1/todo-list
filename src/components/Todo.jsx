'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
    const [todos, setTodos] = useState(mockTodoData);

    //마운트시
    useEffect(() => {
        const savedTodos =
            JSON.parse(localStorage.getItem('todos')) ||
            []; /* 문자열 형태로만 가져올 수 있다 ->  불러올 때는 JSON.parse()로 다시 객체로 변환 // 데이터가 없을 수 있기 때문에 or 연산자해서 제일 처음 만나는 참 값이 출력 된다*/ // 할 일 추가하는 함수
        setTodos(savedTodos);
        console.log(savedTodos);
    }, []);
    //로컬스토리지에서 데이터를 가져와서 todos 상태에 저장

    // todos 업데이트시
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        //로컬스토리지에 데이터를 저장
    }, [todos]);

    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };
        setTodos([newTodo, ...todos]);
    };

    // 완료 표시 함수
    const onUpdate = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
            })
        );
    };

    // 할 일 삭제 함수
    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="flex flex-col gap-4 p-8 pb-40">
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default Todo;
