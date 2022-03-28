import Item from "./Item"

const Items = ({ items }) => {
    return (
        <div className="items-container">
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    )
}

export default Items