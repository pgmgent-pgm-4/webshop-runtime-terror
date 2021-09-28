// (() => {
//   const app = {
//     initialize () {
//       this.cacheElements();
//       this.registerEventListeners();
//     },
//     cacheElements () {
//       this.wishlistButtons = document.querySelectorAll('.wishlistButton');
//       console.log(this.wishlistButtons)
      
//     },
//     registerEventListeners () {
//       if (this.wishlistButtons !== null) {
//         this.wishlistButtons.forEach(async (wishlistButton) => {
//           wishlistButton.addEventListener('click', (e) => {
//             const UserId = Number(localStorage.getItem('userId'));
//             const productId =  e.target.dataset.productid || e.target.parentNode.dataset.productid || e.target.parentNode.parentNode.dataset.productid;
//             console.log(UserId);
//             console.log(productId);
//             const response = await fetch(`/api/users/wishlist/${UserId}`)
//             });
//             const data = await response.json();
//             console.log(data);
//         });
//           // const response = await fetch('/api/wishlist', {
//           //   method: 'POST',
//           //   headers: {
//           //   'Accept': 'application/json',
//           //   'Content-Type': 'application/json'
//           //   },
//           //   body: JSON.stringify({
//           //   createdAt: Date.now(),
//           //   updatedAt: Date.now(),
//           //   UserId: userId,
//           //   ProductId: productId,
//           //   })
//           // });
//           // const data = await response.json();
//         // });
//       };
//     },
//   };
//   app.initialize();
// })();