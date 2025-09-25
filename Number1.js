
const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const clearBtn = document.getElementById('clearBtn');

    let isDrawing = false;

    // Set default stroke color
    ctx.strokeStyle = colorPicker.value;

    // Update stroke color when color picker changes
    colorPicker.addEventListener('input', () => {
      ctx.strokeStyle = colorPicker.value;
    });

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
      isDrawing = false;
    });

    // Clear canvas functionality
    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
