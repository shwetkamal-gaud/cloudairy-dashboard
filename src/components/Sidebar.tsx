import { Avatar, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Add, Folder, Home, Star, AccessTime, Delete, Settings, AddBoxSharp, AddBoxRounded } from "@mui/icons-material";
import ArrowUPDownIcon from './SVG/ArrowUPDownIcon'
import UserAddIcon from "./SVG/UserAddIcon";
import HomeIcon from "./SVG/HomeIcon";
import RecentIcon from "./SVG/RecentIcon";
import FavIcon from "./SVG/FavIcon";
import DocIcon from "./SVG/DocIcon";
import SharedIcon from "./SVG/SharedIcon";
import Logo from "./SVG/Logo";
import PinIcon from "./SVG/PinIcon";
import MenuIcon from "./SVG/MenuIcon";
import TempIcon from "./SVG/TempIcon";
const Sidebar = () => {
    const tabs = [
        {
            tab: 'Home',
            icon: <HomeIcon />
        },
        {
            tab: 'Recent',
            icon: <RecentIcon />
        },
        {
            tab: 'Favorites',
            icon: <FavIcon />
        },
        {
            tab: 'My Documents',
            icon: <DocIcon />
        },
        {
            tab: 'Shared With me',
            icon: <SharedIcon />
        },
    ]
    return (
        <div className="flex w-full">
            <div className="flex flex-col items-center justify-between ">
                <div className="mt-10 flex flex-col p-1 items-center">
                    <Button><AddBoxRounded /></Button>
                    <span className="text-xs text-center">Create New</span>
                </div>
                <div className="flex flex-col p-1 items-center gap-3">
                    <div className="border-1 p-1 rounded-lg border-[#6762FE]">
                        <img src="/M.png" className="" height={25} width={25} />
                    </div>
                    <button className="p-2 border border-gray-200 rounded-lg border-[#0087A74D] bg-[#E5FAFF]">MT</button>
                    <div className="border-b flex flex-col gap-2 p-2">
                        {Array(9).fill(0).map((item) => {
                            return (
                                <img src="img.png" className="rounded-lg h-10 w-10" />
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col p-1 gap-2">
                        <div className="flex flex-col items-center">
                            <TempIcon/>
                            Template
                        </div>
                    <div className="flex flex-col items-center">
                        <Settings />
                        Settings
                    </div>
                </div>
            </div>
            <div className="h-screen bg-white w-full shadow-md flex flex-col p-2">

                <div className="flex items-center justify-between p-2">
                    <h1 className="text-lg font-semibold flex items-center gap-1"><Logo />Cloudairy</h1>
                </div>
                <div className="flex flex-col border-1 rounded-md border-[#E1E1E1] bg-[#FAFAFA]">
                    <div className="p-2 flex  items-center justify-between ">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium">Alexandra’s Workspace</p>
                            <span className="text-xs text-gray-500">Business</span>
                        </div>
                        <ArrowUPDownIcon />
                    </div>
                    <div className="p-2 border-t-1 font-meduim  border-[#E1E1E1] flex gap-1 items-center w-full"><UserAddIcon /> Invite Members</div>
                </div>
                <List>
                    {tabs.map((item, idx) => {
                        return (
                            <ListItem key={idx} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.tab} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                <h2 className="text-sm font-semibold border-b flex justify-between items-center border-[#EEEEEE] p-1">Pinned Spaces <Add /></h2>
                <div>
                    {["Alexandra’s Project", "My Project 1"].map((project) => (
                        <div key={project} >
                            <li className="flex justify-between p-1 items-center">
                                <div className="flex gap-2 items-center"><PinIcon />
                                    <span>{project}</span>
                                </div>
                                <MenuIcon />
                            </li>
                        </div>
                    ))}
                </div>
                <h2 className="text-sm font-semibold border-b border-[#EEEEEE] p-1">Spaces</h2>
                <List disablePadding>
                    {["Alexandra’s Project", "My Project 1", "My Project 2"].map((project) => (
                        <li key={project} >
                            <li className="flex justify-between p-1 items-center">
                                <div className="flex gap-2 items-center"><PinIcon />
                                    <span>{project}</span>
                                </div>
                                <MenuIcon />
                            </li>
                        </li>
                    ))}
                </List>
                <div className="mt-auto">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon><Delete /></ListItemIcon>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
