import { useState } from "react";
import { sideMenuForAccordian } from "./sidemenu";
import { getMenuById } from "./accordianHelper";


const useAccordian = () => {
    const [toggle, setToggle] = useState<number | null>(null);

    const menu = getMenuById(
        sideMenuForAccordian,
        toggle
    );
    const handleToggleOnOff = (id: number) => {
        setToggle((prev) =>
            prev === id ? null : id
        );
    };
    const handleNavigateToPath = () => {

    }

    return {
        handleToggleOnOff,
        toggle,
        handleNavigateToPath
    };
};

export default useAccordian;