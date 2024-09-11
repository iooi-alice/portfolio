import Image from 'next/image'
import Link from 'next/link'

import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

import classNames from 'classnames/bind'
import { gsap } from 'gsap'

import { PROJECT_LIST } from '@/constants/projectList'
import useScroller from '@/hooks/useScroller'

import styles from './ProjectSection.module.scss'

const cx = classNames.bind(styles)

interface ProjectSectionProps {
  setTitle: Dispatch<SetStateAction<string>>
}

const ProjectSection = ({ setTitle }: ProjectSectionProps) => {
  const trigger = useScroller(cx('is-motion'), setTitle)

  const titleBoxRef = useRef(null)
  const title_1_ref = useRef(null)
  const title_2_ref = useRef(null)
  const projectListRef = useRef(null)

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top bottom',
          end: 'top 20%',
          scrub: true,
        },
      })
      .fromTo(
        title_1_ref.current,
        { x: '-100%' },
        { x: '0%', ease: 'none', duration: 5 },
        '<',
      )
      .fromTo(
        title_2_ref.current,
        { x: '100%' },
        { x: '0%', ease: 'none', duration: 5 },
        '<',
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: projectListRef.current,
          start: 'top bottom',
          end: 'top bottom',
          scrub: true,
        },
      })
      .to(
        titleBoxRef.current,
        {
          position: 'fixed',
          ease: 'none',
          left: 0,
          top: 0,
          width: '100%',
          duration: 10,
          zIndex: 1,
        },
        '<',
      )
      .fromTo(
        projectListRef.current,
        { margin: '0 auto' },
        {
          margin: '100vh 0 auto',
          position: 'relative',
          zIndex: 10,
          duration: 1,
        },
        '<',
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: projectListRef.current,
          start: 'bottom center',
          end: 'bottom 20%',
          scrub: 1,
        },
      })
      .to(titleBoxRef.current, { zIndex: 0 })
      .to(title_1_ref.current, { x: '100%', ease: 'none', duration: 5 }, '<')
      .to(title_2_ref.current, { x: '-100%', ease: 'none', duration: 5 }, '<')
  }, [])

  return (
    <section ref={trigger} className={cx('section-projects')}>
      <h2 className='visually-hidden'>My Projects</h2>
      <div ref={titleBoxRef} className={cx('projects-titlebox')}>
        <p ref={title_1_ref} className={cx('projects-titlebox-1')}>
          MY
        </p>
        <p ref={title_2_ref} className={cx('projects-titlebox-2')}>
          PROJECTS
        </p>
      </div>

      <ul ref={projectListRef} className={cx('projects-list')}>
        {PROJECT_LIST.map((item) => (
          <li className={cx('projects-item')} key={`project-key-${item.id}`}>
            <Link
              className={cx('project-card')}
              href={item.path}
              target='_blank'
            >
              <div className={cx('project-card-imgbox')}>
                <Image
                  className={cx('imgbox-image')}
                  src={item.image.url}
                  alt={item.image.alt}
                  fill
                  unoptimized
                />
                <ul className={cx('tech-list')}>
                  {item.tech_stack.map((stack, index) => (
                    <li
                      className={cx('tech-list-item')}
                      key={`tech-stack-${index}`}
                    >
                      <div className={cx('tag')}>{stack}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cx('project-card-textbox')}>
                <h3 className={cx('title')}>{item.project_name}</h3>
                <div className={cx('info')}>
                  <p className={cx('info-description')}>{item.desc}</p>
                  <span>2024</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection
