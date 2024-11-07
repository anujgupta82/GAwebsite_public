function loadRegion(region) {
  const regionContent = document.getElementById("region-content");
  const pricingCard = document.getElementById("pricing-card");

  if (region === "APAC") {
    regionContent.innerHTML = `
      <div class="hero">
        <div class="hero-image">
          <img src="images/AI_PM.png" class="img-fluid" alt="APAC Image" />
        </div>
      </div>`;

    pricingCard.innerHTML = `
      <h3 class="mb-3">Course Price</h3>
      <h2 class="mb-3">Rs 19,999 <small class="text-muted">(Including taxes)</small></h2>
      <p class="mb-4">Unlock the full potential of AI with our comprehensive course.</p>
      <a href="contact-apac.html" class="btn btn-primary">Enroll Now</a>`;
  
  } else if (region === "Europe") {
    regionContent.innerHTML = `
      <div class="hero">
        <div class="hero-image">
          <img src="images/AI_PM.png" class="img-fluid" alt="Europe Image" />
        </div>
      </div>`;

    pricingCard.innerHTML = `
      <h3 class="mb-3">Course Price</h3>
      <h2 class="mb-3">$ 599 <small class="text-muted">(Including taxes)</small></h2>
      <p class="mb-4">Master the power of AI with our expertly designed course for Europe.</p>
      <a href="contact-europe.html" class="btn btn-primary">Enroll Now</a>`;
  
  } else if (region === "USA") {
    regionContent.innerHTML = `
      <div class="hero">
        <div class="hero-image">
          <img src="images/AI_PM.png" class="img-fluid" alt="USA Image" />
        </div>
      </div>`;

    pricingCard.innerHTML = `
      <h3 class="mb-3">Course Price</h3>
      <h2 class="mb-3">$ 599 <small class="text-muted">(Including taxes)</small></h2>
      <p class="mb-4">Join the AI revolution with our specialized USA-focused course.</p>
      <a href="contact-usa.html" class="btn btn-primary">Enroll Now</a>`;
  
  } else if (region === "MiddleEast") {
    regionContent.innerHTML = `
      <div class="hero">
        <div class="hero-image">
          <img src="images/AI_PM.png" class="img-fluid" alt="Middle East Image" />
        </div>
      </div>`;

    pricingCard.innerHTML = `
      <h3 class="mb-3">Course Price</h3>
      <h2 class="mb-3">$ 599 <small class="text-muted">(Including taxes)</small></h2>
      <p class="mb-4">Learn AI with tailored content for Middle East professionals.</p>
      <a href="contact-middleeast.html" class="btn btn-primary">Enroll Now</a>`;
  }
}




  document.addEventListener('DOMContentLoaded', function() {
    // Check if the region is not selected yet
    const selectedRegion = document.getElementById("selected-region").innerText;
  
    if (selectedRegion === "Select Region") {
      const regionModal = new bootstrap.Modal(document.getElementById('regionModal'));
      regionModal.show();  // Show the modal
    }
  });
  

  const form = document.getElementById('cta-form');
        const result = document.getElementById('result');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            result.innerHTML = "Please wait...";

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
        });
  


