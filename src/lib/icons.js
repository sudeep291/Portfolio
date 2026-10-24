import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import {
  ArrowDownToLine,
  Cloud,
  CodeXml,
  Database,
  Filter,
  GitBranch,
  HardDrive,
  Mail,
  Network,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

// Brand icons used by `socials` in src/data/portfolio.js
export const brandIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
  email: Mail,
}

// Icons used by skill groups and workflow cards
export const featureIcons = {
  // skills
  code: CodeXml,
  bigdata: Database,
  cloud: Cloud,
  modeling: Network,
  pipelines: Workflow,
  tools: GitBranch,
  // workflow steps
  ingest: ArrowDownToLine,
  bronze: HardDrive,
  silver: Filter,
  gold: Sparkles,
  optimize: Zap,
}
