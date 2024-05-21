import React from 'react';
 interface Props{
    todoName: string
    id?: number
 }

export const Cards = (props: Props) => {
	return (
		<div>
            <h1>{props.id}</h1>
			<h1>{props.todoName}</h1>
		</div>
	);
};
