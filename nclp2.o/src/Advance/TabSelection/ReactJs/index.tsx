import { tabOptions as Tab } from './tabOption'
import { useTab } from './useTab'
import './index.css'


const TabSelection = () => {

    const { activeTab, handleActiveTab } = useTab()

    const filteredTab = activeTab !== 'all' ? Tab.filter((tabdetails) => tabdetails.id === activeTab) : Tab;

    return (
        <div className="mainContainer">
            <h1 className="h1tag">Component contains multiple tab on each tab selection a pannel open.</h1>
            <div className="tabcontainer">
                <div className={activeTab ? 'tab active' : 'tab'} key={'all'} onClick={() => handleActiveTab('all')}>{'All'}</div>
                {Tab.map((tabs) => (
                    <div className={activeTab ? 'tab active' : 'tab'} key={tabs.id} onClick={() => handleActiveTab(tabs.id)}>{tabs.title}</div>
                ))}
            </div>
            {filteredTab.map((details) => (
                <div className='tabdetailscard'>
                    <div className='details'>
                        <p className='tabtype'>{details.tabType}</p>
                        <p className='tabtitle'>{details.title}</p>
                        <p className='tabdetails'>{details.details}</p>
                        <p className='tagbadge'>
                            {details.tags.map((tags) => (
                                <p>{tags}</p>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>

    )
}
export default TabSelection