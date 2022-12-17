import React from 'react'

import styles from './RangeChart.css'

type CardComboBoxProps = {
  combo: string
  color: string
  selecting: string | null
  setSelecting: (selecting: 'select' | 'deselect' | null) => void
}

const CardComboBox: React.FC<CardComboBoxProps> = ({
  combo,
  color,
  selecting,
  setSelecting,
}) => {
  const [backgroundColor, setBackgroundColor] = React.useState<string>(null)

  const handleMouseDown = () => {
    if (backgroundColor) {
      setSelecting('deselect')
      setBackgroundColor(null)
      return
    }
    setSelecting('select')
    setBackgroundColor(color)
  }

  const handleMouseUp = () => {
    setSelecting(null)
  }

  const handleHighlight = () => {
    if (!selecting) return
    if (selecting === 'select') {
      setBackgroundColor(color)
    }
    if (selecting === 'deselect') {
      setBackgroundColor(null)
    }
  }

  return (
    <div
      className={styles.cardComboBox}
      style={{backgroundColor: backgroundColor}}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleHighlight}>
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

  const [selecting, setSelecting] = React.useState<'select' | 'deselect' | null>(null)

  return (
    <div className={styles.root}>
      {combos.map((row: string[]) => (
        <div key={row[0]} className={styles.cardComboRow}>
          {row.map((combo: string) => (
            <CardComboBox
              key={combo}
              combo={combo}
              color={color}
              selecting={selecting}
              setSelecting={setSelecting}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
