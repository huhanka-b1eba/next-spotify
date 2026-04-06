import React from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: number | string
    height?: number | string
    radius?: number | string
}

const Skeleton = ({ width, height, radius, style, className, ...rest }: SkeletonProps) => {
    return (
        <div
            className={[styles.skeleton, className].filter(Boolean).join(' ')}
            style={{
                width,
                height,
                borderRadius: radius,
                ...style,
            }}
            aria-hidden
            {...rest}
        />
    )
}

export default Skeleton
