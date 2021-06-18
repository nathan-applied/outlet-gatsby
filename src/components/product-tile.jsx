import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'


const ProductTile = props => {
  
  console.log(props)    
  
  let item = props.prod;

  let product_link = item.product_url ? item.product_url : `https://www.roomstogo.com/furniture/product/${item.title.split(' ').join('-').toLowerCase()}/${item.sku}?utm_source=browseproduct&utm_medium=patiofurniture&utm_term=${item.sku}&utm_content=${item.title}&utm_campaign=feed`;			

  return (
    <>      
		<a className="product-tile" href={product_link} target="_blank">
			{item.sale_flag == '1' ? (<div className="sale_flag">SALE</div>) : ('')}
			<div className="item-content" data-sku={item.sku}>
					<div className="img-holder"><img className="img " src={item.friendly_image_url} data-src={item.friendly_image_url}   /></div>
					
					<div className="item-name">           								
							<div className="title">{trimTitle(item.title)}</div>
							{item.free_shipping ? (<div className="free_shipping">FREE SHIPPING</div>): ''}
							<div className={item.sale_flag=='1' ? `pricing sale`:`pricing`}><span className="orig">${item.price}</span></div>       
					</div>                                                         
			</div>
					
			<div className="qv"><div className="buy-now">Buy Now</div></div>
		</a>
    </>
  )
}

function formatPrice (num) {
	return parseFloat(num).toFixed(2).toString();
}

function trimTitle (title) {	
	return ((title.length > 50) ? (title.indexOf(',')!==-1 ? title.split(',')[0] : title.split('.')[0]) : title).split(' ').slice(0,10).join(' ');
}


export default ProductTile



