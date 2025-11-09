import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradientMI" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#2a75bb;stop-opacity:1" />{" "}
                <stop
                  offset="100%"
                  style="stop-color:#4a4e69;stop-opacity:1"
                />{" "}
              </linearGradient>
            </defs>

            <g id="Logo_Icon">
              <path
                d="M50 20C40 20 30 30 30 40V160C30 170 40 180 50 180H40C35 180 30 175 30 170V30C30 25 35 20 40 20H50Z"
                fill="#4a4e69"
              />

              <path
                d="M150 20C160 20 170 30 170 40V160C170 170 160 180 150 180H160C165 180 170 175 170 170V30C170 25 165 20 160 20H150Z"
                fill="#2a75bb"
                transform="scale(-1, 1) translate(-200, 0)"
              />

              <text
                x="58"
                y="125"
                font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                font-size="90"
                font-weight="700"
                fill="url(#gradientMI)"
              >
                M
              </text>

              <text
                x="135"
                y="125"
                font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                font-size="90"
                font-weight="700"
                fill="#4a4e69"
              >
                I
              </text>
            </g>

            <text
              x="100"
              y="230"
              text-anchor="middle"
              font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              font-size="20"
              font-weight="600"
              fill="#1b2a49"
            >
              Mohammed Ibrahim
            </text>

            <text
              x="100"
              y="255"
              text-anchor="middle"
              font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              font-size="14"
              fill="#6c757d"
            >
              SOFTWARE ENGINEER
            </text>
          </svg>
        </h1>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              {t("nav.home")}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              {t("nav.about")}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              {t("nav.projects")}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              {t("nav.contact")}
            </Button>
          </div>

          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};
