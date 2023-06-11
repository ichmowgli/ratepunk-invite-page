"use client";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <a
      href="#"
      className="font-regular block py-2 md:inline-block md:py-2.5 xl:px-4 2xl:text-xl"
    >
      {children}
    </a>
  );
};

export default NavItem;
