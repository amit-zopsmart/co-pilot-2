import React, { createContext, useContext, useState } from "react";

export const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
  const [myFlow, setMyFlow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isQuestionAsk, setIsQuestionAsk] = useState(false);
  const [currQuestionInd, setCurrQuestionInd] = useState(0);

  return (
    <QueryContext.Provider
      value={{
        isQuestionAsk,
        setIsQuestionAsk,
        myFlow,
        setMyFlow,
        loading,
        setLoading,
        currQuestionInd,
        setCurrQuestionInd,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};
