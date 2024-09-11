import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

interface useUpdateWidthProps {
  setContainerWidth: Dispatch<SetStateAction<number>>
}

export const useUpdateWidth = ({ setContainerWidth }: useUpdateWidthProps) => {
  const listRef = useRef(null)

  const handleUpdateWidth = () => {
    if (listRef.current) {
      const sectionElement = listRef.current as HTMLElement

      const sectionWidth = sectionElement.scrollWidth
      const viewportWidth = window.innerWidth
      const translateAmount = viewportWidth - viewportWidth * 0.5 - sectionWidth
      setContainerWidth(translateAmount)
    }
  }

  useEffect(() => {
    handleUpdateWidth()
    window.addEventListener('resize', handleUpdateWidth)

    return () => {
      window.removeEventListener('resize', handleUpdateWidth)
    }
  }, [setContainerWidth])

  return { listRef }
}
