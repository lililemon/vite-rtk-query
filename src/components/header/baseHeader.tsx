import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom';
const BaseHeader = () => {
    const navigate = useNavigate()
    return ( 
        <div className="w-full h-12 px-5 flex text-white text-xl items-center">
            <LeftOutline onClick={()=>navigate(-1)} />
        </div>
    );
}
 
export default BaseHeader;