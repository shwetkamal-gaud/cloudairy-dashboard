import { Button, Card, CardContent, Typography, Grid, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { ArrowRight, ArrowRightAltOutlined, ArrowRightOutlined } from "@mui/icons-material";
import ArrowIcon from "./SVG/ArrowIcon";

const MainSection = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="p-4 bg-white shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <Typography variant="h6" className="font-semibold">
                    Explore Our Versatile Templates
                </Typography>
                <Button variant="text" color="primary" className="text-blue-500">
                    VIEW ALL →
                </Button>
            </div>
            <div className="flex gap-4 overflow-x-auto p-2">
                <div className="flex flex-col gap-2">
                    <Button variant="outlined" className="text-blue-500  border-blue-500">
                        <span className="text-lg p-2 ">+ New Cloudchart</span>
                    </Button>
                    <Button variant="outlined" className="text-blue-500  border-blue-500">
                        <span className="text-lg  p-2 ">+ New Cloudolab</span>
                    </Button>
                </div>
                {[...Array(5)].map((_, index) => (
                    <div className="flex flex-col">
                        <Card key={index} className="min-w-[150px] shadow-md">
                            <CardContent className="flex flex-col items-center">
                                <img src="/mindmap.png" alt="Mindmap" className="w-16 h-16" />
                            </CardContent>
                        </Card>
                        <Typography variant="caption" className="mt-1">Mindmap</Typography>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <Typography variant="h6" className="font-semibold mb-2">
                    Boards in Alexander's Space
                </Typography>
                <Grid container spacing={2}>
                    {[...Array(10)].map((_, index) => (

                        <Card key={index} className="relative shadow-md" style={{ padding: 0 }}>
                            <CardContent className="flex flex-col gap-2" style={{ padding: 0 }}>
                                <div className="bg-gray-200  w-full px-4 py-2">
                                    <img src="/map.png" width={300} height={300} alt="Board Thumbnail" className="w-44 h-30" />
                                </div>
                                <Typography variant="body2" className=" px-2 font-semibold flex justify-bewteen items-center">
                                    Customer Journey Map
                                    <IconButton className="absolute" onClick={handleClick}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                        <MenuItem onClick={handleClose}>Rename</MenuItem>
                                        <MenuItem onClick={handleClose}>Move to</MenuItem>
                                        <MenuItem onClick={handleClose}>Board Details</MenuItem>
                                        <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                                        <MenuItem onClick={handleClose}>Share</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                                    </Menu>
                                </Typography>
                                <Typography variant="caption" className="px-2 flex gap-1 items-center" color="textSecondary">
                                    Team name <ArrowIcon /> {" "}Project 1
                                </Typography>
                                <Typography variant="caption" className="px-2" color="textSecondary">
                                    2 days ago
                                </Typography>
                            </CardContent>
                        </Card>

                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default MainSection;
