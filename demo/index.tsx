import React from 'react';
import { createRoot } from 'react-dom/client';
import { faPlus, faHouse } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import { BrandUiProvider } from '../src/components/internal/BrandUiProvider';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '../src/styles/global.css';

import { Button, NegativeButton, NeutralButton, PositiveButton } from '../src/components/Button';
import { TextField } from '../src/components/TextField';
import { Checkbox } from '../src/components/Checkbox';
import { Radio } from '../src/components/Radio';
import { Switch } from '../src/components/Switch';
import { Select } from '../src/components/Select';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '../src/components/Dialog';
import { Card, CardHeader, CardContent } from '../src/components/Card';
import { Chip } from '../src/components/Chip';
import { Avatar } from '../src/components/Avatar';
import { Tab, TabContext, TabList, TabPanel } from '../src/components/Tabs';

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  border: '1px solid var(--color-neutral-94)',
  borderRadius: 'var(--border-radius-rounded)',
  background: 'var(--color-surface-highest, #fff)',
};

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [tab, setTab] = React.useState('1');
  const [selectValue, setSelectValue] = React.useState('a');

  return (
    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, margin: '0 auto' }}>
      <div>
        <h1 style={{ marginBottom: 4 }}>Brand System</h1>
        <p style={{ color: 'var(--color-on-surface-placeholder)', marginTop: 0 }}>
          Component show-case &mdash; 11 components driven by a shared design-token system.
        </p>
      </div>

      <section style={sectionStyle}>
        <h2>Button</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" icon={faPlus}>With icon</Button>
          <NegativeButton variant="contained">Negative</NegativeButton>
          <NeutralButton variant="outlined">Neutral</NeutralButton>
          <PositiveButton variant="contained">Positive</PositiveButton>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>TextField</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', maxWidth: 600 }}>
          <TextField label="Label" placeholder="Placeholder" fullWidth={false} />
          <TextField label="Search" type="search" fullWidth={false} />
          <TextField label="Password" type="password" fullWidth={false} />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Checkbox</h2>
        <Checkbox label="Checkbox label" />
      </section>

      <section style={sectionStyle}>
        <h2>Radio</h2>
        <RadioGroup>
          <Radio label="Option 1" value="1" />
          <Radio label="Option 2" value="2" />
        </RadioGroup>
      </section>

      <section style={sectionStyle}>
        <h2>Switch</h2>
        <Switch label="Switch label" />
      </section>

      <section style={sectionStyle}>
        <h2>Select</h2>
        <Select
          label="Label"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value as string)}
          fullWidth={false}
          startIcon={faHouse}
        >
          <MenuItem value="a">Option A</MenuItem>
          <MenuItem value="b">Option B</MenuItem>
        </Select>
      </section>

      <section style={sectionStyle}>
        <h2>Dialog</h2>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm">
          <DialogTitle closeButtonProps={{ 'aria-label': 'Close' }}>Dialog title</DialogTitle>
          <DialogContent><DialogContentText>Dialog body content.</DialogContentText></DialogContent>
          <DialogActions>
            <Button positive variant="contained" onClick={() => setDialogOpen(false)}>OK</Button>
          </DialogActions>
        </Dialog>
      </section>

      <section style={sectionStyle}>
        <h2>Card</h2>
        <Card style={{ maxWidth: 320 }}>
          <CardHeader title="Card title" />
          <CardContent>Card content goes here.</CardContent>
        </Card>
      </section>

      <section style={sectionStyle}>
        <h2>Chip</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip label="Semantic blue" color="semBlue" />
          <Chip label="Category green" color="catGreen" variant="ghost" />
          <Chip label="Semantic red" color="semRed" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Avatar</h2>
        <Avatar primaryText="Jane Doe" secondaryText="jane@example.com" showLabel />
      </section>

      <section style={sectionStyle}>
        <h2>Tabs</h2>
        <TabContext value={tab}>
          <TabList onChange={(_, v) => setTab(v)}>
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
          </TabList>
          <TabPanel value="1">Tab one content</TabPanel>
          <TabPanel value="2">Tab two content</TabPanel>
        </TabContext>
      </section>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <BrandUiProvider>
      <App />
    </BrandUiProvider>,
  );
}
