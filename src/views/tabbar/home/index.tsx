import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <p className="home" onClick={() => navigate('/login')}>
        home11111
      </p>
      <p className="" onClick={() => navigate('/login')}>
        31212
      </p>
    </div>
  )
}
import './index.less'
export default Home
