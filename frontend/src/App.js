import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { ClearButton } from './clear';
import './theme.css';
import { ThemeToggle } from './components/themeToggle';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <ClearButton />
       <div
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 1000,
        }}
      >
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
