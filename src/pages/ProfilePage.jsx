import { useState } from "react";
import { FaUserCircle, FaEdit, FaLock } from "react-icons/fa";

export default function ProfilePage() {

  const [user, setUser] = useState({
    name: "Lokesh Naidu",
    email: "lokesh@gmail.com",
    phone: "+91 9876543210"
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

     

      <div className="max-w-6xl mx-auto mt-16  px-4">

        <h1 className="text-2xl py-10 font-semibold">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* PROFILE CARD */}

          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">

            <FaUserCircle className="text-7xl text-blue-500 mb-4" />

            <h2 className="text-xl font-semibold">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>

            <button
              onClick={() => setEditing(!editing)}
              className="mt-4 flex items-center gap-2 text-blue-600 text-sm"
            >
              <FaEdit />
              Edit Profile
            </button>

          </div>


          {/* PROFILE DETAILS */}

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6">

            <h3 className="text-lg font-semibold mb-6">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="text-sm text-gray-500">
                  Full Name
                </label>

                <input
                  name="name"
                  value={user.name}
                  disabled={!editing}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label className="text-sm text-gray-500">
                  Email
                </label>

                <input
                  name="email"
                  value={user.email}
                  disabled={!editing}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

              <div>

                <label className="text-sm text-gray-500">
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={user.phone}
                  disabled={!editing}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 mt-1"
                />

              </div>

            </div>

            {editing && (

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Save Changes
              </button>

            )}

          </div>


          {/* PASSWORD CARD */}

          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm p-6">

            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FaLock />
              Change Password
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input
                type="password"
                placeholder="Current Password"
                className="border rounded-lg p-3"
              />

              <input
                type="password"
                placeholder="New Password"
                className="border rounded-lg p-3"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="border rounded-lg p-3"
              />

            </div>

            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Update Password
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}