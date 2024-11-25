import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

interface WelcomeProps {
    title: string;
}

export const Welcome: React.FC<WelcomeProps> = (props) => {
    return (
        <Box w={"100%"} h={"100%"} display={"flex"} 
            flexDirection={{base: "column", xl:"row"}}
            
            pr={5}
            overflowY={"auto"}
            css={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: '24px',
                },
              }}
        >
            <Box 
                flex={{base: 8, xl:6}} 
                w={{base: "100%", xl:"60%"}} 
                h={{base: "", xl:"100%"}} 
                textAlign={"left"} 
                
            >
                <Heading color={"teal.300"} font-size={"clamp(1rem, 1dvw, 1.5rem)"} p={5}>{props.title}</Heading>
                <Box
                    h={"80%"}
                    w={"100%"}
                >
                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                    </Text>
                    <br/>
                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                    </Text>
                    <br/>
                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                    </Text>
                    <br/>
                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                    </Text>
                    <br/>
                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                    </Text>
                </Box>
                
            </Box>
            <Box 
                flex={{base: 2, xl:4}} 
                w={{base: "100%", xl:"40%"}} 
                h={{base: "", xl:"100%"}}
                display={"flex"} 
                flexDirection={{base: "column-reverse", xl:"column-reverse"}}
                justifyContent={"center"} 
                alignItems={"center"}
                position={{base: "inherit", xl: "sticky"}}
                top={0}
            >
                <Image 
                    src="./Images/profile.png" 
                    borderRadius={"full"} 
                    backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                    blockSize={"350px"}
                    maxBlockSize={{base: "30%", sm: "40%", md: "40%", lg:"50%", xl: "60%"}}
                />
                <Heading color={"teal.300"} font-size={"clamp(1rem, 1dvw, 1.5rem)"} p={5}>{"Célian Hache"}</Heading>

            </Box>
        </Box>
    )
}