import { Facebook, Linkedin, Instagram } from "lucide-react";

export function SocialLinks() {
    const links = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/share/17Ye886chQ/",
            icon: Facebook,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/autonomex-ai-2426403b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: Linkedin,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/autonomexai?igsh=ZDYzZzE1ZTk5bjJ4",
            icon: Instagram,
        },
    ];

    return (
        <div className="flex gap-3 mt-6">
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${link.name}`}
                        className="w-11 h-11 rounded-xl bg-slate-900/5 flex items-center justify-center transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-105 active:scale-95 shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        tabIndex={0}
                    >
                        <Icon size={18} strokeWidth={1.8} />
                    </a>
                );
            })}
        </div>
    );
}
