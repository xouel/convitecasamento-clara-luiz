import type { LucideIcon } from "lucide-react";

interface NavigationButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function NavigationButton({
  href,
  icon: Icon,
  label,
}: NavigationButtonProps) {
  const isPlaceholder = !href || href.startsWith("[A CONFIRMAR");
  const targetHref = isPlaceholder ? "#" : href;

  return (
    <a
      href={targetHref}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      className="flex flex-col items-center justify-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl p-0.5"
      aria-label={label}
    >
      {/* Círculo marrom escuro com acabamento de papelaria fina */}
      <div className="relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B3F2A] group-hover:bg-[#542F1E] active:scale-95 transition-all duration-200 ease-editorial flex items-center justify-center shadow-[0_3px_10px_rgba(107,63,42,0.2)] ring-1 ring-white/25 will-change-transform transform-gpu">
        <Icon className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#FAF6F0] stroke-[1.8] transition-transform duration-200 group-hover:scale-105" />
      </div>

      {/* Rótulo em maiúsculas compacto e legível */}
      <span className="font-body text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-semibold text-[#3A2A22] tracking-[0.06em] mt-1.5 text-center max-w-[84px] sm:max-w-[96px] leading-tight uppercase opacity-90 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  );
}
