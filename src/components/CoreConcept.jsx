export default function CoreConcept({ image, title, discription }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{discription}</p>
    </li>
  );
}
