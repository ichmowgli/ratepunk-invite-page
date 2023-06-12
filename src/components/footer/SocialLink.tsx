interface SocialLinkProps {
  children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ children }) => {
  return (
    <div className="flex h-8 w-8 justify-center rounded-lg border border-main bg-main-blue p-2 ">
      {children}
    </div>
  );
};

export default SocialLink;
