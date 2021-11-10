import {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  ContextMenu,
  IContextMenuData,
} from '../components/common/context-menu/ContextMenu'
interface IContextMenuProvider {
  children: ReactElement
  contextMenuData: IContextMenuData[]
}

const ContextMenuProvider = ({
  children,
  contextMenuData,
}: IContextMenuProvider): ReactElement => {
  const [opened, setOpened] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const id = useRef(null)

  const onContextMenu = (event: MouseEvent) => {
    const movieId = +event.target.dataset.movie
    if (!movieId) {
      setOpened(false)
      return
    }

    event.preventDefault()
    id.current = movieId
    const { pageX, pageY } = event
    setPosition({ x: pageX, y: pageY })
    setOpened(true)
  }

  useEffect(() => {
    document.oncontextmenu = onContextMenu
    document.onclick = () => setOpened(false)
  }, [])

  return (
    <>
      <ContextMenu
        opened={opened}
        data={contextMenuData}
        position={position}
        id={id.current}
      />
      {children}
    </>
  )
}

export default ContextMenuProvider
