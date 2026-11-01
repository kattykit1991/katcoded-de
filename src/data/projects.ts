import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "katcoded",
    title: "KATCODED.DE",
    shortDescription: "Mein persönliches Developer-Portfolio.",
    description:
      "Meine eigene Website, auf der ich meine Projekte, meinen Lernweg und meine Developer-Welt vorstelle.",
    categories: ["Web Apps"],
    technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
    status: "in-progress",
    published: true,
  },
  {
    id: "grimoire",
    title: "Grimoire",
    shortDescription: "Ein digitales Grimoire als Lernprojekt.",
    description:
      "Ein Webprojekt aus meiner Software-Engineering-Weiterbildung, mit dem ich die Entwicklung moderner Webanwendungen praktisch erprobe.",
    categories: ["Lernprojekte", "Web Apps"],
    technologies: [],
    status: "in-progress",
    published: true,
  },
  {
    id: "kat-create",
    title: "kat-create",
    shortDescription: "Mein eigenes CLI-Tool zum Erstellen neuer Projekte.",
    description:
      "Ein Kommandozeilen-Tool, das neue Projekte mit einer vorbereiteten Ordnerstruktur und wiederverwendbaren Vorlagen anlegt.",
    categories: ["CLI Tools"],
    technologies: ["Node.js", "TypeScript"],
    status: "in-progress",
    published: true,
  },
];
