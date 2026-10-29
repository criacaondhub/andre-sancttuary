'use client'
import { Fragment } from 'react'
import { motion, useTransform, type MotionValue } from 'framer-motion'

type Props = {
  text: string
  progress: MotionValue<number>
  // fatia do progresso em que este texto acende (para encadear vários textos no mesmo bloco)
  range?: [number, number]
}

export function RevealWords({ text, progress, range = [0, 1] }: Props) {
  const words = text.split(' ')
  const [start, end] = range
  const step = (end - start) / words.length

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <Word progress={progress} range={[start + i * step, start + (i + 1) * step]}>{word}</Word>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  )
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return <motion.span className="reveal-word" style={{ opacity }}>{children}</motion.span>
}
