type HomeCardProps = {
  title: string;
  description: string;
};

export default function HomeCard({ title, description }: HomeCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
