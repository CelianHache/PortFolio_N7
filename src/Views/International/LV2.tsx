import { Box, Heading, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface LV2Props {
    title: string;
}

export const LV2: React.FC<LV2Props> = (props) => {
    return (
        <Box w={"100%"} h={"100%"} display={"flex"}>
            <Box flex={1} w={"50%"} h={"100%"} textAlign={"left"} p={10}>
                <Heading color={"white"} size={"xl"} p={5}>{props.title}</Heading>
                <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
                <SkeletonText mt='10' noOfLines={5} spacing='4' skeletonHeight='2' />
            </Box>
            <Box flex={1} w={"50%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>

            </Box>
        </Box>
    )
}