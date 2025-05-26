import { ExtensionCard } from "@/components/ui/extension-card";

const extensions = [
  {
    id: "arc",
    title: "Arc",
    description:
      "Navigate your open tabs or search through your browser history.",
    iconUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Farc-icon.png&w=64&q=75",
    previewUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Farc-web.png&w=384&q=75",
    href: "https://www.raycast.com/the-browser-company/arc",
  },
  {
    id: "visual-studio-code",
    title: "Visual Studio Code",
    description:
      "Control Visual Studio Code, manage projects, and search through recently opened files.",
    iconUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Fvscode-icon.png&w=64&q=75",
    previewUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Fvscode-web.png&w=384&q=75",
    href: "https://www.raycast.com/thomas/visual-studio-code",
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "Browse, search and clone repositories, view your notifications, and manage issues.",
    iconUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Fgithub-icon.png&w=64&q=75",
    previewUrl:
      "https://www.raycast.com/_next/image?url=https%3A%2F%2Fmisc-assets.raycast.com%2Fextension-cards%2Fgithub-web.png&w=384&q=75",
    href: "https://www.raycast.com/raycast/github",
  },
];

export function ExtensionGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Raycast Extensions
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover powerful extensions that enhance your productivity and
            streamline your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {extensions.map((extension, index) => (
            <ExtensionCard
              key={extension.id}
              title={extension.title}
              description={extension.description}
              iconUrl={extension.iconUrl}
              previewUrl={extension.previewUrl}
              href={extension.href}
              className=""
              style={{
                animationDelay: `${0.34 + index * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/50 text-sm">
            Visit{" "}
            <a
              href="https://www.raycast.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors underline"
            >
              Raycast Store
            </a>{" "}
            to explore more extensions
          </p>
        </div>
      </div>
    </div>
  );
}
