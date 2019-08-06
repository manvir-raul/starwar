import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Planet = ({modal ,toggle,className,planet}) => {
    return ( 
       <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}><h2>Planet name :{planet.name}</h2></ModalHeader>
          <ModalBody>
            <h4>
                Population : {planet.population} <br/>
                climate    : {planet.climate} <br/>
                Diameter   : {planet.diameter}
            </h4>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>

     );
}
 
export default Planet;