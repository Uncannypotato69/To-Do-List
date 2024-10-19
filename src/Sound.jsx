import { useState, useEffect, createContext } from "react";
import useStickyState from "./components/list/useStickyState";

const SoundContext = createContext()

const SoundProvider = ({children}) => {
    const [sound, setSound] = useStickyState(true, "sound")

    function toggleSound() {
        setSound(!sound);
    }

    return (
        <SoundContext.Provider
        value={{
            sound,
            setSound,
            toggleSound
        }}
        >
            {children}
        </SoundContext.Provider>
    )
    
}

export {SoundContext, SoundProvider}
