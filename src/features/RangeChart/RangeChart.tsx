import React from 'react'

import styles from './RangeChart.css'

type CardComboBoxProps = {
  combo: string
  color: string
}

const CardComboBox: React.FC<CardComboBoxProps> = ({combo, color}) => {
  const [backgroundColor, setBackgroundColor] = React.useState<string>(null)
  const handleClick = () => {
    if (backgroundColor) {
      setBackgroundColor(null)
      return
    }
    setBackgroundColor(color)
  }
  return (
    <div className={styles.cardComboBox} style={{backgroundColor: backgroundColor}} onClick={handleClick}>
      {combo}
    </div>
  )
}

export const RangeChart: React.FC = () => {
  const color = 'yellow'
  const cards = React.useMemo(
    () => ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2'],
    []
  )

  const combos = React.useMemo(() => {
    const combos = []
    for (let i = 0; i < cards.length; i++) {
      let suited = false
      const row = []
      for (let j = 0; j < cards.length; j++) {
        let combo: string
        if (cards[i] === cards[j]) {
          // pocket pair
          combo = cards[i] + cards[j]
          suited = true
        } else if (suited) {
          // suited
          combo = cards[i] + cards[j] + 's'
        } else {
          // off suit
          combo = cards[j] + cards[i] + 'o'
        }
        row.push(combo)
      }
      combos.push(row)
    }
    return combos
  }, [cards])

  return (
    <div className={styles.root}>
      {combos.map((row: string[]) => (
        <div key={row[0]} className={styles.cardComboRow}>
          {row.map((combo: string) => (
            <CardComboBox key={combo} combo={combo} color={color} />
          ))}
        </div>
      ))}
    </div>
  )
}
