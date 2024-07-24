export default function Stats({ numberOfCharacters }) {
  return (
    <section className="stats">
      <Stat number={0} label="word" />
      <Stat number={numberOfCharacters} label="character" />
      <Stat number={280} label="instagram" />
      <Stat number={2200} label="facebook" />
    </section>
  );

  function Stat({ label, number }) {
    return (
      <section className="stat">
        <span className="stat__number">{number}</span>
        <h2 className="second-heading">{label}</h2>
      </section>
    );
  }
}
