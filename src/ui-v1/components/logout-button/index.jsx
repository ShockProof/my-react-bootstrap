import React, { useState } from 'react';

import Button from '@design-lib/button/Button';
import Modal from '@design-lib/modal';

function Logout() {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Button variant="danger" label="Logout" onClick={handleShowModal}/>

      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        handleApply={handleCloseModal}
        title="Confirmation Modal"
        body="Are you sure, you want to logout now?"
        closeButtonLabel="No"
        applyButtonLabel="Yes! Logout"
      />
    </>
  );
}

export default Logout;
