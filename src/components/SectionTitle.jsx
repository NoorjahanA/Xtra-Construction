// The small yellow label + big bold title, with a huge faded word behind it.
function SectionTitle({ bigWord, small, title, center, light }) {
  let className = 'section-title';
  if (center) className += ' center';
  if (light) className += ' light';

  return (
    <div className={className}>
      <span className="big-word">{bigWord}</span>
      <p className="small-label">{small}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
