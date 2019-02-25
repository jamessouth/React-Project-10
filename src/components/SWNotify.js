import React from 'react';
import ModalNav from './ModalNav';
import loading from '../loading.png';
import '../styles/Modal.css';

const Modal = props => {

  let styles = {top: window.scrollY + 20};

  return (
    <div aria-live="polite" style={styles} onKeyUp={props.handleModalClose} className="hidden">
      <button autoFocus aria-label="close" onClick={props.handleModalClose} className="close">x</button>
      <ModalNav handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext} sing={props.sing}></ModalNav>
      <img src={props.emp ? props.emp.photo : loading} alt="employee" />
      <div className="top-part">
        <p className="name">{props.emp ? props.emp.name : ''}</p>
        <p className="user">{props.emp ? props.emp.username : ''}</p>
        <p className="email">{props.emp ? props.emp.email : ''}</p>
        <p className="city">{props.emp ? props.emp.city : ''}</p>
      </div>
      <div className="bottom-part">
        <p className="phone">{props.emp ? props.emp.cell : ''}</p>
        <p className="addy">{props.emp ? `${props.emp.street}, ${props.emp.city}, ${props.emp.state}, USA ${props.emp.postcode}` : ''}</p>
        <p className="bday">{props.emp ? `Birthday: ${props.emp.month}/${props.emp.day}/${props.emp.year}` : ''}</p>
      </div>
    </div>
  );
}

export default Modal;
