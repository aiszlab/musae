import type { WaterfallProps } from "./types";
import React, { useMemo, type ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    column: {
        flex: 1
    }
})

const Sequential = ({ children, columns }: Required<Omit<WaterfallProps, 'sequential'>>) => {

    const _children = useMemo(() => {
        const groupedColumns = children.reduce<[ReactNode[][], number]>(([grouped, addedIndex], item) => {
            const next = addedIndex + 1
            return [grouped, next >= columns ? 0 : next]
        }, [new Array<ReactNode[]>(columns).fill([]), 0])
    }, [children])

    return <div></div>
}

export default Sequential