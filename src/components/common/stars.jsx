import React from 'react';

function Stars (props) {
  const getClassName = (rating) => {
    if ( rating === undefined ) {
      return 'stars stars-small'
    } else {
      return `stars stars-small stars-small-${ rating.toFixed(1)[ 0 ] }-${ rating.toFixed(1)[ 2 ] }`;
    }
  };
  
  let rating = props.searchListReviews[ props.productID ];
  
  let className = getClassName(rating);
  return (
    <div id="search-stars-container">
            <span className="search-star-graphic">
            <i className={ className }></i>
            <span className="search-star-graphic-review-count">
              <span className="search-star-graphic-total-reviews">
                  <a href="#"><strong>{ rating }</strong></a>
              </span>
            </span>
            </span>
    </div>
  );
}

export default Stars;
