import { useEffect, useRef } from 'react'

const useScroller = (className: string) => {
  const trigger = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
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
  }, [className])

  return trigger
}

export default useScroller
