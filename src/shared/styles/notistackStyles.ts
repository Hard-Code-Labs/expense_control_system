import { MaterialDesignContent } from 'notistack'
import styled, { CSSObject } from '@emotion/styled'

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
      borderRadius: '20px',
  },
  '&.notistack-MuiContent-info': {
      borderRadius: '20px',
  },
  '&.notistack-MuiContent-warning': {
      borderRadius: '20px',
  },
  '&.notistack-MuiContent-error': {
      borderRadius: '20px',
      whiteSpace: 'break-spaces' as CSSObject['whiteSpace'],
  },
}));

export const customStyles ={
  success: StyledMaterialDesignContent,
  info: StyledMaterialDesignContent,
  warning: StyledMaterialDesignContent,
  error: StyledMaterialDesignContent,
}