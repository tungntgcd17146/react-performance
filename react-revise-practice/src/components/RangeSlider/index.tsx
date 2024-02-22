import * as React from 'react'
import { memo } from 'react'
import { useTheme } from '@mui/material'
import { themes } from '@/themes'

//mui
import Typography from '@mui/material/Typography'
import Slider, { SliderProps } from '@mui/material/Slider'
import Box from '@mui/material/Box'

export interface Props extends SliderProps {
  valueLabelFormat?: (value: number) => string
  min?: number
  max?: number
  onChangeValue?: (value: number[]) => void
  label?: string
  wrapperStyles?: React.CSSProperties
  rangeValue?: number[]
}
export const valuetext = (value: number) => {
  return `$${value}`
}

const RangeSlider = ({
  label,
  valueLabelFormat = valuetext,
  min = 0,
  max = 100,
  rangeValue,
  onChangeValue,
  wrapperStyles,
  ...rest
}: Props) => {
  const theme = useTheme()

  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChangeValue?.(newValue as number[])
  }

  const sliderStyles = React.useMemo(
    () => ({
      '& .MuiSlider-thumb': {
        border: `2px solid ${themes.colors.blue[600]}`,
        color: themes.colors.white[600]
      },
      '& .MuiSlider-track': {
        color: themes.colors.blue[600]
      },
      color: theme.palette.grey[100],
      minWidth: 200
    }),
    [theme.palette.grey]
  )

  return (
    <Box sx={wrapperStyles}>
      {label && (
        <Typography variant='body1' sx={{ marginBottom: '8px' }}>
          {label}
        </Typography>
      )}
      <Slider
        data-testid='RangeSlider'
        sx={sliderStyles}
        min={min}
        max={max}
        value={rangeValue}
        onChange={handleChange}
        valueLabelDisplay='auto'
        valueLabelFormat={valueLabelFormat}
        {...rest}
      />
    </Box>
  )
}

export default memo(RangeSlider)
