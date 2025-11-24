import DynamicNavbar from "../../Components/DynamicNavbar/DynamicNavbar";

const menu:any = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

export default function DynamicNavbarTest() {
  return (
    <>
      <DynamicNavbar
        brand="MyWebsite"
        // logo="/logo192.png"
        menuItems={menu}
        bg="primary"
        variant="dark"
      />
    </>
  );
}
