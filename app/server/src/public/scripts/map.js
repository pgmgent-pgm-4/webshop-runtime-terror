mapboxgl.accessToken = 'pk.eyJ1IjoiamFtaWVsZWVoYXJ0IiwiYSI6ImNrbGdsdTZteTB6b3Qyb3ByMXdjYTNwM3gifQ.3iNNnj9R2ClP0-83QjXhZA';

const center = [3.73440, 51.02997];

const mapElement = document.getElementById('map');
if (mapElement !== null) {
  setupMap(center);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jamieleehart/ckpcraqbh09fm17o85yzd4ktl',
    center: center,
    pitch: 60,
    zoom: 16,
  });

  const popUp = new mapboxgl.Popup({ 
    className: 'marker-popup',
    closeButton: false,
  })
    .setHTML("<p>Foreestelaan 1,</p><p>9000 Gent</p>")
    .setMaxWidth("300px")

  const marker = new mapboxgl.Marker({color: '#F4BE18'})
    .setLngLat(center)
    .setPopup(popUp)
    .addTo(map);

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-left');

  map.scrollZoom.disable();

  const contactForm = document.getElementById('right');
  const contactFormToggle = document.querySelector('.contact-form-toggle'); 
  const collapsed = document.querySelector('.collapsed')

  contactFormToggle.addEventListener('click', (e) => {
    
    var padding = {};
    
    if (collapsed.classList.contains('collapsed')) {
      // Remove the 'collapsed' class from the class list of the element, this sets it back to the expanded state.
      contactForm.classList.remove('collapsed');
      console.log(collapsed)
      
      padding['right'] = 576; // In px, matches the width of the sidebars set in .sidebar CSS class
      map.easeTo({
        padding: padding,
        duration: 1000 // In ms, CSS transition duration property for the sidebar matches this value
      });
      } else {
      padding['right'] = 0;
      // Add the 'collapsed' class to the class list of the element
      contactForm.classList.add('collapsed');
      console.log(collapsed)
      map.easeTo({
        padding: padding,
        duration: 1000
      });
    }
 
  })
  
}




