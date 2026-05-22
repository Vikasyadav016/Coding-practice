import { useState } from "react"

export const useTab = () => {
    const [activeTab, setActiveTab] = useState<string>('');

    const handleActiveTab = (tab: string) => {
        setActiveTab(activeTab === tab ? '' : tab)
    }
    return { activeTab, handleActiveTab }
}