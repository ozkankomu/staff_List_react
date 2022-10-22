import React from "react";

const Modal = ({ form2, setForm2, data, setData }) => {
  const handleSave = (id) => {
    const newList = [];
    data.map((item) => {
      if (item.id == id) {
        newList.push({
          ...item,
          firstname: form2.firstname,
          lastname: form2.lastname,
          email: form2.email,
          password: form2.password,
        });
      } else {
        newList.push(item);
      }
      localStorage.setItem("data", JSON.stringify(newList));
      setData(newList);
    });
  };
  return (
    <div>
      {" "}
      <div>
        <div
          className="modal fade"
          id="staticBackdrop"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={form2.firstname}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        firstname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={form2.lastname}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        lastname: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={form2.email}
                    onChange={(e) =>
                      setForm2({ ...form2, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={form2.password}
                    onChange={(e) =>
                      setForm2({
                        ...form2,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => handleSave(form2.id)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
