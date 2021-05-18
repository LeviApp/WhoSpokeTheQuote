// @flow
import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'carbon-components-react'
export function Modal(props) {
  return (
    <div className='modalContainer'>
        <Modal description="Loading quotes"></Modal>
      {/* <h2>Are you sure you want to delete this quote?</h2>
      <section>
        <Button>No</Button>
        <Button>Yes</Button>

    </section> */}
    </div>
  );
};