import React, { useState } from "react";

type Technology = {
  id: number;
  name: string;
  logo: string;
  logoColor: string;
  badge: string;
  badgeColor: string;
  description: string;
  category: string;
  level: string;
  rating: number;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    logo: "⚛",
    logoColor: "text-sky-400",
    badge: "Popular",
    badgeColor: "bg-sky-50 text-sky-500",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Vue.js",
    logo: "V",
    logoColor: "text-emerald-500",
    badge: "Versatile",
    badgeColor: "bg-emerald-50 text-emerald-500",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Svelte",
    logo: "S",
    logoColor: "text-orange-500",
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-500",
    description:
      "Cybernetically enhanced web apps with a compiler-first approach and no virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Next.js",
    logo: "N",
    logoColor: "text-black",
    badge: "",
    badgeColor: "",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Node.js",
    logo: "⬡",
    logoColor: "text-green-500",
    badge: "Backend",
    badgeColor: "bg-green-50 text-green-500",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 6,
    name: "PostgreSQL",
    logo: "P",
    logoColor: "text-blue-600",
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A powerful, open-source object-relational database system known for reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Redis",
    logo: "R",
    logoColor: "text-red-500",
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-500",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 8,
    name: "JavaScript",
    logo: "JS",
    logoColor: "text-yellow-500",
    badge: "Ultra-Popular",
    badgeColor: "bg-yellow-50 text-yellow-600",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.8,
  },
  {
    id: 9,
    name: "TypeScript",
    logo: "TS",
    logoColor: "text-blue-500",
    badge: "Essential",
    badgeColor: "bg-sky-50 text-sky-500",
    description:
      "A strongly typed programming language that builds on JavaScript for better tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 10,
    name: "Java",
    logo: "♨",
    logoColor: "text-sky-500",
    badge: "Robust",
    badgeColor: "bg-sky-50 text-sky-500",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Tailwind CSS",
    logo: "〰",
    logoColor: "text-cyan-500",
    badge: "Modern",
    badgeColor: "bg-cyan-50 text-cyan-500",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Docker",
    logo: "▰",
    logoColor: "text-blue-500",
    badge: "Containers",
    badgeColor: "bg-blue-50 text-blue-500",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.8,
  },
];

const ExploreSection: React.FC = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const exists = stack.some((item) => item.id === technology.id);

    if (!exists) {
      setStack((prev) => [...prev, technology]);
    }
  };

  const removeFromStack = (id: number) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore the{" "}
            <span className="text-fuchsia-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const added = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <article
                  key={technology.id}
                  className="flex min-h-[245px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-9 w-9 items-center justify-center text-xl font-bold ${technology.logoColor}`}
                    >
                      {technology.logo}
                    </div>

                    {technology.badge && (
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold ${technology.badgeColor}`}
                      >
                        {technology.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-bold text-slate-900">
                      {technology.name}
                    </h3>

                    <p className="text-xs leading-5 text-slate-400">
                      {technology.description}
                    </p>
                  </div>

                  
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px]">
                    <div className="flex items-center gap-4 text-slate-400">
                      <span>{technology.category}</span>
                      <span>{technology.level}</span>
                    </div>

                    <div className="flex items-center gap-1 font-medium text-slate-600">
                      <span className="text-yellow-400">★</span>
                      {technology.rating}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={() => addToStack(technology)}
                    disabled={added}
                    className={`mt-4 w-full rounded-md py-2.5 text-xs font-semibold transition ${
                      added
                        ? "cursor-not-allowed bg-slate-200 text-slate-500"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {added ? "Added to Stack" : "Add to Stack"}
                  </button>
                </article>
              );
            })}
          </div>

          
          <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <h3 className="text-sm font-bold text-slate-900">Your Stack</h3>

            <p className="mt-1 text-[11px] text-slate-400">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} ${
                    stack.length === 1 ? "technology" : "technologies"
                  } selected.`}
            </p>

            {stack.length === 0 ? (
              <div className="mt-5 flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 text-center">
                <p className="text-[11px] text-slate-400">
                  Your stack is empty
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center font-bold ${item.logoColor}`}
                      >
                        {item.logo}
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-800">
                          {item.name}
                        </p>

                        <p className="text-[10px] text-slate-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromStack(item.id)}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;