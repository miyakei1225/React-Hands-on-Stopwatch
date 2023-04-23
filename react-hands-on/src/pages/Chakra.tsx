import { Avatar, Box, Button, Center, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import HobbyCard from 'component/HobbyCard'

const Chakra = () => {
  return (
    <Box>
      <Center py={6}>
        <Box maxW={'270px'} w={'full'} bg={'white'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={'https://blog.acworks.co.jp/wp-content/uploads/2018/05/ea96f0e5234ec3d89642ac7607d451e3_m.jpg'}
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={'エンジニアボーイ.png'}
              css={{
                border: '2px solid white'
              }}
              backgroundColor={'white'}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                ミヤケイ
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>567</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Follows
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>1.0k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg={'black'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
      <Center>
        <SimpleGrid spacing={4} mb={8} templateColumns="repeat(auto-fill, minmax(400px, 1fr))">
          <HobbyCard
            headingText={'おいしいご飯'}
            bodyText={'グルメ巡りをするのが好きです！おすすめのお店をまとめたGoogle mapは詳細にございます。'}
            buttonText={'View here'}
          />
          <HobbyCard
            headingText={'健康のためにランニング'}
            bodyText={'仕事終わりと週末の朝にランニングをしています！友達と一緒にマラソン大会に出たりしています。'}
            buttonText={'View here'}
          />
          <HobbyCard
            headingText={'料理'}
            bodyText={'料理が好きで、特に魚を捌いたり炒め物を作るのが得意です。'}
            buttonText={'View here'}
          />
        </SimpleGrid>
      </Center>
    </Box>
  )
}

export default Chakra
