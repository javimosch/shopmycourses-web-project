angular.module('shopmycourse.services')

/**
 * @name Configuration
 * @function Service
 * @memberOf shopmycourse.services
 * @description Configuration de l'application
*/

.factory('Configuration', function () {
  return {
    //apiEndpoint: 'http://localhost:3000/',
    //apiEndpoint: 'http://shopmycourses.herokuapp.com/',
    apiEndpoint: 'https://ruby-shop-mc-clear-skies-1944-javoche.c9users.io/',
    //apiEndpoint: 'http://shopmycourses-prod.herokuapp.com/',
    errors: {
      SCHEDULE_ALREADY_EXIST: 'Vous avez déjà déposé une disponibilité',
      VALIDATION_CODE_ERROR: 'Votre code de validation est incorrect',
      LEMONWAY_SERVER_ERROR: 'Une erreur liée à votre paiement est survenue',
      WALLET_ERROR: 'Une erreur liée à votre paiement est survenue',
      VALIDATION_CODE_ERROR: 'Une erreur est survenue lors de la validation',
      EMPTY_CART: 'Vous devez remplir votre panier',
      COMPLETED_DELIVERY: 'Vous avez une livraison en cours, vous ne pouvez pas annuler votre disponibilité'
    },
    success: {
      ORDER_DONE: 'La commande a été effectuée',
      RATING_DONE: 'Votre avis a bien été pris en compte'
    }
  };
});
