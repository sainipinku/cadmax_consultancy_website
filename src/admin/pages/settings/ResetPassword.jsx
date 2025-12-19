const ResetPassword = () => {
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
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700">
            Profile Update
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-md border border-blue-500 text-blue-600 bg-blue-50">
            Reset Password
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title */}
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              Reset Password
            </h2>
            <p className="text-sm text-slate-500">
              Manage your account security by updating your password.
            </p>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
