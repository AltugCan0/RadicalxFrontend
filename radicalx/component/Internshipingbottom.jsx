import React from 'react'
import styled from "@emotion/styled";
import violettaarrow from'../img/violetarrow.png'


import Image from 'next/image'
const Internshipingbottom = () => {
  return (
       <Internshipingbottoms>
            <Title>
                 <Header>
                 <h3>Internship Title</h3>
                 <button> <Image src={violettaarrow}  /></button>
                 
                 </Header>
            </Title>

            <Title2>
                    <Header2>
                    <h3>Completion Period</h3>
                    <button> <Image src={violettaarrow}  /></button>
                    
                    </Header2>

            </Title2>

            <Title3>

                    <Header3>
                    <h3>Total Enrolled</h3>
                    <button> <Image src={violettaarrow}  /></button>
                    </Header3>

            </Title3>

            <Title4>
                 <Header4>
                    <h3>Qualified Candidates</h3>
                    <button> <Image src={violettaarrow}  /></button>
                 </Header4>
            </Title4>

             

       </Internshipingbottoms>
       
  )
}

export default Internshipingbottom


const Internshipingbottoms = styled.div`
border-top-left-radius: 15px; margin-left: 370px; padding-top: 22px; padding-bottom: 22px; display: flex; flex-wrap: wrap; width: 1150;
`

const Title = styled.div`
display: flex; flex-direction: column; background-color: #fff;  flex: 3; border-radius: 13px 0 0 13px;
`



const Header = styled.div`
    background-color: #F6F5F9; display: flex; flex-direction: row;  justify-content: space-between; height: 53px; 
    h3 {
      padding-left: 10px; font-size: 15px; line-height: 22px;
    }

    button {
        cursor: pointer; background-color: #F6F5F9; border: none; padding-right: 10px;
    }
    img {
      width: 18px; height: 18px;
    }
`

const Title2 = styled.div`
  display: flex; flex: 1;  flex-direction: column;   
`

const Header2 = styled.div`
 background-color: #F6F5F9;  display: flex; flex-direction: row;  justify-content: space-between; height: 53px;    width: 168px; 
    h3 {
      padding-left: 10px; font-size: 15px; line-height: 22px;
    }

    button {
        cursor: pointer; background-color: #F6F5F9; border: none; padding-right: 10px;
    }
    img {
      width: 18px; height: 18px;
    }
`


const Title3 = styled.div`
background-color: #fff;  display: flex; flex: 1;  flex-direction: column;   
`

const Header3 = styled.div`
    background-color: #F6F5F9;  display: flex; flex-direction: row;  justify-content: space-between; height: 53px;
    h3 {
      padding-left: 10px; font-size: 15px; line-height: 22px;
    }

    button {
        cursor: pointer; background-color: #F6F5F9; border: none; padding-right: 10px;
    }
    img {
      width: 18px; height: 18px;
    }
`

const Title4 = styled.div`
background-color: #fff;  display: flex; flex: 1;  flex-direction: column;   
`
const Header4 = styled.div`
    background-color: #F6F5F9;  display: flex; flex-direction: row;  justify-content: space-between; height: 53px; width: 200px;
    h3 {
      padding-left: 10px; font-size: 15px; line-height: 22px;
    }

    button {
        cursor: pointer; background-color: #F6F5F9; border: none; padding-right: 10px;
    }
    img {
      width: 18px; height: 18px;
    }
`








