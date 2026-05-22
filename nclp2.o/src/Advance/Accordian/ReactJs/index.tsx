import { sideMenuForAccordian } from "./sidemenu";
import "./index.css";
import useAccordian from "./useAccordian";


const AdvanceAccordian = () => {

    const {
        handleToggleOnOff,
        toggle,
        handleNavigateToPath
    } = useAccordian();

    return (
        <div>
            <h1>
                This Components represent the advance accordian
            </h1>
            <div className="sidebarcontainer">
                {sideMenuForAccordian.map((sidemenu) => (
                    <div
                        className="paraentmenu"
                        key={sidemenu.id}
                    >
                        {/* Parent Menu */}
                        <div className="parentmenuheader">
                            <span>
                                {sidemenu.title}
                            </span>
                            {
                                sidemenu.children &&
                                sidemenu.children.length > 0 && (
                                    <span
                                        className="parentmenuicon"
                                        onClick={() =>
                                            handleToggleOnOff(sidemenu.id)
                                        }
                                    >
                                        {
                                            toggle === sidemenu.id
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                )
                            }
                        </div>
                        {/* Child Menu */}
                        {
                            toggle === sidemenu.id &&
                            sidemenu.children &&
                            sidemenu.children.length > 0 && (
                                <div className="childsidebarmenu">
                                    {sidemenu.children.map((child) => (
                                        <div
                                            className="childmenuitem"
                                            key={child.id}
                                            onClick={handleNavigateToPath}
                                        >
                                            <span className="childsidemenuicon"></span>
                                            <span>
                                                {child.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvanceAccordian;