import DeleteIcon from "../utils/DeleteIcon";
import Editicon from "../utils/EditIcon";
import Modal from "../utils/Modal";
import { useState } from "react";

const Data = ({ data, setData }) => {
  const [form2, setForm2] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleEdit = (person) => {
    setForm2({
      id: person.id,
      firstname: person.firstname,
      lastname: person.lastname,
      email: person.email,
      password: person.password,
    });
  };

  const handleDelete = (id) => {
    const newArray = data.filter((item) => id != item.id);
    localStorage.setItem("data", JSON.stringify(newArray));
    setData(newArray);
  };
  const handleClick = (id, completed) => {
    const newData = [];
    data.map((item) => {
      if (item.id === id) {
        newData.push({ ...item, completed: !completed });
      } else {
        newData.push(item);
      }
      setData(newData);
      localStorage.setItem("data", JSON.stringify(newData));
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => {
            return (
              <tr key={index}>
                <th scope="row">{person.id}</th>
                <td
                  className={
                    person.completed ? "text-decoration-line-through" : ""
                  }
                  onClick={() => handleClick(person.id, person.completed)}
                  style={{ cursor: "pointer" }}
                >
                  {person.firstname}
                </td>
                <td
                  className={
                    person.completed ? "text-decoration-line-through" : ""
                  }
                  onClick={() => handleClick(person.id, person.completed)}
                  style={{ cursor: "pointer" }}
                >
                  {person.lastname}
                </td>
                <td
                  className={
                    person.completed ? "text-decoration-line-through" : ""
                  }
                  onClick={() => handleClick(person.id, person.completed)}
                  style={{ cursor: "pointer" }}
                >
                  {person.email}
                </td>
                <td
                  className={
                    person.completed ? "text-decoration-line-through" : ""
                  }
                  onClick={() => handleClick(person.id, person.completed)}
                  style={{ cursor: "pointer" }}
                >
                  {person.password}
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(person.id)}
                >
                  <DeleteIcon />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEdit(person)}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <Editicon />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal form2={form2} setForm2={setForm2} data={data} setData={setData} />
    </div>
  );
};
export default Data;
