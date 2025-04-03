import { Button, TextField, Typography, Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import Gemini from "./SVG/Gemini";
import AWS from "./SVG/AWS";
import Azure from "./SVG/Azure";
import GCP from "./SVG/GCP";
import Flow from "./SVG/Flow";
import UML from "./SVG/UML";
import Daigram from "./SVG/Daigram";
import More from "./SVG/More";

const DashboardTop = () => {
    return (
        <div className="w-[100%] flex flex-col gap-4">
            <div className="flex justify-end items-center border-b border-gray-200 gap-2 p-2 rounded-md">
                <span className="bg-orange-100 p-1 rounded-lg">
                    There are <span className="font-bold">2 boards</span> left in your free plan
                </span>
                <Button variant="contained" color="warning" size="small" className="text-white">
                    Upgrade
                </Button>
                <Avatar alt="User Profile" src="/path-to-profile.jpg" />

            </div>
            <div className="px-3">

                <div className="p-4 bg-purple-100 rounded-lg flex flex-col gap-4 overflow-x-auto items-center">
                    <TextField
                        variant="outlined"
                        placeholder="Search for boards and templates"
                        size="small"
                        InputProps={{
                            startAdornment: <Search className="text-gray-400" />,
                            className: "bg-gray-100 rounded-full px-2"
                        }}
                        className="w-1/2 bg-gray-19"
                    />

                    <div className=" flex gap-6 items-start flex-wrap ">
                        {[
                            { name: "For You", icon: <Gemini /> },
                            { name: "AWS", icon: <AWS /> },
                            { name: "Azure", icon: <Azure /> },
                            { name: "GCP", icon: <GCP /> },
                            { name: "Flowchart", icon: <Flow /> },
                            { name: "UML", icon: <UML /> },
                            { name: "Diagramming", icon: <Daigram /> },
                            { name: "More", icon: <More /> }
                        ].map((item, index) => (
                            <div key={index} className={`${index === 0 ? 'bg-purple-200 bg-opacity-10 bg-blur[32px] p-2 rounde-lg' : ''}flex flex-col gap-1 items-center `}>
                                <div className="bg-white rounded-lg shadow-md p-2">{item.icon}</div>
                                <Typography variant="caption" className="mt-1">{item.name}</Typography>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardTop