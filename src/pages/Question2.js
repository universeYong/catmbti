import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap'
import { createSearchParams, useNavigate } from 'react-router-dom';

import { QuestionData2 } from '../asset/data/questiondata2';


const Question2 = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ])
  const navigate = useNavigate();


  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);

    if (QuestionData2.length !== questionNo + 1) {
      // 다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 결과 페이지 이동
      navigate({
        pathname: "/result2",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
      });
    }


    // if (type === "EI") {
    //   // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   // 새로운 객체
    //   const newObject = { id: "EI", score: addScore };
    //   // splice 통해 새로운 객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[3].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  }


  return (
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo / QuestionData2.length) * 100} style={{ marginTop: '20px' }} />
      <Title>{QuestionData2[questionNo].title}</Title>
      <ButtonGroup>
        <Button onClick={() => handleClickButton(1, QuestionData2[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}>{QuestionData2[questionNo].answera}</Button>
        <Button onClick={() => handleClickButton(0, QuestionData2[questionNo].type)} style={{ width: "40%", minHeight: "200px", fontSize: "15pt", marginLeft: "20px" }}>{QuestionData2[questionNo].answerb}</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Question2;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    `  

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    font-family: "YEONGJUPunggiGinseng"
    `
    

const ButtonGroup = styled.div`
    display: flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    font-family: "YEONGJUPunggiGinseng"
`
