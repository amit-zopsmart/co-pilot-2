import React, { createContext, useState } from 'react';

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [isQuestionAsk, setIsQuestionAsk] = useState(false);

  return (
    <QueryContext.Provider value={{ isQuestionAsk, setIsQuestionAsk }}>
      {children}
    </QueryContext.Provider>
  );
};
