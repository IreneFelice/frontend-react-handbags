
import './Tile.css'


function TileSection (props){

    if (props.tileImage){return(<section>
       <img src={props.tileImageName} alt={props.tileTitle}/> </section>)} else if (props.tileImage === false){return(
        <section>
        <h2>{props.tileTitle}</h2><p>{props.tileContent}</p><p>{props.tileExtraParagraph1}</p>{props.tileExtraParagraph2}<p></p>
    </section>)}
}

export default TileSection



