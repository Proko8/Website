import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
    const [ ] = useState([

    ]);
    return ( <Context.Provider value={<div></div>}>
        {props.children}
    </Context.Provider>
    );
}
 
export default ContextProvider;
