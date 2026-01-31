// import { useStore } from './store';

// export const ClearButton = () => {
//   const clearCanvas = useStore((state) => state.clearCanvas);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//       <button
//         onClick={clearCanvas}
//         style={{
//           backgroundColor: '#f44336',
//           color: '#fff',
//           border: 'none',
//           padding: '8px 16px',
//           borderRadius: '6px',
//           cursor: 'pointer',
//         }}
//       >
//         Clear Canvas
//       </button>
//     </div>
//   );
// };
import { useStore } from './store';

export const ClearButton = () => {
  const clearCanvas = useStore((state) => state.clearCanvas);

  const handleClear = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear the entire canvas?'
    );

    if (confirmed) {
      clearCanvas();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <button
        onClick={handleClear}
        style={{
          backgroundColor: '#f44336',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Clear Canvas
      </button>
    </div>
  );
};
