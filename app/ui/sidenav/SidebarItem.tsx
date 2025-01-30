import Link from "next/link";

interface SidebarItemProps {
  label: string;
  link: string; // Add a link prop to route to the desired page
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, link }) => {
  return (
    <div className="px-3 py-1 text-gray-300 cursor-pointer hover:bg-gray-700 rounded-md">
      <Link href={link}>
        <a>{label}</a>
      </Link>
    </div>
  );
};

export default SidebarItem;
