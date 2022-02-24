import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';
import LibraryContext from '../context/LibraryContext';
import {useContext} from 'react';

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const Root = styled('span')(
  () => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 35px;
  margin: 10px 0;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #6998AB;
    border-radius: 20px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 25px;
    height: 25px;
    top: 5px;
    left: 6px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 400ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 29px;
      top: 5px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #1A374D;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);

export default function Switch({handleChange}) {

  const {selected, handleSwitchClick} = useContext(LibraryContext)
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

  return (
    <div className='read-book'>
      <p>Read the Book?</p>
      <SwitchUnstyled onClick={handleSwitchClick} onChange={handleChange} checked={selected || false}  component={Root} {...label} />
    </div>
  );
}
