import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

import { ACTIVE_SECTION_TO_TITLE } from '@/constants/activeSectionToTitle'

const useScroller = (
  className: string,
  setTitle: Dispatch<SetStateAction<string>>,
) => {
  const trigger = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const classParts = entry.target.classList[0].split('_')
          const activeSectionName = classParts[1] ?? null

          if (
            activeSectionName &&
            activeSectionName in ACTIVE_SECTION_TO_TITLE
          ) {
            entry.target.classList.add(className)
            setTitle(
              ACTIVE_SECTION_TO_TITLE[
                activeSectionName as keyof typeof ACTIVE_SECTION_TO_TITLE
              ],
            )
          }
        } else {
          entry.target.classList.remove(className)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    })

    const currentTrigger = trigger.current

    if (currentTrigger) {
      observer.observe(currentTrigger)
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger)
      }
    }
  }, [className, setTitle])

  return trigger
}

export default useScroller
