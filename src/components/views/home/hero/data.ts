import { SlideData } from "@/interface";
import herobag1 from "../../../assets/images/home/hero/hbag1.jpg";
import herobag2 from "../../../assets/images/home/hero/hbag2.jpg";
import herobag3 from "../../../assets/images/home/hero/hbag3.jpg";
import herobag4 from "../../../assets/images/home/hero/hbag4.jpg";
import herobag5 from "../../../assets/images/home/hero/hbag5.jpg";

export const slideData: SlideData[] = [
    {
        src: herobag1,
        alt: "Slide 1",
        text: {
            sub_Header: "BACK IN STOCK",
            heading: "Tote-ally Amazing",
            paragraph: "Our classic tote is a fabulous all-rounder ",
            button: "SHOP NOW",
        },
        href: "/collections/totebags",
    },
    {
        src: herobag2,
        alt: "Slide 2",
        text: {
            sub_Header: "YOUR GO-TO",
            heading: "Hot In The City",
            paragraph: "Discover our range of womens purses",
            button: "SHOP THE COLORS",
        },
        href: "/collections/leatherbags",
    },
    {
        src: herobag3,
        alt: "Slide 3",
        text: {
            sub_Header: "ELEGANT LOOK",
            heading: "Shining In Black",
            paragraph: "Elevate your style with our black handbag",
            button: "VIEW COLLECTION",
        },
        href: "/collections/shoulderbags",
    },
    {
        src: herobag4,
        alt: "Slide 4",
        text: {
            sub_Header: "FABULOUS CLUTCHES",
            heading: "Check In Blue",
            paragraph: "Our timeless purses are perfect for any occasion",
            button: "GET YOURS",
        },
        href: "/collections/clutches",
    },
    {
        src: herobag5,
        alt: "Slide 5",
        text: {
            sub_Header: "SUNNY VIBES",
            heading: "Mellow In Yellow",
            paragraph: "Add a dash of sunshine to your outfit",
            button: "EXPLORE MORE",
        },
        href: "/collections/crossbodybags",
    },
];