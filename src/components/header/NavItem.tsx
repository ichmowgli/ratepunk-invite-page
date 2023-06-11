"use client";

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <div className="font-regular block py-2 md:inline-block md:py-2.5 xl:px-4 2xl:text-xl">
      {children}
    </div>
  );
};

export default NavItem;
