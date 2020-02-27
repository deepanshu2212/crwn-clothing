const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: require('../../assets/shop-img/hats/brown-brim.png'),
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: require('../../assets/shop-img/hats/blue-beanie.png'),
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: require('../../assets/shop-img/hats/brown-cowboy.png'),
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: require('../../assets/shop-img/hats/grey-brim.png'),
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: require('../../assets/shop-img/hats/green-beanie.png'),
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: require('../../assets/shop-img/hats/palm-tree-cap.png'),
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: require('../../assets/shop-img/hats/red-beanie.png'),
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: require('../../assets/shop-img/hats/wolf-cap.png'),
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: require('../../assets/shop-img/hats/blue-snapback.png'),
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: require('../../assets/shop-img/sneakers/adidas-nmd.png'),
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: require('../../assets/shop-img/sneakers/yeezy.png'),
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: require('../../assets/shop-img/sneakers/black-converse.png'),
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: require('../../assets/shop-img/sneakers/white-nike-high-tops.png'),
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: require('../../assets/shop-img/sneakers/nikes-red.png'),
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: require('../../assets/shop-img/sneakers/nike-brown.png'),
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: require('../../assets/shop-img/sneakers/nike-funky.png'),
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: require('../../assets/shop-img/sneakers/timberlands.png'),
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: require('../../assets/shop-img/jackets/black-shearling.png'),
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: require('../../assets/shop-img/jackets/blue-jean-jacket.png'),
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: require('../../assets/shop-img/jackets/grey-jean-jacket.png'),
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: require('../../assets/shop-img/jackets/brown-shearling.png'),
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: require('../../assets/shop-img/jackets/brown-trench.png'),
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: require('../../assets/shop-img/womens/blue-tank.png'),
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: require('../../assets/shop-img/womens/floral-blouse.png'),
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: require('../../assets/shop-img/womens/floral-skirt.png'),
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: require('../../assets/shop-img/womens/red-polka-dot-dress.png'),
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: require('../../assets/shop-img/womens/striped-sweater.png'),
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: require('../../assets/shop-img/womens/yellow-track-suit.png'),
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: require('../../assets/shop-img/womens/white-vest.png'),
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: require('../../assets/shop-img/mens/camo-vest.png'),
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: require('../../assets/shop-img/mens/floral-shirt.png'),
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: require('../../assets/shop-img/mens/long-sleeve.png'),
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: require('../../assets/shop-img/mens/pink-shirt.png'),
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: require('../../assets/shop-img/mens/roll-up-jean-shirt.png'),
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: require('../../assets/shop-img/mens/polka-dot-shirt.png'),
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA;