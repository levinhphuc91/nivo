/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { spring } from 'react-motion'
import { rgb } from 'd3-color'

export const colorMotionSpring = (_color, _config) => {
    const color = rgb(_color)

    if (!_config) {
        return {
            colorR: color.r,
            colorG: color.g,
            colorB: color.b,
        }
    }

    const config = Object.assign({}, _config, { precision: 1 })

    return {
        colorR: spring(color.r, config),
        colorG: spring(color.g, config),
        colorB: spring(color.b, config),
    }
}

export const getInterpolatedColor = ({ colorR, colorG, colorB }) =>
    `rgb(${Math.round(colorR)},${Math.round(colorG)},${Math.round(colorB)})`
