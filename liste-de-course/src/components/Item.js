import { FaTimes } from 'react-icons/fa'

const Item = ({ item }) => {
    return (
        <div className='item' 
        style={{position:'relative', 
        background: 
            item.wanted ? 'linear-gradient(to right bottom,green,lightgreen)' : 'linear-gradient(to right bottom,red,orange)'
        }}>
            <FaTimes style={{position: 'absolute', right:'5px', top:'5px', cursor: 'pointer'}}/>
            <div className='left-container'>
                <img alt="item-image" src={item.url}/>
            </div>
            <div className='right-container'>
                <div className='item-name'>{item.name}</div>
                <div className='item-category'>{item.category}</div>
                <div className='item-quantities-container'>
                    <div className='item-quantity-having'>J'ai: {item.quantityAlreadyHave}</div>
                    <div className='item-quantity-needed'>Besoin: {item.quantityNeeded}</div>
                </div>
            </div>
        </div>
  )
}

export default Item