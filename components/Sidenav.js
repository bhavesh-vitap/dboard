import { useState } from "react";
import Link from "next/link";

export default function Sidenav() {
  const [openView, setOpenView] = useState(null);

  const toggleView = (view) => {
    setOpenView(openView === view ? null : view);
  };

  const views = [
    {
      name: "View 1",
      subViews: [
        { name: "Sub View 1", path: "/view1/subview1" },
        { name: "Sub View 2", path: "/view1/subview2" },
      ],
    },
    {
      name: "View 2",
      subViews: [
        { name: "Sub View 3", path: "/view2/subview3" },
        { name: "Sub View 4", path: "/view2/subview4" },
      ],
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      {views.map((view, index) => (
        <div key={index}>
          <button
            onClick={() => toggleView(view.name)}
            className="w-full text-left p-2 hover:bg-gray-700"
          >
            {view.name}
          </button>
          {openView === view.name && (
            <div className="pl-4">
              {view.subViews.map((subView, subIndex) => (
                <Link key={subIndex} href={subView.path}>
                  <div className="p-2 hover:bg-gray-700 cursor-pointer">
                    {subView.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
