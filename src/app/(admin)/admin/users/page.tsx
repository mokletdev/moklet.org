import React from "react";
import { $Enums } from "@prisma/client";
import { findAllUsers } from "@/utils/database/user.query";

interface User {
  id: string;
  name: string;
  email: string;
  role: $Enums.Roles;
  user_pic: string;
}

interface UsersPromp {
  users: User[];
}

interface UsersPageProps {
  users: User[];
}

export default async function UsersPage() {
  const users: User[] = await findAllUsers();
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user: User) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={`/admin/users/${user.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    {user.name}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
