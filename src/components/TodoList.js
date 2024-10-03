import { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = () => {
    const initialValue = [
        {
            text: "Get milk",
            done: false,
            id: 1
        },
        {
            text: "Learn react",
            done: false,
            id: 2
        },
        {
            text: "Go home",
            done: false,
            id: 3
        }
    ];
    const [list, setList] = useState(initialValue);

    const markAsDone = (id) => {
        const newList = list.map((item, index) => {
            if(item.id === id){
                item.done = true;
            }
            return item;
        })
        setList(newList);
    }

    const TodoItems = list.map((item, index) => {
        return <TodoItem id={item.id} key={item.id} text={item.text} done={item.done} markAsDone={markAsDone}/>
    })
    return (<Card>
        <CardHeader>TodoList</CardHeader>
        <CardBody><ListGroup variant='flush'>{TodoItems}</ListGroup></CardBody>
        <CardFooter><Button variant='success' className='float-end'>add</Button></CardFooter>
    </Card>)
}

export default TodoList;