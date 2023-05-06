"use client";

import { useRouter } from "next/navigation";

export default function BackOffice() {
  const router = useRouter();
  return (
    <main className="bg-[#fcfcfc]">
      <div className="mt-8 mx-4 md:mx-12 lg:mx-32 xl:mx-40">
        <div className="grid grid-cols-2 gap-4 py-20 text-xl">
          <div className="border border-dashed rounded drop-shadow justify-center flex py-16 md:mx-16 lg:mx-32">
            <button
              className="hover:animate-pulse hover:text-[#616161]"
              type="button"
              onClick={() => router.push("/backoffice/projects")}
            >
              Projects
            </button>
          </div>
          <div className="border border-dashed rounded drop-shadow justify-center flex py-16 md:mx-16 lg:mx-32">
            <button
              className="hover:animate-pulse hover:text-[#616161]"
              type="button"
              onClick={() => router.push("/backoffice/tags")}
            >
              Tags
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
