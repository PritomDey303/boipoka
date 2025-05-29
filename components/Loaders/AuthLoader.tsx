export default function AuthLoader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen md:min-h-[50vh]">
      <div className="btn btn-circle btn-outline btn-lg animate-spin border-primary"></div>
      <p className="mt-4 text-xl font-semibold text-primary">
        Loading, please wait...
      </p>
    </div>
  );
}
