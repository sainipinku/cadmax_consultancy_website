const ProfileUpdate = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          Admin Settings
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border">
        {/* Tabs */}
        <div className="flex gap-2 border-b px-6 pt-4">
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-blue-500 text-blue-600 bg-blue-50">
            Profile Update
          </button>
          {/* <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700">
            Reset Password
          </button> */}
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter 10 digit phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
