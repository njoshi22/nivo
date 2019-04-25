/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { BasicTooltip } from '@nivo/core'

const LinePointTooltip = memo(({ point }) => {
    return (
        <BasicTooltip
            id={
                <span>
                    x: <strong>{point.data.x}</strong>, y: <strong>{point.data.y}</strong>
                </span>
            }
            enableChip={true}
            color={point.serieColor}
        />
    )
})

LinePointTooltip.displayName = 'LinePointTooltip'
LinePointTooltip.propTypes = {
    point: PropTypes.object.isRequired,
}

export default LinePointTooltip