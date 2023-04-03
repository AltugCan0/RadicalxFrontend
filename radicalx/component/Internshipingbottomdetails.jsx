import React from 'react'
import chartt from '../img/chartt.png'
import ellipsis from '../img/ellipsis.png'
import userr from '../img/userr.png' 
import Image from 'next/image'
import styled from "@emotion/styled";           
import Graph from '../component/Graph'

const Internshipingbottomdetails = () => {
  return (
    
     
       <MainDetaile>

                <ProdoctDesigner>
                     <h5>Product Design GVI</h5>
                     <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</p>
                </ProdoctDesigner>

                <Days>
                <p>120 Days</p>
                <p>created on 10/12/2021</p>
                </Days>

                <Total>
                <p>20,000</p>
                </Total>

                <BarrChart>
                      <Graph />
                </BarrChart>

                <Icons>
             <Image src={chartt}   />
             <Image src={userr}  />
            <Image src={ellipsis} />
                </Icons>
     
                </MainDetaile>

                
  );
}

export default Internshipingbottomdetails



const MainDetaile = styled.div`
display: flex; margin-left: 375px;  margin-bottom: 0.5rem; padding-top: 1.25rem;    background-color: #fff;
`;
const ProdoctDesigner = styled.div`
padding-left:12px; height:96px;  width:195px; padding: -5px;
h5 {
    font-size:1rem;
    font-weight:bold;
    margin-bottom:0;
  }
  p {
    font-size:12px;
    line-height:16px
  }
`;
const Days = styled.div`
padding-left: 120px;padding-top: 1.25rem;  margin-bottom: 0.5rem;

p{
    color: #828282;
    font-family: var(--mainfont);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
}
`;
const Total = styled.div`
margin-top: 25px;  font-size: 20px; padding-left: 150px; font-weight: 500; line-height: 24px; text-align: center;
    p{
      color: #793ef5; 
    }
`;
const BarrChart = styled.div`
padding-left: 100px;
`;
const Icons = styled.div`
display: flex;  padding-left: 52px;  margin-top: 35px;  height: 95px;  gap: 10px;  font-size: 21px;
    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
`;




