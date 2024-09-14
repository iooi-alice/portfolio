import Image from 'next/image'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IMAGES } from '@/constants/images'
import { WORK_LIST } from '@/constants/workList'
import useScroller from '@/hooks/useScroller'
import { useUpdateWidth } from '@/hooks/useUpdateWidth'

import styles from './WorksSection.module.scss'

const cx = classNames.bind(styles)
const { work_spin, arrow_up } = IMAGES

interface WorksSectionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

const WorksSection = ({ setTitle }: WorksSectionProps) => {
  gsap.registerPlugin(ScrollTrigger)

  const trigger = useScroller(cx('is-motion'), setTitle)
  const workSectionRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const { listRef } = useUpdateWidth({ setContainerWidth })

  useEffect(() => {
    if (containerWidth && listRef.current) {
      const pin = gsap.fromTo(
        listRef.current,
        {
          translateX: 0,
        },
        {
          translateX: containerWidth,
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: workSectionRef.current,
            start: 'center center',
            end: '100%',
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        },
      )

      return () => {
        pin.kill()
      }
    }
  }, [trigger, setTitle, listRef, containerWidth])

  return (
    <section ref={trigger} className={cx('section-works')}>
      <h2 className='visually-hidden'>My Works</h2>
      <div ref={workSectionRef} className={cx('section-works-inner')}>
        <div className={cx('works-cover')}>
          <div className={cx('works-cover-intro')}>
            <h3 className={cx('works-cover-intro-title')}>WORKS</h3>
            <p className={cx('works-cover-intro-desc')}>
              Network monitoring dashboard UI that visualizes real-time outage
              and facility status data, allowing users to quickly identify and
              resolve issues.
            </p>
          </div>
          <div className={cx('works-cover-arrowbox')}>
            <Image
              className={cx('spin')}
              src={work_spin.url}
              alt={work_spin.alt}
              width={160}
              height={160}
            />
            <Image
              className={cx('arrow-up')}
              src={arrow_up.url}
              alt={arrow_up.alt}
              width={48}
              height={48}
            />
          </div>
        </div>
        <ul ref={listRef} className={cx('works-list')}>
          {WORK_LIST.map((item) => (
            <li className={cx('works-item')} key={item.id}>
              <div className={cx('work-card', `${item.id}`)}>
                <div className={cx('work-card-inner')}>
                  <div className={cx('work-card-textbox')}>
                    <h3 className={cx('textbox-title')}>{item.title}</h3>
                    <p className={cx('textbox-description')}>{item.desc}</p>
                  </div>
                  <div className={cx('work-card-imgbox')}>
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      width={583}
                      height={328}
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WorksSection
