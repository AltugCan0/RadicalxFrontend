import React from 'react'
import styled from "@emotion/styled";
import calendar from "../img/calendar.png";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import Image from 'next/image'

function Intershipinsight() {
    const data = [
      { name: "", value: "" },
      { name: "Total Enrollments", value: 100000 },
      { name: "Completion", value: 65000 },
      { name: "Qualified Candidates", value: 850 },
      { name: "Reached Out", value: 375 },
      { name: "Interview Set", value: 300 },
      { name: "Candidates Hired", value: 150 },
      { name: "", value: "" },
    ];

    
    return (
        <InternshipInsightContainer>
          
          <Textss>
            <h2>Internship Insights</h2>
            <p>
              In the eighteenth century the German philosoper Immanual Kant
              developed a theory of knowledge in which knowledge about space can be
              bothe prior and synthetic
            </p>
          </Textss>
          <DataContainer>
            <DateContainer>
              <div>
                <WeekButton>This Week</WeekButton>
                <MonthButton>This Month</MonthButton>
              </div>
              <div>
                <DatesButton>
                  <Image src={calendar}  />
                  Select dates
                </DatesButton>
              </div>
            </DateContainer>
            <ResponsiveContainer width="100%" height={174}>
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="value"
                  fill="#665FEF33"
                  stroke="none"
                />
                <XAxis
                  
                  dataKey="value"
                  axisLine={false}
                  tickLine={false}
                  xAxisId={0}
                  interval={0}
                  tick={{ fontSize: 21, fontWeight: 500 }}
                />
                <XAxis
                  xAxisId={1}
                  interval={0}
                  tick={{ fontSize: 12, fontWeight: 500 }}
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </DataContainer>
        </InternshipInsightContainer>
      );
    }

export default Intershipinsight



const InternshipInsightContainer = styled.div`
display: flex;  background: #ffffff;  border-radius: 15px;   padding: 15px; margin-left:350px;  gap: 10px; flex-wrap: wrap;  flex-direction: row;
`;

const Textss = styled.div`
display: flex;  gap: 12px; flex-direction: column; box-sizing: border-box; background: #f6f5f9; border-radius: 15px;  padding: 15px 0 0 15px;  width: 280px;

  h2 {
    font-weight: bold;
    font-size: 19px;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    width: 230px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 0;
  }
`;

const DataContainer = styled.div`
  display: flex;   flex-wrap: wrap;  flex-direction: column;  width: calc(100% - 290px);
`;

const DateContainer = styled.div`
  background: #f2f2f2; border-radius: 12px; flex-wrap: wrap; display: flex; justify-content: space-between;  padding: 8px; gap: 10px;  flex-direction: row;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    display: flex; align-items: center; justify-content: center;  font-weight: 500;  font-size: 14px; background: #fff;  border-radius: 8px;  border: none;
   

    :hover {
      color: #fff;
      background-color: #793ef5;
    }
  }
`

const WeekButton = styled.button`
    height: 32px; width: 100px; cursor: pointer;
`
const MonthButton = styled.button`
    height: 32px;  width: 100px;   cursor: pointer;
`
const DatesButton = styled.button`
    height: 32px; width: 137px; cursor: pointer;    gap: 8px;
    img {
      height: 20px;
      width: 20px;
    }
`
