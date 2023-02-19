import React, { useState } from "react";

export const Post = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        // <div className="user">
        //   <span className="user-name">{name}</span>
        //   <span className="user-email">{email}</span>
        //   <div>
        //     <button onClick={handleEdit}>Edit</button>
        //     <button onClick={handleDelete}>Delete</button>
        //   </div>
        // </div>
   
          
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Otto
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            
     
       

      )}

    </div>
  );
};
