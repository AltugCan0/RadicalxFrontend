import React from 'react'
import Image from 'next/image'
import logo from '../img/radicalxlogo.png';
import dash from '../img/dashboard.png';
import book from '../img/book.png';
import briefcase from '../img/briefcase.png';
import medal from '../img/medal_star.png';
import setting from '../img/setting.png';
import Link from 'next/link'

const sidebar = () => {
  return (
     <div className='maincontainer'>
         <div className='logoicon'>
            <div className='logo'> 
            <Image  src={logo} 
             width={160}
             height={32}   
             alt='user profile picture'/> </div>

             <div className='sideicon'>
                <Link href='' style={{ textDecoration: 'none'}}>
                    <button>
                    <Image src={dash}  width={24}  height={24}
                             />
                    Dashboard
                    </button>
                </Link>

                <Link href='' style={{ textDecoration: 'none'}}>
                <button>
                <Image src={medal} width={24}  height={24}
                  />
                    Appenteships
                </button>
                </Link>

                <Link href='' style={{ textDecoration: 'none'}}>
                <button>
                <Image src={book} width={24}  height={24}
                 />
                    Internships
                </button>
                </Link>

                 <Link href='' style={{ textDecoration: 'none'}}>
                <button>
                <Image src={briefcase} width={24}  height={24}
                />
                    Jobs
                </button>
                </Link>

                <Link href='' style={{ textDecoration: 'none'}}>
                <button>
                <Image src={setting}  width={24}  height={24}
                 />
                    Settings
                </button>
                </Link>


                </div>
                
         </div>

         <div className='loginUser'>
            <div className='deneme'></div>
              <p>Adam Scoot</p>
           </div>

         </div>
         
  )
}

export default sidebar