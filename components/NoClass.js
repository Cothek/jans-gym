import React from "react";

function NoClass() {
  return (
    <div className="flex flex-grow flex-col place-items-center gap-3 rounded-2xl bg-white p-4 sm:p-8">
      <h2 className="text-2xl font-bold tracking-wider text-primary md:text-4xl">
        <span className="underline">No Class</span>
      </h2>
      <p className="text-xl sm:text-2xl">No scheduled class</p>
      <p className="text-xl sm:text-2xl">Contact Jan</p>
    </div>
  );
}

export default NoClass;
