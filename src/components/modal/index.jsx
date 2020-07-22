import React from 'react';

import { Modal as BootstrapModal } from 'react-bootstrap';

import Button from '@design-lib/button/Button';

function Modal({
  show,
  handleClose,
  handleApply,
  centered,
  title,
  body,
  closeButtonLabel,
  applyButtonLabel,
}) {
  return (
    <BootstrapModal show={show} onHide={handleClose} centered={centered}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{body}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose} label={closeButtonLabel}/>
        <Button variant="primary" onClick={handleApply} label={applyButtonLabel} />
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}

export default Modal;
