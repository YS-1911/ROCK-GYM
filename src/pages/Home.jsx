import React from "react";
// Importing styles for the Home page
import "../css/style.css";
// Importing nav component
import Nav from "../components/nav.jsx";
// Importing various components used in the Home page
import Header from '../components/header.jsx';
import TimeWork from '../components/timework.jsx';
import HowitWorks from '../components/HowitWorks.jsx';
import UpgradeYourFitness from '../components/Upgrade_your_fitness.jsx';
import Customers from '../components/customers.jsx';
import Articleshome from '../components/articleshome.jsx';
import UpgradeWithUs from '../components/upgrade_with_us.jsx';
// Importing footer component
import Footer from "../components/footer.jsx";
// Importing NavLink for navigation
import { NavLink } from "react-router";
// Importing AOS (Animate On Scroll) library for animations
import AOS from "aos";
import "aos/dist/aos.css";

// ..
AOS.init({
    once: true
});
const Home = () => {
    return (
        <>
            <>
                {/* <Nav /> */}
                <Nav />
                {/* ? header */}
                <Header />
                {/* ? time work */}
                <TimeWork />
                {/* ? How it works */}
                <HowitWorks />
                {/* ? Upgrade your fitness */}
                <UpgradeYourFitness />
                <>
                    {/* ? customers  */}
                    <Customers />
                    {/* ? articleshome */}
                    <Articleshome />
                    {/* ? upgrade with us */}
                    <UpgradeWithUs />
                    {/* footer */}
                    <Footer />
                </>
            </>
        </>
    );
};

export default Home;
