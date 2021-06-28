import styled from 'styled-components'

const StyledStats = styled.div`
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 18px;
  color: #ffffff;
  font-weight: 800;
  padding: 0.5em 1em;
  display: inline-block;
`

interface IStatsProps {
  numViews: number
  numVotes: number
}
const Stats: React.FC<IStatsProps> = ({ numViews, numVotes }) => {
  return (
    <StyledStats>
      {numViews} views {numVotes} votes
    </StyledStats>
  )
}

export default Stats
