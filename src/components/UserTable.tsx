import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { RootState, AppDispatch } from "../store";
import { fetchUsers, setFilter } from "../features/users/userSlice";
import "../App.css";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, status } = useSelector(
    (state: RootState) => state.users
  );

  const [filterValues, setFilterValues] = useState<
    Partial<Record<string, string>>
  >({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilter(filterValues));
  }, [filterValues, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const icons = {
    name: faUser,
    username: faUserCircle,
    email: faEnvelope,
    phone: faPhone,
  };

  return (
    <div className="App">
      <div className="filter-container">
        {Object.keys(filterValues).map((key) => (
          <div key={key} className="filter-item">
            <div className="input-container">
              <FontAwesomeIcon
                icon={icons[key as keyof typeof icons]}
                className="input-icon"
              />
              <input
                type="text"
                name={key}
                placeholder={`Filter by ${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }`}
                value={filterValues[key as keyof typeof filterValues]}
                onChange={handleInputChange}
                className="filter-input"
                autoComplete={key}
              />
            </div>
          </div>
        ))}
      </div>

      {status === "loading" && (
        <p className="message loading">Loading users, just a moment...</p>
      )}
      {status === "failed" && (
        <p className="message error">
          Unable to load users. Please, try again later.
        </p>
      )}
      {status === "idle" && filteredUsers.length === 0 && (
        <p className="message">Sorry, no users found.</p>
      )}
      {status === "idle" && filteredUsers.length > 0 && (
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <FontAwesomeIcon icon={faUser} className="icon-outline" /> Name
              </th>
              <th>
                <FontAwesomeIcon icon={faUserCircle} className="icon-outline" />{" "}
                Username
              </th>
              <th>
                <FontAwesomeIcon icon={faEnvelope} className="icon-outline" />{" "}
                Email
              </th>
              <th>
                <FontAwesomeIcon icon={faPhone} className="icon-outline" />{" "}
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
