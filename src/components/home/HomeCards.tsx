import HomeCard from "./HomeCard";

export default function HomeCards() {
  return (
    <div>
      <HomeCard
        title="Meine Projekte"
        description="Entdecke meine Softwareprojekte."
      />

      <HomeCard title="Dev Tools" description="Meine Entwicklerwerkzeuge." />

      <HomeCard title="Über mich" description="Lerne mich kennen!" />

      <HomeCard
        title="Roadmap"
        description="Mein Weg durch die Softwareentwicklung."
      />
    </div>
  );
}
