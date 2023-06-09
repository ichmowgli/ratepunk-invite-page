"use client";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <div className="font-regular block py-2 md:inline-block md:px-4 md:py-2.5 2xl:text-xl">
      {children}
    </div>
  );
};

export default NavItem;
