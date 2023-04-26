
const CategoryItem = (props) => {
const {title, imageUrl} = props.category;

    return (
    // <div className="category-container col-md-4">
        <div className="category-body-container" style={{backgroundImage: `url(${imageUrl})`}}>
            {/* <img src={imageUrl} style={{backgroundImage: `url(${imageUrl})`}}></img> */}
            <h2>{title}</h2>
            <p>Shop Now</p>
        </div>
    // </div>
    )
}


export default CategoryItem;