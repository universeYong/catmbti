import React from 'react';
// css-in-js
import styled from 'styled-components';
import PangImage from '../asset/House.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home2  = () => {
    const navigate = useNavigate();

    const handClickButton = () => {
        navigate('/question2');
        
    }
    return (
        <Wrapper>
            <Header>해리포터 인물 테스트</Header>
            <Contents>
            <Title>나와 가장 닮은 해리포터 인물은?</Title>
            <LogoImage>
                <img src={PangImage} className="rounded-circle" width={350} height={350} />
            </LogoImage>
            <Desc>나와 가장 닮은 해리포터 인물 찾기!</Desc>
            <Button style={{fontFamily: "YEONGJUPunggiGinseng"}} onClick={handClickButton}>테스트 시작하기</Button>
            </Contents>
        </Wrapper>
    )


}

export default Home2;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    `  

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center; 
    align-items: center;
    font-family: "YEONGJUPunggiGinseng"
`

const Contents = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "YEONGJUPunggiGinseng"
`

const LogoImage = styled.div`
    margin-top: 10px;

`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
    font-family: "YEONGJUPunggiGinseng"
`