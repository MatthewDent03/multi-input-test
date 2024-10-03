import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoList from './components/TodoList.js'

function App() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
