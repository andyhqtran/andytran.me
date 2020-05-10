const props = [
  'animate',
  'custom',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragTransition',
  'dragPropagation',
  'exit',
  'inherit',
  'initial',
  'layoutTransition',
  'onAnimationComplete',
  'onAnimationStart',
  'onDrag',
  'onDragStart',
  'onDragEnd',
  'onDirectionLock',
  'onHoverStart',
  'onHoverEnd',
  'onPan',
  'onPanEnd',
  'onPanStart',
  'onTap',
  'onTapCancel',
  'onTapStart',
  'onUpdate',
  'positionTransition',
  'style',
  'transformTemplate',
  'transition',
  'variants',
  'whileHover',
  'whileTap'
]

const regex = new RegExp(`^(${props.join('|')})$`)

export const motionOmit = props => {
  const next = {}
  for (const key in props) {
    if (regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

export const motionPick = props => {
  const next = {}
  for (const key in props) {
    if (!regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}
