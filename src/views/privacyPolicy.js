import React from 'react';
import { Box, Heading, Text, Accordion, AccordionItem, AccordionIcon, AccordionTrigger, AccordionHeader, AccordionContent, AccordionContentText, AccordionTitleText, ChevronDownIcon, ChevronUpIcon } from '@gluestack-ui/themed';
import { BACKGROUND_COLOR } from '../helpers/constants';
import { Background } from '../components/background';

export const PrivacyPolicy = () => {
    return (
        <Background>
        <Box px={4} py={8} maxW="800px" mx="auto" mt={20}>
            <Heading size="xl" mb={4}>
                Privacy Policy
            </Heading>
            <Text mb={4}>
                We want you to know exactly how our services work and why we need your details. Reviewing our policy will help you continue using the app with peace of mind.
            </Text>

            <Accordion mt={5} size="md" isCollapsible={true} isDisabled={false} className="m-5 w-[90%] border border-outline-200" shadowColor="gray">
                <AccordionItem value="a">
                    <AccordionHeader
                        sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}
                    >
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>What information do we collect about you?</AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                                        )}
                                    </>
                                )
                            }}

                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}>
                        <AccordionContentText pb={4}>
                            We may collect personal information that you voluntarily provide to us when you register for an account, make a booking, or contact us for support. This information may include your name, email address, phone number, and payment information.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionHeader
                        sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}
                    >
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>How do we use your information?</AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                                        )}
                                    </>
                                )
                            }}

                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}>
                        <AccordionContentText pb={4}>
                            We use the information we collect to provide, operate, maintain, and improve our services. We may also use your information to communicate with you, including sending you updates and promotional messages.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="c">
                    <AccordionHeader
                        sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}
                    >
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>To whom do we disclose your information?</AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                                        )}
                                    </>
                                )
                            }}

                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}>
                        <AccordionContentText pb={4}>
                            We do not share your personal information with third parties, except as necessary to provide our services or as required by law.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="d">
                    <AccordionHeader
                        sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}
                    >
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>What do we do to keep your information secure?</AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                                        )}
                                    </>
                                )
                            }}

                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}>
                        <AccordionContentText pb={4}>
                            We implement a variety of security measures to maintain the safety of your personal information.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="e">
                    <AccordionHeader
                        sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}
                    >
                        <AccordionTrigger>
                            {({ isExpanded }) => {
                                return (
                                    <>
                                        <AccordionTitleText>What do we do to keep your information secure?</AccordionTitleText>
                                        {isExpanded ? (
                                            <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                                        ) : (
                                            <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                                        )}
                                    </>
                                )
                            }}

                        </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionContent sx={{
                            backgroundColor: BACKGROUND_COLOR,
                            _dark: {
                                backgroundColor: "$backgroundDark950",
                            },
                        }}>
                        <AccordionContentText pb={4}>
                            We implement a variety of security measures to maintain the safety of your personal information.
                        </AccordionContentText>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Text mt={10} color="gray">
                Effective from August 2024
            </Text>
        </Box>
        </Background>
    );
};

export default PrivacyPolicy;



// import React from 'react';
// import { Box, Heading, Text } from '@gluestack-ui/themed';

// export const PrivacyPolicy = () => {
//   return (
//     <Box px={4} py={8} maxW="800px" mx="auto" mt={50} height = "80vh" overflowY = 'auto'>
//       <Heading size="xl" mb={4}>
//         Privacy Policy
//       </Heading>
//       <Text mb={4}>
//         Welcome to our travel app. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our app.
//       </Text>

//       <Heading size="md" mt={6} mb={2}>
//         1. Information We Collect
//       </Heading>
//       <Text mb={4}>
//         We may collect personal information that you voluntarily provide to us when you register for an account, make a booking, or contact us for support. This information may include your name, email address, phone number, and payment information.
//       </Text>

//       <Heading size="md" mt={6} mb={2}>
//         2. How We Use Your Information
//       </Heading>
//       <Text mb={4}>
//         We use the information we collect to provide, operate, maintain, and improve our services. We may also use your information to communicate with you, including sending you updates and promotional messages.
//       </Text>

//       <Heading size="md" mt={6} mb={2}>
//         3. Sharing Your Information
//       </Heading>
//       <Text mb={4}>
//         We do not share your personal information with third parties, except as necessary to provide our services or as required by law.
//       </Text>

//       <Heading size="md" mt={6} mb={2}>
//         4. Your Choices
//       </Heading>
//       <Text mb={4}>
//         You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.
//       </Text>

//       <Heading size="md" mt={6} mb={2}>
//         5. Contact Us
//       </Heading>
//       <Text mb={4}>
//         If you have any questions or concerns about this Privacy Policy, please contact us at support@travelapp.com.
//       </Text>
//     </Box>
//   );
// };

// // export default PrivacyPolicy;
