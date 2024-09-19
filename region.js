function loadRegion(region) {
    const regionContent = document.getElementById("region-content");
  
    if (region === "APAC") {
      regionContent.innerHTML = `
        <div class="hero">
          <div class="hero-image">
            <img src="images/mainimage.png" class="img-fluid" alt="APAC Image" />
          </div>
        </div>`;
    } else if (region === "Europe") {
      regionContent.innerHTML = `
        <div class="hero">
          <div class="hero-image">
            <img src="images/DATA & AI PRODUCT MANAGEMENT.png" class="img-fluid" alt="Europe Image" />
          </div>
        </div>`;
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
  