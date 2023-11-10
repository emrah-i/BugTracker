import React, { useState } from "react";

function DeleteModal(props) {

    const [ modalView, setModalView ] = useState(false)
    const { deleteView } = props

    function showModal() {
      setModalView(!modalView)
    }

    return 
}

export default DeleteModal;