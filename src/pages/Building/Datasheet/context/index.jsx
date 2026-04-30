import React, { createContext, useContext, useState } from 'react';

// Crie o VisitModalContext
const VisitModalContext = createContext();

export const useVisitModalContext = () => {
    const context = useContext(VisitModalContext);  // Altere para usar VisitModalContext
    if (!context) {
        throw new Error('useVisitModalContext deve ser usado dentro de um VisitModalProvider');
    }
    return context;
};

export const VisitModalProvider = ({ children }) => {
    const [modalVisitOn, setModalVisitOn] = useState(null);

    const value = {
        modalVisitOn,
        setModalVisitOn
    };

    return (
        <VisitModalContext.Provider value={value}> {/* Use VisitModalContext aqui */}
            {children}
        </VisitModalContext.Provider>
    );
};
