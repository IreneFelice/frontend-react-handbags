import bag1 from "../../assets/bag_1.png";
import bag2 from "../../assets/bag_2.png";
import bag3 from "../../assets/bag_3.png";
import bag4 from "../../assets/bag_4.png";

function ProductItem (props){

    return (
    <article>

        {props.extraAttention && <span>{props.contentExtraAttention}</span>}

            {props.productPlace === '1' && <img src={bag1} alt="afbeelding mist"/>}
            {props.productPlace === '2' && <img src={bag2} alt="afbeelding mist"/>}
            {props.productPlace === '3' && <img src={bag3} alt="afbeelding mist"/>}
            {props.productPlace === '4' && <img src={bag4} alt="afbeelding mist"/>}

        <p>{props.productTitle}</p>
        <h4>€{props.productPrize}</h4>
        </article>)
}

export default ProductItem