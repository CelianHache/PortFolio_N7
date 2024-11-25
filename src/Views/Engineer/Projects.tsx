import { Box,Button,Card,CardBody,CardFooter,CardHeader, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProjectsProps {
    title: string;
}

export const Projects: React.FC<ProjectsProps> = (props) => {
    
    return (
        <Box w={"100%"} h={"100%"} display={"flex"} 
            flexDirection={{base: "column", xl:"row"}}
            
            pr={5}
        >
                <Box h={"100%"} w={"100%"} >

                    <Heading textAlign={"left"} color={"teal.300"} font-size={"clamp(1rem, 1dvw, 1.5rem)"} p={5}>{props.title}</Heading>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                        delay: 
                            5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        style={{height: "80%", width: "100%"}}
                    >
                        <SwiperSlide>   
                            <Card 
                                h={"100%"} 
                                bgColor={"rgba(255,255,255,0.1)"} 
                                borderRadius={30} 
                                color={"white"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <CardHeader>
                                    <Heading>
                                        <br/>
                                            Lorem ipsum dolor sit amet
                                        <br/>
                                    </Heading>
                                </CardHeader>
                                <CardBody
                                    w={"80%"}
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
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>
                                        See more
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>   
                            <Card 
                                h={"100%"} 
                                bgColor={"rgba(255,255,255,0.1)"} 
                                borderRadius={30} 
                                color={"white"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <CardHeader>
                                    <Heading>
                                        <br/>
                                            Lorem ipsum dolor sit amet
                                        <br/>
                                    </Heading>
                                </CardHeader>
                                <CardBody
                                    w={"80%"}
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
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button mb={3}>
                                        See more
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>   
                            <Card 
                                h={"100%"} 
                                bgColor={"rgba(255,255,255,0.1)"} 
                                borderRadius={30} 
                                color={"white"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <CardHeader>
                                    <Heading>
                                        <br/>
                                            Lorem ipsum dolor sit amet
                                        <br/>
                                    </Heading>
                                </CardHeader>
                                <CardBody
                                    w={"80%"}
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
                                    <Text textIndent={"4rem"} textAlign={"justify"} fontSize={"1.2rem"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, risus a dignissim pulvinar, nunc urna tincidunt eros, vel tincidunt velit arcu quis nunc. Ut ac urna in eros tempor ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed laoreet, tellus nec volutpat mattis, neque tortor ullamcorper ex, eget pharetra massa mi a augue. Morbi elit orci, varius ut dignissim et, viverra dapibus tortor. Aliquam luctus viverra sapien. Sed elementum lacus nec rutrum bibendum. Curabitur porta tincidunt cursus. Etiam a consectetur massa. Donec maximus ac ipsum et tristique. Nulla consectetur quam ipsum.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button mb={3}>
                                        See more
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Box>
        </Box>
    )
}