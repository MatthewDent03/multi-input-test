import { ListGroup } from "react-bootstrap";
const TodoItem = (props) => {
    const [text, done, id, markAsDone] = props.text;
    return (
        <ListGroup.Item>
            {
                done ? (
                    <>
                        <span style={{ textDecoration: 'line-through' }}>{text}</span>
                        <span className='float-end'>&#128077;</span>
                    </>
                ) : (
                    <>
                        {text}
                        <Badge onClick ={() => markAsDone(id)} pill bg="success" className='float-end'>&#10003;</Badge>
                    </>
                )
            }
        </ListGroup.Item>
    )
}

export default TodoItem;