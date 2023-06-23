import React from "react";
import ModalContainer from "./ModalContainer";

export default function ActorUpload({ visible, onClose }) {
  return (
    <ModalContainer
      visible={visible}
      onClose={onClose}
      ignoreContainer
    ></ModalContainer>
  );
}
