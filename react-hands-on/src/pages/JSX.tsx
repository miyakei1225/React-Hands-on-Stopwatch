import { Button, FormLabel, Input, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import styled from 'styled-components'

const JSX = () => {
  // styledコンポーネント例
  // 文字色黄色、背景色青
  const StyledBox = styled.div`
    width: 40%;
    height: 40%;
    color: #ffea00;
    background-color: #4c03f4;
    margin-top: 20px;
  `

  // 要素の表示位置を指定しつつ、テキストカラーを薄緑にして左寄せ
  const LeftRightGreenBox = styled.div`
    width: 500px;
    text-align: left;
    background-color: #05f6aa;
    margin-top: 40px;
  `

  // テキストを青く！
  const StyledBlueText = styled.text`
    color: #5058f3;
  `

  // 真ん中寄せにしたdiv要素
  const CenteredBlockBox = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  // 先ほどと同様に、要素の表示位置を指定した例
  const MarginTopBox = styled.div`
    margin-top: 20px;
  `

  // 外枠付きのボタン(ホバーで文字色を変える)
  const BorderButton = styled.button`
    background-color: white;
    color: #666;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #666;
    transition: all ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #666;
      color: white;
    }
  `

  const handleClick = (text: string) => {
    console.log({ message: 'handleClick関数が動いてます！', 送られてきたtext: text })
    alert('クリックされました！')
  }

  // useState(後ほど説明します🙆)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleChakraFormClick = () => {
    console.log({ name, password })
    setName('')
    setPassword('')
  }
  return (
    <div>
      <StyledBox>イエローテキスト</StyledBox>
      <LeftRightGreenBox>
        <StyledBlueText>ブルーテキスト</StyledBlueText>
      </LeftRightGreenBox>
      <CenteredBlockBox>
        <StyledBlueText>ブルーテキスト</StyledBlueText>
      </CenteredBlockBox>
      <VStack>
        <VStack w="30vw">
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button mt={4} colorScheme="teal" onClick={handleChakraFormClick}>
            Submit
          </Button>
        </VStack>
      </VStack>
      <MarginTopBox>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input
            type="submit"
            value="Sign In"
            onSubmit={() => {
              // 送信後の処理を記述する
            }}
          />
        </form>
      </MarginTopBox>
      <MarginTopBox>
        <BorderButton
          onClick={() => {
            alert('クリックされました！')
          }}
        >
          ボタン
        </BorderButton>
      </MarginTopBox>
    </div>
  )
}

export default JSX
