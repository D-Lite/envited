import {
    Button,
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Icon,
  } from '@chakra-ui/react';
  import TempIcon from './../assets/temp_icon.png';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
  
  

function Event() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column-reverse', md: 'row' }} bgGradient='linear(to-l, #FBFAFF, #FBFAFF)'>
            <Flex p={8} flex={1} align={'center'} justify={'center'} textAlign={{base:'start', lg:'start'}}>
              <Stack spacing={6} w={'full'} maxW={'lg'}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '64px' }} fontWeight={'extrabold'} alignContent={'flex-start'}>
                    <Text
                    as={'span'}
                    position={'relative'}
                    color={'#240D57'}
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
                    Birthday Bash
                    </Text>
                </Heading>
                <Text fontSize={'24px'} color={'gray.500'} fontWeight={'light'}>
                    Hosted by <span  fontWeight="black">Elysia</span>
                </Text>
                <Stack  align={{base:'center', lg:'flex-start'}}>
                    <Flex>
                        <Flex
                            width={'56px'}
                            height={'56px'}
                            boxShadow={'0px 0px 5px 0px #0000001A'}
                            bg={'#ffffff'}
                            borderRadius={'10px'}
                            justify={"center"}
                            align={"center"}
                        >
                            <AiOutlineCalendar color={'#8456EC'}/>
                        </Flex>   
                        <Flex ml={'20px'} justify={"center"} align={"start"} flexDir={'column'}>
                        <Text fontSize={'18px'} fontWeight={'black'} color={'#240D57'}>
                            18 August 6:00PM
                        </Text>
                        <Text fontSize={'18px'} color={'#4F4F4F'} fontWeight={'light'}>
                            to 19 August 1:00PM UTC +10
                        </Text>
                        </Flex> 
                    </Flex> 

                    <Flex>
                        <Flex
                            width={'56px'}
                            height={'56px'}
                            boxShadow={'0px 0px 5px 0px #0000001A'}
                            bg={'#ffffff'}
                            borderRadius={'10px'}
                            justify={"center"}
                            align={"center"}
                        >
                            <GoLocation color={'#8456EC'}/>
                        </Flex>   
                        <Flex ml={'20px'} justify={"center"} align={"start"} flexDir={'column'}>
                        <Text fontSize={'18px'} fontWeight={'black'} color={'#240D57'}>
                            Street name
                        </Text>
                        <Text fontSize={'18px'} color={'#4F4F4F'} fontWeight={'light'}>
                            Suburb, State, Postcode
                        </Text>
                        </Flex> 
                    </Flex> 
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={{base: '1', lg: '1', xl:'0.8'}} align={'center'} justify={'center'}>
                <Box height={'70%'} width={{ md:'80%', base: 'full'}}>
                    <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    style={{
                        
                    }}
                    src={TempIcon}
                    />
                </Box>
            </Flex>
        </Stack>
    )
}

export default Event;