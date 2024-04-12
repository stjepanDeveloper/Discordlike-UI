// Sidebar.js

import { IoMdPersonAdd, IoIosChatbubbles } from 'react-icons/io';  // Icons for adding friends and chat
import { MdSettings, MdGames } from 'react-icons/md';  // Icons for settings and games
import { FaHeadset } from 'react-icons/fa'; // Icons for chat


const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-purple-500 text-white">

        {/* Icons for the sidebar */}
        <SideBarIcon icon={<IoIosChatbubbles size="28" />} text="Chat" />
        <Divider />
        <SideBarIcon icon={<MdGames size="28" />} text="Games" />
        <SideBarIcon icon={<FaHeadset size="28" />} text="Voice" />
        <Divider />
        <SideBarIcon icon={<IoMdPersonAdd size="28" />} text="Add Friend" />
        <SideBarIcon icon={<MdSettings size="28" />} text="Settings" />

    </div>
    )
    

};
// Icon and tooltip grouping
const SideBarIcon = ({ icon, text = 'tooltip :))))' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;