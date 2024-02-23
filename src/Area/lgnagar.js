import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Lgnagar=()=>{
    return(
        <div>
            <table className='table'>
                <tr>
                    <td>
        <div className='lgcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700%2C800" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        <td>
        <div className='lgcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal-500x500.jpg"  height="180"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        <td>
        <div className='lgcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592930989-6712.jpg?im=FeatureCrop,size=(382,233)" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        </tr>
        </table>
        </div>
    );
};
export default Lgnagar;