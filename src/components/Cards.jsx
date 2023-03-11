import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   return (<div>
      {characters.map(({ name, species, gender, image, id }) => <Card key={id} onClose={props.onClose} name={name} species={species} gender={gender} image={image} />)}
   </div>);
}
