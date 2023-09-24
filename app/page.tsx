import React from "react";
import {radioList} from "@/app/radio";

export default function Home() {
  return (
      <main>
          <div className="bg-gray-500">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="sr-only">Products</h2>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 xl:gap-x-8">
                      {radioList.map(({name}) => {
                          return (
                              <div className="rounded-lg bg-gray-200 hover:bg-gray-400 h-20 w-36 text-center space-x-2 cursor-pointer">
                                      {name}
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
      </main>
  );
}
