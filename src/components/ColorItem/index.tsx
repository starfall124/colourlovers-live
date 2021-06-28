import styled from 'styled-components'

interface IStyledColorItem {
  color: string
}
const StyledColorItem = styled.div<IStyledColorItem>`
  width: 20px;
  height: 100%;
  background-color: ${(props) => `#${props.color}`};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

interface IColorItemProps {
  color: string
}
const ColorItem: React.FC<IColorItemProps> = ({ color }) => {
  return <StyledColorItem color={color}></StyledColorItem>
}

export default ColorItem
