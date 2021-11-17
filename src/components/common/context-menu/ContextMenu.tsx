import styles from './ContextMenu.css'

interface IContextMenu {
  data: IContextMenuData[]
  position: { x: number; y: number }
  opened: boolean
  id: number
}

export interface IContextMenuData {
  label: string
  onClick: (id: number) => void
}

export const ContextMenu = ({ data, position, opened, id }: IContextMenu) => {
  return (
    opened && (
      <div
        className={styles.wrapper}
        style={{ top: position.y, left: position.x }}
        data-testid = 'context'
      >
        <ul data-testid = 'list'>
          {data.map((item, idx) => (
            <li
              onClick={() => item.onClick(id)}
              className={styles.item}
              key={idx}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}
