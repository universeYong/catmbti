import React from 'react';
// css-in-js
import styled from 'styled-components';
//import PangImage from '../asset/House.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {ResultData2} from '../asset/data/resultdata2'

const Result2  = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    // 최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});

    React.useEffect(()=>{
        const result = ResultData2.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti])

     
    return (
    <Wrapper>
        <Header>해리포터 인물 테스트</Header>
        <Contents>
        <Title> 결과 </Title>
        <LogoImage>
            <img src={resultData.image} className="rounded-circle" width={350} height={350} />
        </LogoImage>
        <Desc>나에게 잘 맞는 해리포터 인물은 {resultData.name}입니다.
        </Desc>
        <Desc>
            유형 설명
        </Desc>
        <Contents>
        {resultData.desc}
        </Contents>
        <Button style={{fontFamily: "YEONGJUPunggiGinseng"}} onClick={()=>navigate("/")}>
            테스트 다시하기
            </Button>
        </Contents>
    </Wrapper>
    )
   
}

export default Result2;

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
    white-space: pre-line;
    text-align: center;
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