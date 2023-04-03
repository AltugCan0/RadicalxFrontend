import React from 'react'
import styled from "@emotion/styled";
import Image from 'next/image'


const Header = () => {
  return (
    <MainSection>
            <SmalTitle>
            Internships
            </SmalTitle>
           <ButtonDeneme>Create New Internship</ButtonDeneme>
    </MainSection>
          
  )
}

export default Header

const MainSection = styled.div`
margin-left: 350px; display: flex; justify-content: space-between; flex-direction: row; align-items: center; padding-bottom: 20px;
`;
 const SmalTitle  = styled.p`
 font-size: 30px; line-height: 22px; 
 `;

const ButtonDeneme = styled.button`
display: flex; align-items: center; justify-content: center; flex-direction: row; gap: 8px; background: #793ef5; border-radius: 12px; color: #fff;
width: 217px; height: 44px; border: none; font-size: 14px; cursor: pointer;
`;


    