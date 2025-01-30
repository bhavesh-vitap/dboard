// import Image from "next/image";
// import SidebarSection from "./SidebarSection";

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0 font-[Rhymes]">
//       {/* Logo Section */}
//       <div className="flex items-center justify-center py-4 border-b border-gray-700">
//         <Image src="/logo.png" alt="Logo" width={40} height={40} />
//       </div>

//       {/* Sidebar Sections */}
//       <nav className="p-4">
//         <SidebarSection title="Barclays" items={["Card Enrollments", "Pre Screens"]} />
//         <SidebarSection title="Epsilon" items={["Loyalty Enrollments", "Transactions", "Points", "Profile/Tier Update"]} />
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import Image from "next/image";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0 font-[Rhymes]">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-4 border-b border-gray-700">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Sidebar Sections */}
      <nav className="p-4">
        <SidebarSection
          title="Barclays"
          items={[
            {
              label: "Card Enrollments",
              link: "/vendors/barclays/card-enrollments",
            },
            // { label: "Pre Screens", link: "/barclays/pre-screens" }
          ]}
        />
        <SidebarSection
          title="Epsilon"
          items={[
            {
              label: "Loyalty Enrollments",
              link: "/vendors/epsilon/loyalty-enrollments",
            },
            // { label: "Transactions", link: "/epsilon/transactions" },
            // { label: "Points", link: "/epsilon/points" },
            // { label: "Profile/Tier Update", link: "/epsilon/profile-tier-update" }
          ]}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
