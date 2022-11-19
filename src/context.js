import React, { useContext, useState } from 'react';

const MyContext = React.createContext();

const ModalCotext = ({ children }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  const openModal = () => {
    setIsModalShow(true);
  };

  const clseModal = () => {
    setIsModalShow(false);
  };

  const openSidebar = () => {
    setIsSidebarShow(true);
  };

  const closeSidebar = () => {
    setIsSidebarShow(false);
  };

  return (
    <MyContext.Provider
      value={{
        isModalShow,
        isSidebarShow,
        openModal,
        clseModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MyContext);
};

export { useGlobalContext, ModalCotext };
