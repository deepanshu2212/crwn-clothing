import hats from '../../assets/hats.jpg';
import suits from '../../assets/suits.jpg';
import sneaker from '../../assets/sneakers.jpg';
import men from '../../assets/men.jpg';
import women from '../../assets/women2.jpg';
const INITIAL_STATE = {
    sections:[
        {
          title: 'hats',
          imageUrl: `${hats}`,
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: `${suits}`,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: `${sneaker}`,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: `${women}`,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: `${men}`,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
