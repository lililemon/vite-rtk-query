import TitleHeader from "@/components/header/titleHeader";
import Notice from "@/components/notice";
import avatar from "@/assets/img/avatar.png"

const Notification = () => {
    const todayList=[
        {
            title:'ETH Received',
            content:'1.05 ETH received',
            imgUrl:avatar,
            timestamp:1676704359000
        },
        { 
            title:'Upload Succsess',
            content:'Ready to sell',
            imgUrl:avatar,
            timestamp:1676704359000
        },
        {
            title:'William',
            content:'Started following you',
            imgUrl:avatar,
            timestamp:1676704359
        }
    ]
    return ( 
        <>
            <TitleHeader title="Notification" />
            <div className="p-6">
                <p className="title-second mb-4">Today</p>
                {
                    todayList.map(item=>{
                        return <Notice key={item.title} {...item} />
                    })
                }
                <p className="title-second mb-4">This week</p>
                {
                    todayList.map(item=>{
                        return <Notice key={item.title} {...item} />
                    })
                }
            </div>
        </>
     );
}
 
export default Notification;