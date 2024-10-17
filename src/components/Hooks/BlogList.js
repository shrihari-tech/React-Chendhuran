import React from "react";
import { useState } from "react";
import CardMaterial from "../CardMaterial";
function BlogList(){

    const [blogs,setBlogs]=useState([
        {
            id:1,
            image:"war.jpeg",
            name:"War",
            text:"Ukraine's Revolution of Dignity, Russia annexed Crimea from Ukraine and supported pro-Russian separatists fighting the Ukrainian military in the Donbas war. The first eight years of conflict also included naval incidents, cyberwarfare, and heightened political tensions",
            link:"https://medium.com/tag/ukraine-war"
        },
        {
            id:2,
            image:"AI.jpeg",
            name:"Trending Technology",
            text:"At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving. It also encompasses sub-fields of machine learning and deep learning, which are frequently mentioned in conjunction with artificial intelligence",
            link:"https://medium.com/tag/artificial-intelligence"
        },
        {
            id:3,
            image:"5G.jpeg",
            name:"5G Communication",
            text:"The 5th generation mobile network. It is a new global wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of network that is designed to connect virtually everyone and everything together including machines, objects, and devices",
            link:"https://medium.com/swlh/all-you-need-to-know-about-5g-4c3fc6ad7124"
        },
    ])
    console.log(blogs);
    return(
        <>
            <h1>Current Affairs Which Make History</h1>
            <div className="flexbox">
            {
                blogs.map((blog)=>(
                    <div>
                        <CardMaterial blog={blog}/>
                    </div>
                ))
            }
        </div>
        </>
        
    );
}

export default BlogList;