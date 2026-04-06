"use client";

import PackageCard from "@/component/home/PageCard";

const PackageResults = ({ packages, hasSearched }: any) => {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-10">
      
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
        {hasSearched ? "Search Results" : "Popular Packages"}
      </h2>

      {/* Empty State */}
      {packages.length === 0 ? (
        <p className="text-center mt-10 text-gray-500">
          No packages found
        </p>
      ) : (
        
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-4 sm:gap-6 
          mt-6
        ">
          {packages.map((pkg: any) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PackageResults;