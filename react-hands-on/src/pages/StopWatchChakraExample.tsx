import { Box, Button, Center, Img, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const StopwatchChakraExample = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

  console.log(time, 'timeの値')

  const handleStart = () => {
    if (timerId) return
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
    setTimerId(id)
  }

  const handleStop = () => {
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleReset = () => {
    setTime(0)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  return (
    <Box>
      <Center py={6}>
        <Box
          w="auto"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg="white"
          border={'1px'}
          borderColor="black"
          boxShadow={'6px 6px 0 black'}
        >
          <Box h={'100%'} w={'100%'} borderBottom={'1px'} borderColor="black">
            <Img
              src={
                time <= 10000
                  ? 'https://pbs.twimg.com/media/BrEPHxUCcAErSEe.jpg'
                  : 'https://d2dcan0armyq93.cloudfront.net/photo/odai/600/991012967bbd2b693eba74f897da15a1_600.jpg'
              }
              roundedTop={'sm'}
              objectFit="cover"
              h="full"
              w="full"
              alt={'Blog Image'}
            />
          </Box>
          <Box p={4}>
            <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
              <Text fontSize={'xs'} fontWeight="medium">
                {(time / 1000).toFixed(2)} s
              </Text>
            </Box>
            {/* <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
              React v18.0
            </Heading> */}
            {/* <Text color={'gray.500'} noOfLines={2}>
              In this post, we will give an overview of what is new in React 18, and what it means for the future.
            </Text> */}
          </Box>
          <Center>
            <Box>
              <Button onClick={handleStart}>Start</Button>
            </Box>
            <Box>
              <Button onClick={handleStop}>Stop</Button>
            </Box>
            <Box>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  )
}

export default StopwatchChakraExample
