
      const bmiTitle = document.getElementById('bmiTitle');
      const heightInput = document.querySelector('#height');
      const weightInput = document.querySelector('#weight');
      const resultParagraph = document.querySelector('#result');

      function calculateBMI() {
        // Check if the inputs are empty
        if (!heightInput.value.trim() || !weightInput.value.trim()) {
          alert('Please enter both height and weight.');
          return;
        }

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
          const bmi = weight / ((height / 100) ** 2);
          resultParagraph.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
          
          // Modify the HTML or text content of at least one element in response to user interaction.
          bmiTitle.innerHTML = 'BMI Result:';
        } else {
          resultParagraph.textContent = 'Please enter valid height and weight.';
        }
      }

      // Use at least two Browser Object Model (BOM) properties or methods.
      window.addEventListener('resize', handleResize);

      function handleResize() {
        console.log('Window resized!');
      }
    