import { categories, type PackageCategory } from "@/mockdata/packagedetails";

interface CategoryFilterProps {
  selected: PackageCategory | null;
  onSelect: (cat: PackageCategory | null) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-1 text-center">
          Browse by Category
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-6">
          Select a category to filter packages
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cato) => {
            const isActive = selected === cato.id;
            return (
              <button
                key={cato.id}
                onClick={() => onSelect(isActive ? null : cato.id)}
                style={{
                  backgroundImage: `url(${cato.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`relative flex flex-col items-center justify-end w-40 h-48 p-4 rounded-2xl transition-all duration-300 overflow-hidden 
                  ${
                    isActive
                      ? "border-[#1a706d] scale-105 shadow-xl"
                      : "shadow-2xl  hover:scale-102"
                  }
                           `}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-[#1a706d]/20 pointer-events-none" />
                )}

                <div className="relative z-10 flex flex-col items-center gap-1">
                  <span
                    className={`text-sm font-bold drop-shadow-md text-white`}
                  >
                    {cato.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
