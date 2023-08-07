import classes from "../styles/Header.module.scss";
import { MdNotifications } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
            updateGreeting();
        }, 1000); // Update the date and greeting every second (1000ms)

        // Cleanup function to stop the interval when the component unmounts
        return () => clearInterval(interval);
    });

    useEffect(() => {
        updateGreeting();
    }); // Run the initial updateGreeting when the component mounts

    const updateGreeting = () => {
        const currentHour = currentDate.getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting("Good Morning!");
        } else if (currentHour >= 12 && currentHour < 17) {
            setGreeting("Good Afternoon!");
        } else {
            setGreeting("Good Evening!");
        }
    };

    // Function to format the date in the desired format
    const formatDate = (date) => {
        const options = {
            day: "2-digit",
            month: "short",
            year: "numeric",
        };

        const formattedDate = date.toLocaleString("en-IN", options);
        return formattedDate.replace(/-/g, " "); // Remove all dashes from the formatted date
    };

    const formattedDate = formatDate(currentDate);

    return (
        <div className={classes.rootHeader}>
            <div className={classes.greet}>
                <p className={classes.greeting}>{greeting}</p>

                <div className={classes.time}>
                    <span>{formattedDate}</span>
                    <span>{currentDate.toLocaleTimeString()}</span>
                </div>
            </div>

            <div className={classes.functionalities}>
                <div className={classes.search}>
                    <div className={classes.searchbar}>
                        <RiSearchLine
                            className={classes.searchIcon}
                            color="#4371CB80"
                            size={30}
                        />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className={classes.notifications}>
                    <MdNotifications size={40} color="#0d30ac" />
                </div>
            </div>
        </div>
    );
};

export default Header;
