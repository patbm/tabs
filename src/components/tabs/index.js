import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ content, children, defaultTab }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleActiveTab = (tabIndex) => {
        setActiveTab(tabIndex !== activeTab ? tabIndex : activeTab);
    };

    const renderContent = () => (
        content.map((contents, contentsIndex) => (
            <li
                key={contentsIndex.toString()}
                className={`tabs-container__content__item ${contentsIndex === activeTab ? 'tabs-container__content__item--active' : ''}`}
            >
                {contents}
            </li>
        ))
    );

    const renderTab = () => (
        children.map((child, index) => React.cloneElement(child, {
            changeActiveTab: handleActiveTab,
            tabIndex: index,
            key: index,
            isActive: index === activeTab,
        }))
    );

    return (
        <div className="tabs-container">
            <ul className="tabs-container__nav">
                {renderTab()}
            </ul>
            <ul className="tabs-container__content">
                {renderContent()}
            </ul>
        </div>
    );
};

Tabs.propTypes = {
    defaultTab: PropTypes.number,
    children: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
    defaultTab: 0,
};

export default Tabs;