import styled from 'styled-components'

import { Stats, ColorItem } from '../../components'
import { formatDate } from '../../helper'

const StyledItem = styled.div`
  margin-bottom: 3em;
  display: flex;
  justify-content: space-between;

  .item {
    &__left {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &__top {
        color: #ffffff;
        margin-bottom: 1em;

        &__title {
          font-size: 24px;
          letter-spacing: 0px;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &__date {
          font-size: 12px;
          letter-spacing: 0px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    &__right {
      display: flex;
    }
  }
`

interface IItemProps {
  title: string
  userName: string
  dateCreated: string
  numViews: number
  numVotes: number
  colors: string[]
}
const Item: React.FC<IItemProps> = ({
  title,
  userName,
  dateCreated,
  numViews,
  numVotes,
  colors,
}) => {
  return (
    <StyledItem className="px-4 col-xl-4 col-lg-6 col-sm-12 col-12">
      <div className="item__left">
        <div className="item__left__top">
          <div className="item__left__top__title">{title}</div>
          <div className="item__left__top__date">{`by ${userName} at ${formatDate(
            dateCreated
          )}`}</div>
        </div>

        <Stats numViews={numViews} numVotes={numVotes} />
      </div>

      <div className="item__right">
        {colors.map((color: string, index: number) => {
          return <ColorItem key={index} color={color} />
        })}
      </div>
    </StyledItem>
  )
}

export default Item
