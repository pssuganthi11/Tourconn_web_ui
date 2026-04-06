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
          {categories.map((cat) => {
            const isActive = selected === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(isActive ? null : cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all border
                  ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-sm"
                  }
                `}
                style={isActive ? { boxShadow: "var(--search-shadow)" } : undefined}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
