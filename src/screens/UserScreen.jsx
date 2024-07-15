import React, { useEffect } from "react";
import UsercardComponent from "../components/UsercardComponent";
import axios from "axios";
import { fetch_users } from "../api";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from 'react-redux';
const UserScreen = () => {
  const { users } = useSelector((e) => e.userReducer);
  const dispatch = useDispatch();
  const fetch_Dummy_User = async () => {
    const fetch_Dummy_User_Data = await fetch_users();
    dispatch({ type: "addUsers", payload: fetch_Dummy_User_Data });
  };
  useEffect(() => {
    if (!users.length) {
      fetch_Dummy_User();
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-3 mt-4 px-5">
      {users.map((e) => (
        <UsercardComponent
          id={e.id}
          image={e.image}
          firstName={e.firstName}
          lastName={e.lastName}
          phone={e.phone}
          email={e.email}
          jobrole={e.company.title}
          companyName={e.company.name}
          companyAddress={e.company.address.address}
          companycity={e.company.address.city}
          companydept={e.company.department}
          Education={e.university}
        />
      ))}
    </div>
  );
};

export default UserScreen;
