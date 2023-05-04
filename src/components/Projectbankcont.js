import React, {useContext, createContext} from "react"; 


const  ProjectBankContext = createContext() ;
function ProjectBankProvider ({children}){
    const  apiUrl = "https://enigmatic-inlet-43866.herokuapp.com"
    const  contextData = { apiUrl: apiUrl}
    return (
        <ProjectBankContext.Provider value={contextData}>
            {children}
        </ProjectBankContext.Provider>
    

    )

}
export { ProjectBankContext, ProjectBankProvider};




