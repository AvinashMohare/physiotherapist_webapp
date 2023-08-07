import classes from "./Home.module.scss";
import Header from "../../constant_components/header";
import Profile from "../../constant_components/profile";
import SideBar from "../../constant_components/sideBar";
import { MdLogout } from "react-icons/md";

import Settings from "../Settings/settings";

function Home(props) {
    return (
        <div className="App">
            <div className={classes.root}>
                <div className={classes.left}>
                    <div className={classes.profile}>
                        <Profile />
                    </div>

                    <div className={classes.sideBar}>
                        <SideBar />
                    </div>

                    <div className={classes.logout}>
                        <div className={classes.button}>
                            <div className={classes.icon}>
                                <MdLogout size={35} color="#0D30AC" />
                            </div>
                            <div className={classes.option}>
                                <span>Log Out</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.top}>
                        <Header />
                    </div>
                    <div className={classes.bottom}>
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
