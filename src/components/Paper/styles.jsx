import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    borderRadius: '4px'
  },
  squared: {
    borderRadius: 0
  },
  outlined: {
    border: `1px solid ${theme.palette.border}`
  }
}));
