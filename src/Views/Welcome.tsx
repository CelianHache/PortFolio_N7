import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { CVSection } from "./CVSection";
import { LinkedinIcon } from "lucide-react";

interface WelcomeProps {
    title: string;
}

export const Welcome: React.FC<WelcomeProps> = (props) => {
    return (
        <Box
            w={"100%"}
            h={"100%"}
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            pr={5}
            overflowY={"auto"}
            css={{
                "&::-webkit-scrollbar": {
                    width: "10px",
                },
                "&::-webkit-scrollbar-track": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                },
            }}
        >
            <Box
                flex={{ base: 2, xl: 4 }}
                w={{ base: "100%", xl: "40%" }}
                h={{ base: "", xl: "100%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                position={{ base: "inherit", xl: "sticky" }}
                top={0}
                gap={5}
            >
                <Heading
                    color={"teal.300"}
                    font-size={"clamp(1rem, 1dvw, 1.5rem)"}
                >
                    {"Célian Hache"}
                </Heading>
                <Image
                    src="./Images/profile.png"
                    borderRadius={"full"}
                    backgroundColor={"rgba(255, 255, 255, 0.1)"}
                    blockSize={"350px"}
                    maxBlockSize={"60%"}
                />
                <Button
                    as="a"
                    href="https://www.linkedin.com/in/c%C3%A9lian-hache-2189a626a/"
                    target="_blank"
                    bgColor={"linkedin.700"}
                    color={"white"}
                    _hover={{ bgColor: "linkedin.500", color: "white" }}
                >
                    <LinkedinIcon />
                </Button>
            </Box>
            <Box
                flex={{ base: 8, xl: 6 }}
                w={{ base: "100%", xl: "60%" }}
                h={{ base: "", xl: "100%" }}
                textAlign={"left"}
            >
                <Heading
                    color={"teal.300"}
                    font-size={"clamp(1rem, 1dvw, 1.5rem)"}
                    p={5}
                >
                    {props.title}
                </Heading>
                <Box h={"80%"} w={"100%"}>
                    <Text
                        textIndent={"4rem"}
                        textAlign={"justify"}
                        fontSize={"1.2rem"}
                        p={2}
                    >
                        I am currently a computer science student at ENSEEIHT in
                        Toulouse, a prestigious engineering school specializing
                        in sciences and technology. My academic journey began in
                        the MPSI preparatory program (Mathematics, Physics, and
                        Engineering Sciences), which provided me with a solid
                        theoretical foundation. I then continued my studies at
                        the Blagnac IUT, where I specialized in computer science
                        and deepened my knowledge in programming, databases, and
                        software development.
                    </Text>
                    <Text
                        textIndent={"4rem"}
                        textAlign={"justify"}
                        fontSize={"1.2rem"}
                        p={2}
                    >
                        Since my second year at IUT, I have been working as a
                        Software Engineering Apprentice at Collins Aerospace in
                        Blagnac. Within this international company, I focused on
                        developing tools for the technical teams and integrating
                        DevSecOps practices to enhance the security and
                        efficiency of the development processes. This experience
                        allowed me to gain an in-depth understanding of the
                        technical challenges faced by high-tech companies and
                        apply the knowledge acquired during my studies.
                    </Text>
                    <Text
                        textIndent={"4rem"}
                        textAlign={"justify"}
                        fontSize={"1.2rem"}
                        p={2}
                    >
                        Outside of my academic and professional experience, my
                        interests include football, video games, photography,
                        and home automation. I am an avid football fan and enjoy
                        both watching matches and playing the sport. Photography
                        is another passion of mine, where I enjoy capturing
                        moments and experimenting with different techniques.
                        Additionally, I am fascinated by automation and home
                        technologies, particularly in the context of smart homes
                        and devices that make everyday life more efficient and
                        convenient.
                    </Text>
                    <Text
                        textIndent={"4rem"}
                        textAlign={"justify"}
                        fontSize={"1.2rem"}
                        p={2}
                    >
                        If you would like to learn more about my background or
                        my achievements, feel free to check out my CV below. You
                        will also find my contact information for any
                        professional inquiries or potential collaborations.
                    </Text>
                    <CVSection />
                </Box>
            </Box>
        </Box>
    );
};
