
  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(error => console.error('Service Worker Registration Failed:', error));
  }
  
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', event => {
      const selectedPlan = event.target.dataset.plan;
      alert(`You selected the ${selectedPlan} plan! Please contact us to complete the payment.`);
    });
  });
  
  if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(swReg => {
          swReg.showNotification('Welcome to Fitness Pro!', {
            body: 'Stay consistent and reach your fitness goals!',
            icon: '/icons/icon-192x192.png',
            vibrate: [100, 50, 100],
          });
        });
      }
    });
  }

  document.getElementById('notify-button').addEventListener('click', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(swReg => {
        swReg.showNotification('Stay Active!', {
          body: 'Have you completed your workout today?',
          icon: '/icons/icon-192x192.png',
          vibrate: [200, 100, 200],
        });
      });
    }
  });
  