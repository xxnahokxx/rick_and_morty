import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   return (<div>
      {characters.map(({ name, species, gender, image, id }) => <Card id={id}  key={id} onClose={()=>props.onClose(id)} name={name} species={species} gender={gender} image={image} />)}
   </div>);
}
