import { OctagonAlert } from "lucide-react";

export const ErrorPage = ({ error }: { error: string | null }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <OctagonAlert size={64} />
      <h2 className="text-center  font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Oops! Something went wrong...
      </h2>
      <h2 className=" font-semibold text-lg">{error ?? "Unknown error"}</h2>
    </div>
  );
};
