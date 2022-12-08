import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #efefef
    background: #fff;
    text-align: center;
  `;
const AirlineLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;
function AirlineCard({ airline }) {
  return (
    <Card>
      <AirlineLogo>
        <img src={airline.image_url} alt={airline.name} />
      </AirlineLogo>
      <AirlineName>{airline.name}</AirlineName>
      <div className="airline-score">{airline.avg_score}</div>
      <LinkWrapper>
        <Link to={`/airlines/${airline.id}`}>View Airlines</Link>
      </LinkWrapper>
    </Card>
  );
}

export default AirlineCard;
