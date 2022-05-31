

import ItemList from './ItemList'

 const Content = ({
    items, 
    handleCheck, 
    handleDelete 
}) => {
   

    return (
        <>
            {items.length ? (
            <ItemList 
                items = {items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}/>
            ) : (<p>No items to show</p>)}
        </>
    )
}

export default Content