import React, { useState } from 'react';

import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '@design-lib/button/Button';
import Modal from '@design-lib/modal';

function Logout() {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const buttonLabel = (
    <>
      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
    </>
  );

  return (
    <>
      <Button variant="danger" label={buttonLabel} onClick={handleShowModal} />

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
