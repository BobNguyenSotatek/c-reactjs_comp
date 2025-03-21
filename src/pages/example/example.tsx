import './example.scss';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { AppBox, AppDateRangePicker } from '../../components/base';
import { type TypeTypography } from '../../shared/utils/theme';
import { useState } from 'react';
import Inputs from 'src/components/inputs/Inputs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Example() {
  const [radioValueSelected, setRadioValueSelected] = useState<string>('');
  const [checked, setChecked] = useState([true, true, true]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <AppBox p={3}>
        <Stack spacing={3}>
          <Divider>Typography</Divider>
          <Grid container>
            <Grid item xs={4}>
              <Divider>Typography - REG</Divider>
              <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" component="div" gutterBottom>
                  Title 1
                </Typography>
                <Typography variant="h2" gutterBottom component="div">
                  h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom component="div">
                  h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom component="div">
                  h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                  h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="copy" gutterBottom component="div">
                  copy
                </Typography>
                <Typography variant="body" gutterBottom component="div">
                  body
                </Typography>
                <Typography variant="label" gutterBottom component="div">
                  label
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                  caption
                </Typography>
                <Typography variant="small" gutterBottom component="div">
                  small
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Divider>Typography - MED</Divider>
              <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" fontWeight="medium" component="div" gutterBottom>
                  Title 1
                </Typography>
                <Typography variant="h2" fontWeight="medium" gutterBottom component="div">
                  h2. Heading
                </Typography>
                <Typography variant="h3" fontWeight="medium" gutterBottom component="div">
                  h3. Heading
                </Typography>
                <Typography variant="h4" fontWeight="medium" gutterBottom component="div">
                  h4. Heading
                </Typography>
                <Box
                  // component='span'
                  sx={{
                    typography: 'h5' as TypeTypography,
                    fontWeight: 'medium',
                  }}
                >
                  h5
                </Box>
                <Typography variant="h5" fontWeight="medium" gutterBottom component="div">
                  h5. Heading
                </Typography>
                <Typography variant="h6" fontWeight="medium" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="copy" fontWeight="medium" gutterBottom component="div">
                  copy
                </Typography>
                <Typography variant="body" fontWeight="medium" gutterBottom component="div">
                  body
                </Typography>
                <Typography variant="label" fontWeight="medium" gutterBottom component="div">
                  label
                </Typography>
                <Typography variant="caption" fontWeight="medium" gutterBottom component="div">
                  caption
                </Typography>
                <Typography variant="small" fontWeight="medium" gutterBottom component="div">
                  small
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Divider>Typography - BOLD</Divider>
              <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" fontWeight="bold" component="div" gutterBottom>
                  Title 1
                </Typography>
                <Typography variant="h2" fontWeight="bold" gutterBottom component="div">
                  h2. Heading
                </Typography>
                <Typography variant="h3" fontWeight="bold" gutterBottom component="div">
                  h3. Heading
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom component="div">
                  h4. Heading
                </Typography>
                <Typography variant="h5" fontWeight="bold" gutterBottom component="div">
                  h5. Heading
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="copy" fontWeight="bold" gutterBottom component="div">
                  copy
                </Typography>
                <Typography variant="body" fontWeight="bold" gutterBottom component="div">
                  body
                </Typography>
                <Typography variant="label" fontWeight="bold" gutterBottom component="div">
                  label
                </Typography>
                <Typography variant="caption" fontWeight="bold" gutterBottom component="div">
                  caption
                </Typography>
                <Typography variant="small" fontWeight="bold" gutterBottom component="div">
                  small
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider>Input</Divider>
          <Inputs />

          <Divider>DateRangePicker</Divider>
          <AppDateRangePicker />

          <Divider>Radio</Divider>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radioValueSelected}
            onChange={(event) => setRadioValueSelected(event.target.value)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <FormControlLabel value="a" control={<Radio />} label="Catalogyo main Category" />
            <FormControlLabel value="b" control={<Radio />} label="Product" />
          </RadioGroup>

          <Divider>Checkbox</Divider>
          <Box>
            <FormControlLabel control={<Checkbox defaultChecked />} label={'Checked'} />
            <FormControlLabel control={<Checkbox />} label={'UnChecked'} />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.Mui-disabled': { color: '#B1B5C3' },
                  }}
                  checked
                  disabled
                />
              }
              label={'Checked, disabled'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.Mui-disabled': { color: '#B1B5C3' },
                  }}
                  disabled
                />
              }
              label={'UnChecked, disabled'}
            />
          </Box>
          <Box mt={'1rem'}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[0] && checked[1] && checked[2]}
                  onChange={(event) => {
                    setChecked((prevState) =>
                      prevState.map((item) => item === event.target.checked)
                    );
                  }}
                />
              }
              label={'All'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[0]}
                  onChange={(event) =>
                    setChecked((prevState) => {
                      prevState[0] = event.target.checked;
                      return [...prevState];
                    })
                  }
                />
              }
              label={'A'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[1]}
                  onChange={(event) =>
                    setChecked((prevState) => {
                      prevState[1] = event.target.checked;
                      return [...prevState];
                    })
                  }
                />
              }
              label={'B'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked[2]}
                  onChange={(event) =>
                    setChecked((prevState) => {
                      prevState[2] = event.target.checked;
                      return [...prevState];
                    })
                  }
                />
              }
              label={'C'}
            />
            <Button
              onClick={() => {
                console.log(checked);
              }}
            >
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <FormControlLabel
              sx={{
                position: 'relative',
                flexDirection: 'row-reverse',
              }}
              slotProps={{
                typography: {
                  sx: {
                    borderRadius: '6px',
                    border: '1px solid transparent',
                    backgroundColor: '#ff00000d',
                    transition: 'background-color .15s ease,border-color .15s ease',
                    paddingRight: '50px',
                  },
                },
              }}
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    position: 'absolute',
                    '&.Mui-checked': {
                      '& + .MuiFormControlLabel-label': {
                        backgroundColor: '#fb090921',
                        border: '1px solid red',
                      },
                    },
                  }}
                />
              }
              label={
                <Box padding="12px" flex={1}>
                  <Typography>Label</Typography>
                  <Typography variant="caption">Content</Typography>
                </Box>
              }
            />
            <Stack
              component="label"
              direction="row-reverse"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                position: 'relative',
                width: '100%',
                '& .Mui-checked': {
                  '& + .abc': {
                    backgroundColor: '#fb090921',
                    border: '1px solid red',
                  },
                },
              }}
            >
              <Checkbox
                sx={{
                  position: 'absolute',
                }}
              />
              <Box
                padding="12px"
                flex={1}
                className="abc"
                sx={{
                  borderRadius: '6px',
                  border: '1px solid transparent',
                  backgroundColor: '#ff00000d',
                  transition: 'background-color .15s ease,border-color .15s ease',
                  userSelect: 'none',
                  cursor: 'pointer',
                  paddingRight: '50px',
                }}
              >
                <Typography>Label</Typography>
                <Typography variant="caption">Content</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Box
              component="label"
              sx={{
                display: 'inline-flex',
                position: 'relative',
                '& input[type=checkbox]:checked': {
                  '&:after': {
                    transform: 'translateX(2.5em)',
                  },
                  '& ~ .icon-en': {
                    opacity: 0,
                    transform: 'translateX(-0.75em) scale(0.75)',
                  },
                  '& ~ .icon-vn': {
                    opacity: 1,
                    transform: 'translateX(-1.75em)',
                    transitionDelay: '0.15s',
                  },
                },
                '& .icon-switch': {
                  position: 'absolute',
                  fontSize: '1em',
                  top: '0.375em',
                  right: '0.375em',
                  transition: 'opacity 0.15s, transform 0.15s',
                  userSelect: 'none',
                },
                '& .icon-en': {
                  transitionDelay: '0.15s',
                  right: '0.6em',
                },
                '& .icon-vn': {
                  opacity: 0,
                  transform: 'translateX(-0.75em) scale(0.75)',
                  transitionDelay: '0.15s',
                },
              }}
            >
              <CustomizedSwitch />
              <Typography component="span" className="icon-switch icon-vn">
                VN
              </Typography>
              <Typography component="span" className="icon-switch icon-en">
                EN
              </Typography>
            </Box>
          </Box>

          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
          ></DatePicker>
        </Stack>
      </AppBox>
    </>
  );
}

const CustomizedSwitch = styled((props) => <input type="checkbox" {...props} />)`
  appearance: none;
  padding: 0;
  margin: 0;
  width: 5em;
  height: 2.5em;
  border-radius: 2em;
  box-shadow:
    0 0 0 0.125em hsla(223, 90%, 50%, 0),
    0.125em 0.125em 0.25em hsla(223, 90%, 10%, 0.2);
  cursor: pointer;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: antiquewhite;
  }
  :after {
    content: '';
    position: absolute;
    width: 1.75em;
    height: 1.75em;
    top: 0.375em;
    left: 0.375em;

    border-radius: 50%;
    background-color: gray;
    z-index: 2;
    transition:
      background-color 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95),
      transform 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95);
  }
`;
