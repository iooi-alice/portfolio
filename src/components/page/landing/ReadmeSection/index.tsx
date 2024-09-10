import Link from 'next/link'

import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import classNames from 'classnames/bind'

import { CONTRIBUTION_MONTH } from '@/constants/contributionMonth'
import { README_ABOUT } from '@/constants/readmeAbout'
import { README_SKILL } from '@/constants/readmeSkill'
import useScroller from '@/hooks/useScroller'
import { getRandomColor } from '@/utils/getRandomColor'
import { getRandomPosition } from '@/utils/getRandomPosition'

import styles from './ReadmeSection.module.scss'

const cx = classNames.bind(styles)
const TOTAL_BOXES = 817

interface SkillSectionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

const ReadmeSection = ({ setTitle }: SkillSectionProps) => {
  const trigger = useScroller(cx('is-motion'), setTitle)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleBoxEnter = (e: MouseEvent<HTMLDivElement>) => {
    const activeBox = e.target as HTMLDivElement

    activeBox.classList.add(cx('active'))
    activeBox.style.setProperty('--x', getRandomPosition())
    activeBox.style.setProperty('--y', getRandomPosition())
  }

  return (
    <section ref={trigger} className={cx('section-readme')}>
      <h2 className={cx('section-title')}>README.md</h2>

      <div className={cx('readme')}>
        <div className={cx('readme-link')}>
          <Link href='https://github.com/iooi-alice' target='_blank'>
            iooi-alice
          </Link>
          / README<span className={cx('md')}>.md</span>
        </div>
        <div className={cx('readme-content')}>
          <h3 className={cx('readme-content-title')}>Hi, I&#39;m Heesoo 👋</h3>
          <div className={cx('readme-about')}>
            <h4 className={cx('readme-about-subTitle')}>About Me</h4>
            <ul className={cx('about-list')}>
              {README_ABOUT.map((about) => (
                <li key={`about-key-${about.id}`} className={cx('about-item')}>
                  <span>{about.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={cx('contributions')}>
        <h3 className={cx('contributions-title')}>
          2,505 contributions in the last year
        </h3>
        <div className={cx('graph-overview-box')}>
          <ul className={cx('calender-list')}>
            {CONTRIBUTION_MONTH.map((month, idx) => (
              <li className={cx('calender-item')} key={`month-key-${idx}`}>
                <span className={cx('calender-item-label')}>{month}</span>
              </li>
            ))}
          </ul>

          <div className={cx('graph-content')}>
            <ul className={cx('skill-list')}>
              {README_SKILL.map((item) => (
                <li className={cx('skill-item')} key={`skill-key-${item.id}`}>
                  <div className={cx('skill-box')}>
                    <h4 className={cx('skill-box-title')}>{item.skill}</h4>
                    <p className={cx('skill-box-desc')}>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={cx('graph-overview')}>
              {Array.from({ length: TOTAL_BOXES }, (_, idx) => (
                <div
                  key={`box-key-${idx}`}
                  style={{
                    backgroundColor: isMounted ? getRandomColor() : '#30363e',
                  }}
                  className={cx('box')}
                  onMouseEnter={handleBoxEnter}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadmeSection
