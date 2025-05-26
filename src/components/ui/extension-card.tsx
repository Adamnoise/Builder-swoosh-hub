import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  title: string;
  description: string;
  iconUrl: string;
  previewUrl: string;
  href: string;
  className?: string;
}

const ExtensionCard = React.forwardRef<HTMLDivElement, ExtensionCardProps>(
  ({ title, description, iconUrl, previewUrl, href, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "extension-card opacity-0 transform origin-top-right",
          className,
        )}
        style={{
          animation:
            "slideIn 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 0.34s forwards",
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer"
        >
          <div className="w-[360px] relative overflow-hidden rounded-[20px] bg-gradient-to-br from-blue-600/70 to-purple-900/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_20px_3px_rgba(7,13,79,0.1),0_0_40px_20px_rgba(85,0,98,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)] cursor-pointer grid grid-rows-[1fr_auto] scroll-snap-align-end">
            <div className="self-stretch cursor-pointer grid grid-rows-[auto_1fr_auto] gap-6 px-6 pt-6">
              {/* Header with icon, title, and arrow button */}
              <div className="flex items-center gap-3 w-full cursor-pointer">
                <img
                  src={iconUrl}
                  alt={`${title} icon`}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl shadow-[0_1.189px_2.377px_0_rgba(0,0,0,0.28)] cursor-pointer border-0 -m-0.5"
                />
                <div className="flex-grow text-lg leading-[20.7px] cursor-pointer text-white font-medium">
                  {title}
                </div>
                <button
                  type="button"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-b from-white/[0.03] to-white/10 border border-gray-300/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(255,255,255,0.25),inset_0_-1px_0_0_rgba(0,0,0,0.2)] text-gray-300 cursor-pointer relative overflow-hidden p-2 transition-all duration-300"
                  aria-label="Open extension"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Description */}
              <p className="cursor-pointer font-medium leading-[25.6px] overflow-x-auto overflow-y-hidden text-white/90">
                {description}
              </p>

              {/* Separator */}
              <div className="bg-white/5 cursor-pointer h-px w-full" />
            </div>

            {/* Preview Image */}
            <img
              src={previewUrl}
              alt={`${title} preview`}
              width={360}
              height={360}
              className="w-[360px] aspect-square cursor-pointer max-w-full overflow-clip pointer-events-none border-0 text-transparent"
            />
          </div>
        </a>
      </div>
    );
  },
);

ExtensionCard.displayName = "ExtensionCard";

export { ExtensionCard };
