import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Link,
    Center,
  } from '@chakra-ui/react';

  import TempIcon from './../assets/temp_icon.png'; 
  import { useFileUpload } from 'use-file-upload'
import { useState } from 'react';
import Event from './event';


  function CreateEvent () { 
    const [file, selectFile] = useFileUpload(TempIcon);

    const [eventData, setEventData] = useState({
        eventName: '',
        hostName: '',
        location: '',
        startDaT: '',
        endDaT: '',
        eventImage: selectFile,
    }) 


    
    const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(eventData);

        // setContactInfo({ name: "", email: "", phonenumber: "" });
    }

    return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
              User Profile Edit
            </Heading>

            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={['column', 'row']} spacing={6}>
                <Center>
                  <Avatar size="xl" src={file ? file.source : TempIcon}></Avatar>
                </Center>
                <Center w="full">
                  <Button w="full"
                    onClick={() => {
                        // Single File Upload accepts only images
                        selectFile({ accept: 'image/*' }, ({ source, name, size, file }) => {
                            // file - is the raw File Object
                            console.log({ source, name, size, file })
                            // Todo: Upload to cloud.
                        })
                        }}
                  >Change Event Image</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="eventName" isRequired>
              <FormLabel>Event name</FormLabel>
              <Input
                placeholder="Military galore"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={eventData?.eventName}
                onChange={(e) => setEventData({...eventData, eventName: e.target.value})}
              />
            </FormControl>

            <FormControl id="hostName" isRequired>
              <FormLabel>Host name</FormLabel>
              <Input
                placeholder="Dan Ola"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={eventData?.hostName}
                onChange={(e) => setEventData({...eventData, hostName: e.target.value})}
              />
            </FormControl>

            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="No 22, Aigu street, Lagos Nigeria"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={eventData?.location}
                onChange={(e) => setEventData({...eventData, location: e.target.value})}
              />
            </FormControl>
            <FormControl id="startDate" isRequired>
              <FormLabel>Start date and time</FormLabel>
              <Input
                placeholder="29 September"
                _placeholder={{ color: 'gray.500' }}
                type="datetime-local"
                value={eventData?.startDaT}
                onChange={(e) => setEventData({...eventData, startDaT: e.target.value})}
              />
            </FormControl>
            <FormControl id="endDate" isRequired>
              <FormLabel>End date and time</FormLabel>
              <Input
                placeholder="30 September"
                _placeholder={{ color: 'gray.500' }}
                type="datetime-local"
                value={eventData?.endDaT}
                onChange={(e) => setEventData({...eventData, endDaT: e.target.value})}
              />
            </FormControl>

            <Stack spacing={6} direction={['column', 'row']}>
              <Button
                    bgGradient='linear(to-l, #E87BF8, #8456EC)'
                    color={'white'}
                    width={'full'}
                    height={'55px'}
                    onClick={(e) =>handleSubmit(e)}
                    >
                    <Link to={<Event event={eventData} />} >
                    🎉 Create my event
                    </Link>
                    </Button> 
            </Stack>
          </Stack>
        </Flex>
      );
}

export default CreateEvent;

