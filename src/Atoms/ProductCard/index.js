

const ProductCard = ({image, title}) => {
    return(
        <>
        <img src = {image} alt={`${title} profile`}/>
        <h2>{title}</h2>
        </>
    )
}
export default ProductCard;