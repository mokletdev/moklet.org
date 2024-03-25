import { Session } from "next-auth";
import Link from "next/link";
import { IoIosChatboxes } from "react-icons/io";

type navbarParam = {
  nav: boolean;
   session: Session | null;
};
export function Sidebar({nav, session}: navbarParam) {
  return (
    <aside
      id="sidebar"
      className={`fixed ${
        nav ? "w-64" : "w-0 opacity-0"
      } left-0 top-0 z-20 flex h-full flex-shrink-0 flex-col pt-16 transition-all duration-300 lg:w-64 lg:opacity-100`}
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
          <div className="flex-1 space-y-1 divide-y bg-white px-3">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  href="/admin"
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100"
                >
                  <svg
                    className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/registrations"
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                >
                  <IoIosChatboxes className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Registrations
                  </span>
                </Link>
              </li>
              {session?.user?.role == "SuperAdmin" ? (
              <li>
                <Link
                  href="/admin/users"
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Admin Users
                  </span>
                </Link>
              </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
