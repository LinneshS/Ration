import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Vellalore=()=>{
    return(
        <div>
            <table className='veltable'>
                <tr>
                    <td>
        <div className='velcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700%2C800" />
      <Card.Body>
        <Card.Title>SUGAR</Card.Title>
        <Card.Text>
        Distribution Details
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>day:MONDAY</ListGroup.Item>
        <ListGroup.Item>Quatity:2-5kgs</ListGroup.Item>
        <ListGroup.Item>Availablity:all cards</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        <td>
        <div className='velcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal-500x500.jpg"  height="180"/>
      <Card.Body>
        <Card.Title>DHAL</Card.Title>
        <Card.Text>
          Distribution Details
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Day:Tuesday and Friday</ListGroup.Item>
        <ListGroup.Item>Quatity:2 to 5 kgs</ListGroup.Item>
        <ListGroup.Item>Availablity:all cards</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        <td>
        <div className='velcard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592930989-6712.jpg?im=FeatureCrop,size=(382,233)" />
      <Card.Body>
        <Card.Title>OIL</Card.Title>
        <Card.Text>
          Distribution Details
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Day:Wednesday and saturday</ListGroup.Item>
        <ListGroup.Item>Quatity:1 to 2 liters</ListGroup.Item>
        <ListGroup.Item>Availablity:limited cards</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
        </td>
        </tr>
        </table>
        </div>
    );
};
export default Vellalore;