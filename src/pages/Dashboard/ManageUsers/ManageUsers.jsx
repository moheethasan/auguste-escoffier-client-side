import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_apiUrl}/users`);
    return res.json();
  });

  const handleRoleUpdate = (user, role) => {
    const updatedUser = {
      role: role,
    };

    fetch(`${import.meta.env.VITE_apiUrl}/users/role/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(
            "Done!",
            `The role of ${user.name} has been updated`,
            "success"
          );
        }
      });
  };

  return (
    <div className="w-full xl:w-11/12 mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Name</th>
              <th className="text-start">Email</th>
              <th className="text-start">Role</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex gap-2">
                  <button
                    disabled={user.role === "instructor" ? true : false}
                    onClick={() => handleRoleUpdate(user, "instructor")}
                    className="btn btn-accent text-white bg-lime-500 border-0 hover:bg-lime-600"
                  >
                    Make Instructor
                  </button>
                  <button
                    disabled={user.role === "admin" ? true : false}
                    onClick={() => handleRoleUpdate(user, "admin")}
                    className="btn btn-accent text-white bg-lime-500 border-0 hover:bg-lime-600"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
