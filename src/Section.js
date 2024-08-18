import { useContext } from "react";
import { levelContext, myContext } from "./LevelContext";

const Section = ({ level, children }) => {   
    const obj = useContext(myContext);
    console.log(obj);
    return (
        <section>
            <levelContext.Provider value={level}>
                {children}
            </levelContext.Provider>
        </section>
    )
}

export default Section;