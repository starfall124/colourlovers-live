import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { Item } from './containers'
import { getColourLoversApi } from './apis'
import { IItem } from './types/item'
import { formatDate } from './helper'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://www.colourlovers.com/api/palettes'

const AppContainer = styled.div`
  background-image: linear-gradient(-34deg, #48aef1 0%, #2188cf 100%);
  min-height: 100vh;

  .app {
    &__header {
      &__update {
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
        letter-spacing: 0px;
        color: #ffffff;
        font-weight: 500;

        @media screen and (max-width: 768px) {
          justify-content: flex-start;
        }
      }

      &__title {
        font-size: 60px;
        line-height: 105px;
        letter-spacing: 1px;
        color: #ffffff;
        font-weight: 275;

        &--bold {
          font-weight: 500;
        }

        @media screen and (max-width: 768px) {
          font-size: 40px;
          line-height: 55px;
        }
      }

      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    &__body {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
    }
  }
`

export const App = () => {
  const [updatedDate, setUpdatedDate] = useState<string>(
    formatDate(new Date().toString())
  )
  const [initialLoading, setInitialLoading] = useState(true)
  const [items, setItems] = useState<IItem[]>([])

  useEffect(() => {
    const getColourLovers = async () => {
      try {
        const response = await getColourLoversApi()
        if (response) setItems([...response.data])
      } catch {
        setItems([])
      }
      !initialLoading && setUpdatedDate(formatDate(new Date().toString()))
    }

    initialLoading ? getColourLovers() : setInterval(getColourLovers, 60000)
    setInitialLoading(false)
  }, [initialLoading])

  return (
    <AppContainer>
      <div className="app container pt-sm-5 pt-2">
        <div className="app__header">
          <div className="app__header__update">
            Last Updated at {updatedDate}
          </div>
          <div className="app__header__title">
            ColourLovers.{' '}
            <span className="app__header__title--bold">Live.</span>
          </div>
        </div>
        <div className="app__body">
          {items.map((item: IItem) => {
            return (
              <Item
                key={item.id}
                title={item.title}
                userName={item.userName}
                dateCreated={item.dateCreated}
                numViews={item.numViews}
                numVotes={item.numVotes}
                colors={item.colors}
              />
            )
          })}
        </div>
      </div>
    </AppContainer>
  )
}
