import React from "react";
import PropTypes from 'prop-types';

const getAbvStyle = (abv) => {
    let style = '';
    if (abv <= 5.0) {
        style = 'yellow'; 
    } else if (abv >= 5.1 || abv === 10.0) {
        style = 'orange';
    } else if (abv > 10.0) {
        style = 'red';
    }
    return style;
}

const ListItem = ({ data }) => {
    return (
        <ul>
            {data.map((dataItem) => (
                <li key={dataItem.id} className="list-item">
                    
                    <div className="list-item__img-content">
                        <img  className="list-item__img-content__img" src={dataItem.image_url} alt={dataItem.name}/>
                    </div>
                    <div className="list-item__text">
                        <div className="list-item__text__main">
                            <div>
                                <h2 className="list-item__text__main__title">{dataItem.name}</h2>
                                <p className="list-item__text__main__desc">{dataItem.description}</p>
                            </div>
                            
                            <p className="list-item__text__main__more">
                                {`Ideal para combinar con: ${dataItem.food_pairing.map((foodP) => (
                                    foodP
                                )).join(', ')}`}
                            </p>
                        </div>

                        <div className="list-item__abv">
                            <div className={`list-item__abv__type list-item__abv__type--${getAbvStyle(dataItem.abv)}`}>{dataItem.abv}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

ListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default ListItem;