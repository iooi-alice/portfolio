import { IMAGES } from '@/constants/images'
import { PATH } from '@/constants/path'

const {
  tickytocky_url,
  ohou_url,
  ggf_url,
  ggf_library_url,
  mingle_url,
  mingle_library_url,
} = PATH

const {
  tickytocky_thumbnail,
  ohouse_thumbnail,
  ggf_thumbnail,
  ggf_ui_thumbnail,
  mingle_thumbnail,
  mingle_ui_thumbnail,
} = IMAGES

export const PROJECT_LIST = [
  {
    id: 0,
    path: tickytocky_url,
    project_name: 'Ticky Tocky',
    tech_stack: ['HTML', 'SCSS', 'JavaScript'],
    headline: 'The Smartest Way to Manage Projects',
    desc: 'A web-based service designed to facilitate the management and sharing of team project schedules',
    image: tickytocky_thumbnail,
  },
  {
    id: 1,
    path: ohou_url,
    project_name: 'ohouse',
    tech_stack: ['HTML', 'SCSS', 'JavaScript'],
    headline: 'Clone Coding Project',
    desc: 'This is a clone coding project of Ohouse, designed to gain experience in implementing website features and UI.',
    image: ohouse_thumbnail,
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
    image: mingle_thumbnail,
  },
  {
    id: 5,
    path: mingle_library_url,
    project_name: 'Mingle Design System',
    tech_stack: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    headline: 'Mingle UI Library',
    desc: 'Mingle-UI is a comprehensive design system built with Tailwind CSS and Storybook, consistently used across the Mingle service',
    image: mingle_ui_thumbnail,
  },
]
