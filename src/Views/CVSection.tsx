import { VStack, Button, HStack } from "@chakra-ui/react";

export const CVSection: React.FC = () => {
    return (
        <VStack spacing={8} align="stretch" p={5}>
            <HStack justifyContent="center" spacing={4}>
                <Button
                    as="a"
                    href="cv/CV_fr.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    bgColor={"linkedin.700"}
                    color={"white"}
                    _hover={{ bgColor: "linkedin.500", color: "white" }}
                    width="100%"
                >
                    Resume (fr)
                </Button>

                <Button
                    as="a"
                    href="cv/CV_en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    bgColor={"linkedin.700"}
                    color={"white"}
                    _hover={{ bgColor: "linkedin.500", color: "white" }}
                    width="100%"
                >
                    Resume (en)
                </Button>
            </HStack>
        </VStack>
    );
};
