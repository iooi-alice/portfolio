import { IMAGES } from '@/constants/images'
import { PATH } from '@/constants/path'

const {
  ggf_url,
  ggf_library_url,
  mingle_url,
  mingle_library_url,
  tickytocky_url,
} = PATH

const {
  ticky_tocky,
  apple_watch,
  ggf_thumbnail,
  ggf_ui_thumbnail,
  mingle,
  mingle_ui,
} = IMAGES

export const PROJECT_LIST = [
  {
    id: 0,
    path: tickytocky_url,
    project_name: 'Ticky Tocky',
    tech_stack: ['HTML', 'SCSS', 'JavaScript'],
    headline: 'The Smartest Way to Manage Projects',
    desc: 'A web-based service designed to facilitate the management and sharing of team project schedules',
    image: ticky_tocky,
  },
  {
    id: 1,
    path: tickytocky_url,
    project_name: 'Apple Watch',
    tech_stack: ['HTML', 'SCSS', 'JavaScript'],
    headline: 'The Smartest Way to Manage Projects',
    desc: 'A web-based service designed to facilitate the management and sharing of team project schedules',
    image: apple_watch,
  },
  {
    id: 2,
    path: ggf_url,
    project_name: 'GGF/Good Game Friends',
    tech_stack: ['Next', 'TypeScript', 'SCSS', 'Storybook'],
    headline: "Best Teamwork IT's Up To You",
    desc: 'GGF is a community website for gamers who love games, where gamers can communicate and play games together',
    image: ggf_thumbnail,
  },
  {
    id: 3,
    path: ggf_library_url,
    project_name: 'GGF Design System',
    tech_stack: ['React', 'TypeScript', 'SCSS', 'Storybook'],
    headline: 'GGF UI Library',
    desc: 'GGF UI is an open-source React component library. It is designed for easy accessibility, allowing anyone to use its components effortlessly',
    image: ggf_ui_thumbnail,
  },
  {
    id: 4,
    path: mingle_url,
    project_name: 'Mingle',
    tech_stack: ['React', 'TypeScript', 'Tailwind'],
    headline: 'Make Every Moment Memorable',
    desc: 'Take control with our user-friendly dashboard, allowing you to organize and personalize your rolling papers, ensuring each message stands out',
    image: mingle,
  },
  {
    id: 5,
    path: mingle_library_url,
    project_name: 'Mingle Design System',
    tech_stack: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    headline: 'Mingle UI Library',
    desc: 'Mingle-UI is a comprehensive design system built with Tailwind CSS and Storybook, consistently used across the Mingle service',
    image: mingle_ui,
  },
]
