import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to the Stopwatch App</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        ツクってウゴかす！Reactハンズオン！へようこそ！<br />
        下のボタンをクリックしてストップウォッチを試してみてください。
      </p>
      <Link to="/stopwatch/example" style={{ textDecoration: 'none' }}>
        <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#007BFF', color: '#fff', border: 'none' }}>
          ストップウォッチを始める
        </button>
      </Link>
    </div>
  )
}

export default Home