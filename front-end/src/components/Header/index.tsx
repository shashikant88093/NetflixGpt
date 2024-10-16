import React from 'react';

// icon
// import Netflix from "../../assest/icon/netflix.svg"
const Header: React.FC = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-44"
        alt="logo"
      />
    </div>
  );
};

export default Header;
