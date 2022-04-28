import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="app-container-td">{contact.fullName}</td>
      <td className="app-container-td">{contact.address}</td>
      <td className="app-container-td">{contact.phoneNumber}</td>
      <td className="app-container-td">{contact.email}</td>
      <td className="app-container-td">
        <button className=".app-container-button"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className=".app-container-button" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Read;
