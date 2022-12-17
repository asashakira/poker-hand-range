import React from 'react'

import {RangeChart} from '../RangeChart'

import styles from './HelloWorld.css'

export const HelloWorld: React.FC = () => {
  return (
    <div className={styles.root}>
      <RangeChart />
    </div>
  )
}
