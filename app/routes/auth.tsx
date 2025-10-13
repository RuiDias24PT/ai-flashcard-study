import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "StudyAI | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next = location.search.split("next=")[1] || "/";

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <section className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Welcome
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Log in to continue your job journey
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {isLoading ? (
            <button
              disabled
              className="flex justify-center items-center gap-2 w-full rounded-xl bg-gray-200 py-3 font-medium text-gray-700 shadow-inner animate-pulse"
            >
              Signing you in...
            </button>
          ) : (
            <button
              onClick={auth.signIn}
              className={`w-full rounded-xl py-3 font-semibold shadow-md transition-all duration-300 ${"bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"}`}
            >
              Log in
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Auth;
