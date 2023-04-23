import styled from 'styled-components'

const JSX = () => {
  // styledコンポーネント例
  // 文字色黄色、背景色青
  const StyledBox = styled.div`
    color: #ffea00;
    background-color: #4c03f4;
    margin-top: 20px;
  `

  // 要素の表示位置を指定しつつ、テキストカラーを薄緑にして左寄せ
  const LeftRightGreenBox = styled.div`
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
  return (
    <div>
      <StyledBox>aaaa</StyledBox>
      <LeftRightGreenBox>
        <StyledBlueText>ブルーテキスト</StyledBlueText>
      </LeftRightGreenBox>
      <CenteredBlockBox>
        <StyledBlueText>aaa</StyledBlueText>
      </CenteredBlockBox>
      <MarginTopBox>
        <BorderButton>ボタン</BorderButton>
      </MarginTopBox>
    </div>
  )
}

export default JSX
