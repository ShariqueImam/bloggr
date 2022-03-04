import React from 'react'
import styled from 'styled-components'

const width = window.innerWidth
const ProgressBarStyled = styled.div`
position:  fixed;
  background:  linear-gradient(
    to bottom,
    hsl(353, 100%, 62%) ${props => props.scroll},
    transparent  0);
  width:  ${props =>  props.width < 500 ? '2px' : '7px' };
  height:  100%;
  z-index:  3;
  transition:all 0.3s ease;
  transition-delay: 0.2s;
`

// 31,41,55

const ProgressBar = (props) => {
    return (
        <div className='flex'>
            <ProgressBarStyled scroll={props.ScrollLength} width={width} />
        </div>
    )
}

export default ProgressBar