import React, { ReactNode, useContext } from 'react'
import Context from './context'
import { stringify } from '@aiszlab/relax/class-name'
import stylex from '@stylexjs/stylex'

const styles = stylex.create({
    default: {
        flex: 1
    }
})

const Panel = ({ children }: { children?: ReactNode }) => {

    const { classNames } = useContext(Context)

    const styled = {
        default: stylex.props(styles.default)
    }

    return (
        <div className={stringify(classNames.panel, styled.default.className)} style={styled.default.style}>
            {children}
        </div>
    )
}

export default Panel