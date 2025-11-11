import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import {
  FaReact,
  FaVuejs,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiMysql,
  SiSqlite,
} from "react-icons/si";

export const About = () => {
  const { t } = useLanguage();

  const skills = {
    frontend: [
      { icon: <FaReact className="text-3xl" />, name: "React" },
      { icon: <FaVuejs className="text-3xl" />, name: "Vue" },
      { icon: <SiTypescript className="text-3xl" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="text-3xl" />, name: "Tailwind CSS" },
    ],
    backend: [
      { icon: <FaPhp className="text-3xl" />, name: "PHP" },
      { icon: <SiGo className="text-3xl" />, name: "Golang" },
      { icon: <FaNode className="text-3xl" />, name: "Node.js" },
      { icon: <FaLaravel className="text-3xl" />, name: "Laravel" },
      { icon: <FaDatabase className="text-3xl" />, name: "REST APIs" },
      { icon: <SiMysql className="text-3xl" />, name: "MySQL" },
      { icon: <SiSqlite className="text-3xl" />, name: "Sqlite" },
    ],
    tools: [
      { icon: <FaGitAlt className="text-3xl" />, name: "Git" },
      { icon: <FaDocker className="text-3xl" />, name: "Docker" },
    ],
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {t("about.title")}
        </h2>

        <div className="space-y-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border overflow-hidden transition-shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {t("about.education")}
            </h3>
            <p className="text-lg text-foreground">{t("about.degree")}</p>
          </Card>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground">
              {t("about.skills")}
            </h3>

            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shado">
              <h4 className="text-xl font-semibold mb-6 text-primary">
                {t("about.frontend")}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50  transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-secondary"
                  >
                    <div className="text-primary">{skill.icon}</div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-6 text-primary">
                {t("about.backend")}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50  transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-secondary "
                  >
                    <div className="text-primary">{skill.icon}</div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-6 text-primary">
                {t("about.tools")}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-secondary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-secondary"
                  >
                    <div className="text-primary">{skill.icon}</div>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
