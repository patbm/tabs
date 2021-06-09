import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDrinks } from "../../../../state/logic";
import { getAllDrinks } from "../../../../state/selector";
import ListItem from '../../../../components/list-item';

const Tab3Content = ({ drinks, getDrinksAction }) => {
    useEffect(() => {
        getDrinksAction();
    }, []);
    return (
        <div className="tab3">
            <h1 className='tab3__title'>Cervezas</h1>
            <ListItem data={drinks}/>
        </div>
    )
}

Tab3Content.propTypes = {
    drinks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    getDrinksAction: PropTypes.func.isRequired,
}

Tab3Content.defaultProps = {
}

const mapToStateToProps = (state) => ({
    drinks: getAllDrinks(state),
});
  
const mapDispatchToProps = (dispatch) => ({
    getDrinksAction: bindActionCreators(getDrinks, dispatch),
})

export default connect(mapToStateToProps, mapDispatchToProps)(Tab3Content);