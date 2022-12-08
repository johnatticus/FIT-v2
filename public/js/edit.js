const userId = document.querySelector('input[name="user-id"]').value;

const editFormHandler = async function(event) {
    event.preventDefault();
    
    const firstnameEl = document.querySelector('#first-name-input');
    const lastnameEl = document.querySelector('#last-name-input');
    const emailEl = document.querySelector('#email-input');
    // const passwordEl = document.querySelector('#password-input');
    const cityEl = document.querySelector('#city-input');
    const stateEl = document.querySelector('#state-input');
    const fitnessEl = document.querySelector('#fitness-level-input');
    const availabilityEl = document.querySelector('#availability-input');
    const genderEl = document.querySelector('#gender-input');
    // const gymEl = document.querySelector('#gym-input');
    
    const response = await fetch(`/api/results/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
            firstnameEl,
            last_name: lastnameEl.value,
            email: emailEl.value,
            // password: passwordEl.value,
            city: cityEl.value,
            state: stateEl.value,
            fitness_level: fitnessEl.value,
            availability: availabilityEl.value,
            gender: genderEl.value,
            // gym_id: gymEl.value

        }),
        headers: { 'Content-Type': 'application/json' },
});
    
      if (response.ok) {
        document.location.replace('/api/profile');
        alert('Profile has been updated.')
      } else {
        alert('Failed to update profile.');
      }
    };
  
  
  document
    .querySelector('#edit-form')
    .addEventListener('submit', editFormHandler);