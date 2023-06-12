interface SocialLinkProps {
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ children }) => {
  return (
    <a
      href="#"
      className="flex h-8 w-8 justify-center rounded-lg border border-main bg-main-blue p-2 "
    >
      {children}
    </a>
  );
};

export default SocialLink;
