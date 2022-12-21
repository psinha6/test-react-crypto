import styled from "styled-components";

export const CategoryContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

export const DetailsContainer = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 20px;
  color: #0071bd;
  display: flex;
  flex-direction: row;
`
export const StatsDetails = styled.div`
  margin-left: 20px;
`
export const CoinDetailsHeading = styled.label`
  font-weight: 700 !important;
  margin-top: 20px !important;
  color: #0071bd;
`

export const CoinStats = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
  opacity: 0.9;
  padding: 20px;
  &:hover {
    background-color: var(--bgSecondary);
}
`
export const CoinStatsName = styled.div`
    display: flex;
    gap: 10px;
    font-size: 1rem;
`
export const Stats = styled.label`
    font-weight: 800;
`