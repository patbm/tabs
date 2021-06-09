import React from 'react';
import PropTypes from 'prop-types';

const TabNav = ({
    changeActiveTab, title, tabIndex, isActive,
}) => (
    <li
        role="presentation"
        tabIndex={tabIndex}
        onClick={() => {
            changeActiveTab(tabIndex);
        }}
        className={`tab-nav ${isActive ? 'tab-nav--active' : ''}`}
    >
        <span className="tab-nav__text">
            {title}
        </span>
    </li>
);

TabNav.propTypes = {
    changeActiveTab: PropTypes.func,
    title: PropTypes.string,
    tabIndex: PropTypes.number,
    isActive: PropTypes.bool,
};

TabNav.defaultProps = {
    changeActiveTab: null,
    title: null,
    tabIndex: null,
    isActive: false,
};

export default TabNav;