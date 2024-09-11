import { Dispatch, SetStateAction, useState } from 'react'

import classNames from 'classnames/bind'

import { ABOUT_DESCRIPTIONS } from '@/constants/aboutDescriptionList'
import { EXPERTISE_LIST } from '@/constants/expertiseList'
import useScroller from '@/hooks/useScroller'

import styles from './AboutSection.module.scss'

const cx = classNames.bind(styles)

interface AboutSectionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

const AboutSection = ({ setTitle }: AboutSectionProps) => {
  const trigger = useScroller(cx('is-motion'), setTitle)
  const [isActive, setIsActive] = useState(0)

  const handleClickMenu = (activeId: number) => {
    setIsActive(activeId)
  }

  return (
    <section ref={trigger} className={cx('section-about')}>
      <h2 className='visually-hidden'>About Me</h2>
      <ul className={cx('expertise-list')}>
        {EXPERTISE_LIST.map((item) => (
          <li className={cx('expertise-item')} key={`expertise-key-${item.id}`}>
            <button
              className={cx('btn-menu', { 'is-active': isActive === item.id })}
              type='button'
              aria-label='btn-expertise-menu'
              onClick={() => handleClickMenu(item.id)}
            >
              <span className={cx('btn-menu-text')} data-menu={item.menu}>
                {item.menu}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ul className={cx('description-list')}>
        {ABOUT_DESCRIPTIONS.map((desc) => (
          <li
            className={cx('description-item', {
              'is-open': isActive === desc.id,
            })}
            key={`desc-key-${desc.id}`}
          >
            <div className={cx('description-card')}>
              <h4 className={cx('description-title')}>{desc.title}</h4>
              <div className={cx('description-textbox')}>
                <p className={cx('description-text')} lang='ko-KR'>
                  {desc.desc_ko}
                </p>
                <p className={cx('description-text', 'sm-hidden')}>
                  {desc.desc_en}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutSection
