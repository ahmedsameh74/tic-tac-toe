import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('winner');

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);

    return (
        <ModalContext.Provider value={{modal, showModal, hideModal, modalType, setModalType}}>
            {children}
        </ModalContext.Provider>
    )
}