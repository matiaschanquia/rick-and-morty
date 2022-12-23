import Card from './Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={style.containerCards}>
         {
            characters.map(character => (
               <Card key={character.name} name={character.name} species={character.species} gender={character.gender} image={character.image} onClose={props.onClose} id={character.id}/>
            ))
         }
      </div>
   );
}
