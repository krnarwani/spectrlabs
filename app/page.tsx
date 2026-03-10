export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        
        {/* Logo / Name */}
        <h1 className="text-5xl font-bold tracking-tight">
          Spectr<span className="text-violet-500">Labs</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-400">
          Building intelligent tools for health, growth, and beyond.
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
          {[
            { name: "walnut.health", desc: "AI-powered health insights" },
            { name: "croboost.io", desc: "Growth tools powered by AI" },
            { name: "doxdrive", desc: "Your health docs, conversational" },
            { name: "growthbydesign.me", desc: "Design-led growth strategies" },
          ].map((p) => (
            <div key={p.name} className="border border-gray-800 rounded-xl p-4 hover:border-violet-500 transition">
              <p className="font-semibold text-white">{p.name}</p>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-gray-600 text-sm pt-6">
          © {new Date().getFullYear()} Spectr Labs · spectrlabs.io
        </p>
      </div>
    </main>
  );
}
