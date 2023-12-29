/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import {BiSolidLeftArrowAlt} from 'react-icons/bi' 
import {FiChevronLeft} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'
import Header from '../Header'
import './index.css'

const notification_list=[
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493145/Label_Initials_wl8mk8.png",
        description:"John(DHA) has assigned you Doctor for your symptoms for fever and other issue",
        date:"25-07-2023",
        time:"05:10 AM",
    },

    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493164/Avatar_yv5pky.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"03:30 PM",
    },

    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493635/Avatar_1_mnu51v.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"01:10 PM",
    },
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696516731/Avatar_5_tfnkln.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"21 Jan",
    },
    {
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493145/Label_Initials_wl8mk8.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"05:10 PM",
    },{
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696516754/Avatar_4_ea1wfy.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"05:10 PM",
    },{
        imgUrl:"https://res.cloudinary.com/dywrzseia/image/upload/v1696493164/Avatar_yv5pky.png",
        description:"Lorem ipsum dolor sit amet,",
        date:"25-07-2023",
        time:"03:30 PM",
    },

]

class Notifications extends Component{
    state={clearAll:false}

    onClickClearAll=()=>{
        this.setState({
            clearAll:true
        })
    }
    
    renderNoNotifications=()=>(
         <div className='noNotificationContainer'>
            <img src="https://res.cloudinary.com/dywrzseia/image/upload/v1696518120/Group_102235592_aq25x1.png" alt="no notifications"/>
            <p className='noNotificationPara'>"No new notifications at the moment. Stay tuned for updates!"</p>
         </div>
    )

    onClickChangeSendQuotation=()=>(
    <Navigate to="/dashboard"/>
    )
    
    renderNotifications=()=>{
        const {clearAll}=this.state
        const finalNotifications=clearAll? []: notification_list
    
    return(

        <div className='notificationTopContainer'>
        {finalNotifications.map(each=>(
                  <> 
                    <div className='notification'>
                        <div className='notify'>
                            <img src={each.imgUrl} alt={each}/>
                            <p className='description'>{each.description}</p>
                        </div>
                        <div className='notify'>
                        <a className='dateandtime'>{each.date}</a>
                        <a className='dateandtime'>{each.time}</a>
                        </div>
                    </div>
                    </>
                ))}
        </div>

    )
    }

    render(){

        const {clearAll}=this.state
        return(
            <>
            <Header/>
            <div className='notificationContainer'>
                <div className='case'>
                    <button className='arrow' onClick={this.onClickChangeSendQuotation}><NavLink to="/dashboard"><BiSolidLeftArrowAlt className='backIcon'/></NavLink></button>
                    <h1 className='notificationHead'> Notifications</h1>
                </div>
                <hr className='cardHr1'/>
                <div className='notificationSections'>
                    <a className='sectionStyle'>Mark all as read</a>
                    <a className='sectionStyle' onClick={this.onClickClearAll}>Clear all</a>
                    {clearAll?<a className='pageDetails'>1-1 of 1</a>:<a className='pageDetails'>1-10 of 10</a>}
                    <a className='rightLeftBtns'><FiChevronLeft/></a>
                    <a className='rightLeftBtns'><FiChevronRight/></a>
                </div>
                <hr className='cardHr1'/>
                {clearAll? this.renderNoNotifications(): this.renderNotifications()}
            </div>
            </>
        )
    }
}

export default Notifications