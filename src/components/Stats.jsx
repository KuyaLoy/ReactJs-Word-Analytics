export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="word" />
      <Stat number={stats.numberOfCharacters} label="character" />
      <Stat number={stats.instagramCharacterLeft} label="instagram" />
      <Stat number={stats.facebookCharacterLeft} label="facebook" />
    </section>
  );

  function Stat({ label, number }) {
    return (
      <section className="stat">
        <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
          {number}
        </span>
        <h2 className="second-heading">{label}</h2>
      </section>
    );
  }
}
