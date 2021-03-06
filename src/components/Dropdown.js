import React, { useState } from 'react'
import styled from 'styled-components'

const DdWrapper = styled.div`
  display: flex;
  min-height: 38px;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  min-width: 50px;
`

const DdHeader = styled.div`
  background-color: white;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 0 20px;
`

const DdHeaderTitle = styled.div`
`

const DdHeaderTitleBold = styled.p`
`

const DdHeaderAction = styled.div`
`

const DdList = styled.ul`
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 60px;
  position: absolute;
  z-index: 1;
  
`

const DdListItem = styled.li`
  list-style-type: none;
  width:100%;
  
  
  
  &:first-of-type {
    button {
      border-top: 1px solid #ccc;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-of-type {
    button {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    }
  }
  button {
    display: flex;
    justify-content: space-between;
    background-color: white;
    font-size: 16px;
    padding: 15px 20px 15px 20px;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    text-align: left;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    &:hover, &:focus {
      cursor: pointer;
      background-color: #ccc;
    }
  }
`
const DdSymbol = styled.span`
  font-size: 12px; 
  padding-right: 2px;
`

const Dropdown = ({ title = 'Select', items = [], updateParent }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)
  const [dropTitle, setDropTitle] = useState(title)

  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      setSelection([item])
      setDropTitle(item.value)
      toggle(!open)
      updateParent(item.id)
    } else {
      /*let selectionAfterRemoval = selection
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      )
      setSelection([...selectionAfterRemoval])
      setDropTitle(title)
      updateParent('')*/
      setSelection([item])
      setDropTitle(item.value)
      toggle(!open)
      updateParent(item.id)

    }
  }

  const isItemInSelection = (item) => {
    if (selection.some(current => current.id === item.id)) {
      return true
    }
    return false
  }

  return (
    <DdWrapper>
      <DdHeader tabIndex={0} role='button' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <DdHeaderTitle>
          <DdHeaderTitleBold>
            {dropTitle}
          </DdHeaderTitleBold>
        </DdHeaderTitle>
        <DdHeaderAction>
          <p>{open ? String.fromCharCode(9650) : String.fromCharCode(9660)}</p>
        </DdHeaderAction>
      </DdHeader>
      {open && (
        <DdList>
          {items.map(item => (
            <DdListItem key={item.id}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <DdSymbol>{isItemInSelection(item) && String.fromCharCode(10004)}</DdSymbol>
              </button>
            </DdListItem>
          ))}
        </DdList>
      )}

    </DdWrapper>

  )
}

export default Dropdown
