import { Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  headingText: string
  bodyText: string
  buttonText: string
}

const HobbyCard: React.FC<Props> = ({ headingText, bodyText, buttonText }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{headingText}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{bodyText}</Text>
      </CardBody>
      <Center>
        <CardFooter>
          <Button>{buttonText}</Button>
        </CardFooter>
      </Center>
    </Card>
  )
}

export default HobbyCard
