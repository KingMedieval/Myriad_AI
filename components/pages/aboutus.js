import React from "react";
import { ScrollView } from "react-native";
import AboutUsCard from "../elements/aboutuscard";

const AboutUs = () => {
    return (
        <ScrollView style={{marginVertical: "2.5%"}}>
            <AboutUsCard
                name={"Wilfredo Concepcion"}
                picLink={"https://yt3.ggpht.com/ytc/AKedOLQim3NUMnD6uU0GFVhC5VvcBPdoClRhRMA0VUYc=s900-c-k-c0x00ffffff-no-rj"}
                infoText={"Hello! I am Wilfredo. I came up with the idea and helped with logic and frontend!"}
            />
            <AboutUsCard
                name={"Jiyoo Dojun"}
                picLink={"https://cdn.discordapp.com/attachments/723459526606585857/1043555893154959410/artworks-wvAqsXMv78fALLg9-6Dy4Wg-t500x500.jpg"}
                infoText={"Hello! I am Jiyoo. I worked on the front end of the app and overall UI/UX designs!"}
            />
            <AboutUsCard
                name={"Jaiden Virani"}
                picLink={"https://cdn.discordapp.com/attachments/723459526606585857/1043884665297191003/Dareharu_Karma_MV_-_YouTube_1080p.mp4_20200301_221148.397.jpeg"}
                infoText={"Hello! I am Jaiden. I helped with the logic behind the code!"}
            />
        </ScrollView>
    )
};

export default AboutUs;