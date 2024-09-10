import { useState } from 'react'

import classNames from 'classnames/bind'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import AboutSection from './AboutSection'
import HeroSection from './HeroSection'
import styles from './Landing.module.scss'
import ProjectSection from './ProjectSection'
import ReadmeSection from './ReadmeSection'
import WorksSection from './WorksSection'

const cx = classNames.bind(styles)

const LandingContent = () => {
  const [title, setTitle] = useState('Hello')

  return (
    <main className={cx('container')}>
      <Header title={title} />
      <HeroSection setTitle={setTitle} />
      <AboutSection setTitle={setTitle} />
      <WorksSection setTitle={setTitle} />
      <ProjectSection setTitle={setTitle} />
      <ReadmeSection setTitle={setTitle} />
      <Footer />
    </main>
  )
}

export default LandingContent
