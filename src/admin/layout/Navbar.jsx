const Navbar = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-end px-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
};

export default Navbar;
