let currentStep = 1;

function nextStep() {
    const current = document.getElementById(`step${currentStep}`);
    current.style.display = 'none';
    currentStep++;
    const next = document.getElementById(`step${currentStep}`);
    next.style.display = 'block';
    document.getElementById('prevBtn').disabled = false;
    if (currentStep === 5) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    }
}

function prevStep() {
    const current = document.getElementById(`step${currentStep}`);
    current.style.display = 'none';
    currentStep--;
    const prev = document.getElementById(`step${currentStep}`);
    prev.style.display = 'block';
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
    if (currentStep === 1) {
        document.getElementById('prevBtn').disabled = true;
    }
}

function showCarImage() {
    const manufacturer = document.getElementById('carManufacturer').value;
    const year = document.getElementById('carModelYear').value;
    const model = document.getElementById('carModel').value;
    const carImage = document.getElementById('carImage');
    // Ensure that the path to images is correct and the filenames match the pattern 'manufacturer_year_model.jpg'
    carImage.src = `images/${manufacturer}_${year}_${model}.jpg`;
    nextStep();
}

// Function to populate the car model year dropdown based on the selected manufacturer
function populateCarModelYears() {
    const yearSelect = document.getElementById('carModelYear');
    yearSelect.disabled = false; // Enable the year select
    const manufacturer = document.getElementById('carManufacturer').value;
    const carModelYearDropdown = document.getElementById('carModelYear');
    carModelYearDropdown.innerHTML = ''; // Clear existing options
    const years = carModelYears[manufacturer];
    if (years) {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'اختر سنة صنع السيارة';
        carModelYearDropdown.appendChild(defaultOption);
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            carModelYearDropdown.appendChild(option);
        });
    }
}

// Function to populate the car model dropdown based on the selected manufacturer and year
function populateCarModels() {
    const manufacturer = document.getElementById('carManufacturer').value;
    const year = document.getElementById('carModelYear').value;
    const carModelDropdown = document.getElementById('carModel');
    carModelDropdown.disabled = false; // Enable the model select
    carModelDropdown.innerHTML = ''; // Clear existing options
    const models = carModels[manufacturer][year];
    if (models) {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'اختر طراز السيارة';
        carModelDropdown.appendChild(defaultOption);
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            carModelDropdown.appendChild(option);
        });
    }
}

// Define car model years and models for each manufacturer
const carModelYears = {
    Toyota: [2022, 2021, 2020, 2019], // Example years for Toyota
    Honda: [2022, 2021, 2020, 2019], // Example years for Honda
    BMW: [2022, 2021, 2020, 2019] // Example years for BMW
    // Add more manufacturers and their respective years as needed
};

// Define car models for each manufacturer and year
const carModels = {
    Toyota: {
        2022: ['Model 1', 'Model 2'],
        2021: ['Model 1', 'Model 2'],
        2020: ['Model 1', 'Model 2'],
        2019: ['Model 1', 'Model 2']
        // Add more years and models for Toyota as needed
    },
    Honda: {
        2022: ['Model 1', 'Model 2'],
        2021: ['Model 1', 'Model 2'],
        2020: ['Model 1', 'Model 2'],
        2019: ['Model 1', 'Model 2']
        // Add more years and models for Honda as needed
    },
    BMW: {
        2022: ['Model 1', 'Model 2'],
        2021: ['Model 1', 'Model 2'],
        2020: ['Model 1', 'Model 2'],
        2019: ['Model 1', 'Model 2']
        // Add more years and models for BMW as needed
    }
    // Add more manufacturers and their respective years and models as needed
};

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextStep);
document.getElementById('prevBtn').addEventListener('click', prevStep);
document.getElementById('carManufacturer').addEventListener('change', populateCarModelYears);
document.getElementById('carModelYear').addEventListener('change', populateCarModels);
document.getElementById('carModel').addEventListener('change', showCarImage);
