import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import landingPageImage from './../assets/landing_page_image.svg';

function Home() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgGradient='linear(to-l, #F6F2FF, #FBFAFF)'>
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                alt={'Login Image'}
                objectFit={'cover'}
                style={{
                    
                }}
                src={landingPageImage}
                />
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'} textAlign={{base:'center', lg:'end'}}>
              <Stack spacing={6} w={'full'} maxW={'lg'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '64px' }} fontWeight={'extrabold'} alignContent={'flex-end'}>
                    <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                    }}>
                    Imagine if
                    </Text>
                    <br />{' '}
                    <Text bgGradient='linear(to-l, #E87BF8, #8456EC)' bgClip='text' as={'span'}>
                    Snapchat
                    </Text><br />{' '}
                    <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                    }}>
                    had events
                    </Text>
                </Heading>
                <Text fontSize={'24px'} color={'gray.500'} fontWeight={'light'}>
                    Easily host and share events with your friends across any social media.
                </Text>
                <Stack  align={{base:'center', lg:'flex-end'}}>
                    <Button
                    bgGradient='linear(to-l, #E87BF8, #8456EC)'
                    color={'white'}
                    width={'320px'}
                    height={'55px'}
                    >
                    🎉 Create my event
                    </Button>   
                </Stack>
              </Stack>
            </Flex>
        </Stack>
    )
}

export default Home;