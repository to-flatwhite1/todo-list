import React from 'react';
import { format } from 'date-fns';
const TodoHd = () => {
    const date = new Date();
    console.log(date.getDate());

    return (
        <div>
            <div className=" border-b-gray-300 border-solid border-2 my-2.5">
                <strong className="text-3xl mr-3">{format(new Date(), 'yyyy-MM-dd')}</strong>
                <span>오늘 할 일을 적어보세요</span>
            </div>
        </div>
    );
};

export default TodoHd;
