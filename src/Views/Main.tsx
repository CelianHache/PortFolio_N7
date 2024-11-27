import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Welcome } from "./Welcome";
import { Projects } from "./Engineer/Projects";
import { Productions } from "./Engineer/Productions";
import { PCE } from "./International/PCE";
import { LV2 } from "./International/LV2";
import { Internship } from "./Career/Internship";
import { PEP } from "./Career/PEP";
import { SportOtherActivities } from "./SportOtherActivities";
import { SustainabilityCivicEngagement } from "./SustainabilityCivicEngagement";
import { Project } from "./Engineer/Projects/Project";

export const Main: React.FC = () => {

    const welcome = "Welcome";
    const engineer = "Engineering course";
    const projects = "Projects";
    const productions = "Productions";
    const international = "International mobility";
    const pce = "PCE";
    const lv2 = "LV2";
    const sustainability = "Sustainability & civic engagement";
    const sport = "Sport & other activities";
    const career = "Career development";
    const internship = "Internship";
    const pep = "PEP";
    const project = "Project";


    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);
    
    const [page, setPage] = useState(welcome);
    return (
        <Box 
            w={"100%"} 
            h={"100dvh"} 
            position={"absolute"}
            left={0} 
            top={0} 
            bgGradient="linear(black, gray.800, facebook.900, linkedin.700, linkedin.500, linkedin.300)"
            display={"flex"}
            justifyContent={"center"}
            alignItems={'center'}
        >
            <Box 
                w={{base: "100%", md:"90%"}} 
                h={{base: "100%", md:"90%"}} 
                backgroundColor="rgba(26, 32, 44, 0.7)" 
                borderRadius={{base: 0, md: 30}} 
                display={"flex"} 
                justifyContent={"center"} 
                alignItems={"center"}
                flexDirection={"column"}
                p={10}
            >
                <Box 
                    w={"100%"} 
                    h={"10%"} 
                    flex={10} 
                    color={"white"}
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"start"}
                        flexDirection={"row"}
                    >
                        <Heading 
                            fontSize="clamp(1rem, 2dvw, 3rem)"
                        >
                            Portfolio.
                        </Heading>
                    </Box>
                    <Box
                        display={{base: "none", sm:"none", md: "none", lg:"none", xl:"flex"}}
                        alignItems={"center"}
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        flex={1}
                    >
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2} 
                                color={page === welcome ? "teal.300" : "white"}
                                onClick={() => setPage(welcome)}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {welcome}
                            </MenuButton>
                        </Menu>
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2}
                                color={page === projects || page === productions ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {engineer}
                            </MenuButton>
                            <MenuList 
                                backgroundColor={"gray.700"}
                            >
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === projects ? "teal.300" : "white"}
                                    onClick={() => setPage(projects)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {projects}
                                </MenuItem>
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === productions ? "teal.300" : "white"}
                                    onClick={() => setPage(productions)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {productions}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2}
                                color={page === pce || page === lv2 ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {international}
                            </MenuButton>
                            <MenuList 
                                backgroundColor={"gray.700"}
                            >
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === pce ? "teal.300" : "white"}
                                    onClick={() => setPage(pce)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {pce}
                                </MenuItem>
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === lv2 ? "teal.300" : "white"}
                                    onClick={() => setPage(lv2)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {lv2}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2}
                                color={page === sustainability ? "teal.300" : "white"}
                                onClick={() => setPage(sustainability)}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {sustainability}
                            </MenuButton>
                        </Menu>
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2}
                                color={page === sport ? "teal.300" : "white"}
                                onClick={() => setPage(sport)}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {sport}
                            </MenuButton>
                        </Menu>
                        <Menu>
                            <MenuButton 
                                flex={1} 
                                fontWeight={"bold"} 
                                textAlign={"center"}
                                fontSize="clamp(1rem, 1dvw, 1.5rem)" 
                                ml={2} 
                                mr={2}
                                color={page === internship || page === pep ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                            >
                                {career}
                            </MenuButton>

                            <MenuList 
                                backgroundColor={"gray.700"}
                            >
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === internship ? "teal.300" : "white"}
                                    onClick={() => setPage(internship)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {internship}
                                </MenuItem>
                                <MenuItem 
                                    backgroundColor={"gray.700"}
                                    color={page === pep ? "teal.300" : "white"}
                                    onClick={() => setPage(pep)}
                                    border={"none"}
                                    _hover={{border: "none"}}
                                    _focus={{outline: "none"}} 
                                >
                                    {pep}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box
                        display={{base: "flex", sm:"flex", md: "flex", lg:"flex", xl:"none"}}
                        alignItems={"center"}
                        flexDirection={"row"}
                        justifyContent={"end"}
                        flex={1}
                    ><IconButton
                    ref={btnRef}
                    aria-label="Menu"
                    icon={<HamburgerIcon boxSize={"6"} />}
                    onClick={onOpen}
                  />
                  <Drawer
                    isOpen={isOpen}
                    placement="right" 
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent bg="gray.700" color="white">
                      <DrawerCloseButton />
                      <DrawerHeader>Navigation</DrawerHeader>
            
                      <DrawerBody>
                        <Menu >
                          <Accordion allowToggle w={"100%"}>
                            <VStack>
                              <MenuButton
                                color={page === welcome ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                                onClick={() => {
                                  setPage(welcome);
                                  onClose();
                                }}
                                w={"100%"}
                              >
                                {welcome}
                              </MenuButton>
                              <AccordionItem border={"none"}>
                                <AccordionButton
                                  color={page === projects || page === productions ? "teal.300" : "white"}
                                  border={"none"}
                                  _hover={{border: "none", color: "teal.100"}}
                                  _focus={{outline: "none"}} 
                                >
                                  {engineer}
                                  <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel flexDirection={"column"}>
                                  <MenuButton
                                    color={page === projects ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(projects);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {projects}
                                  </MenuButton>
                    
                                  <MenuButton
                                    color={page === productions ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(productions);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {productions}
                                  </MenuButton>
                                  </AccordionPanel>
                              </AccordionItem>
                              <AccordionItem border={"none"}>
                                <AccordionButton
                                  color={page === pce || page === lv2 ? "teal.300" : "white"}
                                  border={"none"}
                                  _hover={{border: "none", color: "teal.100"}}
                                  _focus={{outline: "none"}}
                                  textAlign={"left"} 
                                >
                                  {international}
                                  <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel flexDirection={"column"}>
                                  <MenuButton
                                    color={page === pce ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(pce);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {pce}
                                  </MenuButton>
                
                                  <MenuButton
                                    color={page === lv2 ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(lv2);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {lv2}
                                  </MenuButton>
                                </AccordionPanel>
                              </AccordionItem>
                              <MenuButton
                                color={page === sustainability ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                                onClick={() => {
                                  setPage(sustainability);
                                  onClose();
                                }}
                              >
                                {sustainability}
                              </MenuButton>
              
                              <MenuButton
                                color={page === sport ? "teal.300" : "white"}
                                border={"none"}
                                _hover={{border: "none", color: "teal.100"}}
                                _focus={{outline: "none"}} 
                                onClick={() => {
                                  setPage(sport);
                                  onClose();
                                }}
                              >
                                {sport}
                              </MenuButton>

                              <AccordionItem border={"none"}>
                                <AccordionButton
                                  color={page === internship || page === pep ? "teal.300" : "white"}
                                  border={"none"}
                                  _hover={{border: "none", color: "teal.100"}}
                                  _focus={{outline: "none"}} 
                                >
                                  {career}
                                  <AccordionIcon/>
                                </AccordionButton>
                                <AccordionPanel flexDirection={"column"}>

                                  <MenuButton
                                    color={page === internship ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(internship);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {internship}
                                  </MenuButton>
                    
                                  <MenuButton
                                    color={page === pep ? "teal.300" : "white"}
                                    border={"none"}
                                    _hover={{border: "none", color: "teal.100"}}
                                    _focus={{outline: "none"}} 
                                    onClick={() => {
                                      setPage(pep);
                                      onClose();
                                    }}
                                    w={"100%"}
                                  >
                                    {pep}
                                  </MenuButton>

                                  </AccordionPanel>
                                  </AccordionItem>
                            </VStack>
                          </Accordion>
                        </Menu>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                    </Box>
                </Box>
                <Box 
                    w={"100%"} 
                    h={"90%"} 
                    flex={90} 
                    color={"white"} 
                    backgroundColor={"transparent"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"row"}
                >
                    
                {page === welcome && <Welcome title={welcome}></Welcome>}
                {page === projects && <Projects title={projects} ></Projects>}
                {page === productions && <Productions title={productions}></Productions>}
                {page === pce && <PCE title={pce}></PCE>}
                {page === lv2 && <LV2 title={lv2}></LV2>}
                {page === sustainability && <SustainabilityCivicEngagement title={sustainability}></SustainabilityCivicEngagement>}
                {page === sport && <SportOtherActivities title={sport}></SportOtherActivities>}
                {page === internship && <Internship title={internship}></Internship>}
                {page === pep && <PEP title={pep}></PEP>}
                {page === project && <Project title={project}></Project>}
                </Box>
            </Box>
        </Box>
    )
}