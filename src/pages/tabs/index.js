import Tabs from '../../components/tabs';
import TabsNav from '../../components/tabs/tab-nav';
import tabsConfig from './tabs-config'

const TabsList = () => {
    return (
        <Tabs content={tabsConfig.map((tabConfig) => (
            <>
                {tabConfig.content}
            </>
        ))}>
            {tabsConfig.map((tabConfig) => (
                <TabsNav title={tabConfig.title}/>
            ))}
        </Tabs>
    )
}

export default TabsList;