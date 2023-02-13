import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    return ( 
        <>
            <p>手机账号登录</p>
            <p onClick={
                ()=>navigate('/hh')
            }>邮箱账号登录</p>
        </>
     );
}
 
export default Login;