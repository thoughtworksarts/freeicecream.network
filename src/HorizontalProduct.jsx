import { imageURL } from './utils';

const HorizontalProduct = ({
  image,
  altText
}) => {
  return (
    <div className='fic-horizontal-item'>
      <div className='fic-horizontal-item-image'>
        <img src={imageURL(image)} alt={altText} />
      </div>
      <div className='fic-horizontal-item-cta'>
        <div className='fic-horizontal-item-cta-rating-and-price'>
          <img src={imageURL('stars.png')} alt={altText} />
          <span>$0.00</span>
        </div>
        <div className='fic-horizontal-item-cta-button'>
          <button className='fic-item-view-button'>
            View
          </button>
        </div>
      </div>
    </div>
  )
};

export default HorizontalProduct;
