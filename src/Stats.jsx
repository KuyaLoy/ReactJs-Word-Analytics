export default function Stats({
  numberOfWords,
  numberOfCharacters,
  facebookCharacterLeft,
  instagramCharacterLeft,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="word" />
      <Stat number={numberOfCharacters} label="character" />
      <Stat number={instagramCharacterLeft} label="instagram" />
      <Stat number={facebookCharacterLeft} label="facebook" />
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
