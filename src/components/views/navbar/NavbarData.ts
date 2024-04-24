//////////////// Logo ////////////////////////
interface Logo {
  text: string;
}
export const logo: Logo[] = [{ text: "GraceGrip" }];

///////// MENU BUTTONS ////////////

export const nav_buttons = [
  {
    text1: "Home",
    href1: "/",

    text2: "Shop",

    text3: "Story",
    href3: "/story",

    text4: "Blog",
    href4: "/blog",

    text5: "FAQs",
    href5: "/faqs",

    text6: "Account",
    href6: "/account",
  },
];

/////////// DROP DOWN MENU //////////////
interface Category {
  title: string;
  href: string;
  subCategories: { title: string; href: string }[];
}

// Category list on left
export const leftCategories: Category[] = [
  {
    title: "Shoulder Bags",
    href: "/collections/shoulder-bags",
    subCategories: [
      { title: "Crossbody Bags", href: "/collections/crossbody-bags" },
      { title: "Tote Bags", href: "/collections/tote-bags" },
      { title: "Backpacks", href: "/collections/backpack-bags" },
      { title: "Clearance Sale", href: "/collections/clearance" },
    ],
  },
];

// Category list on right
export const rightCategories: Category[] = [
  {
    title: "Leather Bags",
    href: "/collections/leather-bags",
    subCategories: [
      { title: "Clutches", href: "/collections/clutch-bags" },
      { title: "Straps", href: "/collections/straps" },
      { title: "New Arrivals", href: "/collections/new-arrivals" },
    ],
  },
];
