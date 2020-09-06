import React from 'react';
import './card.component.scss';
import {store} from '../../store/store';

const Card = (quiz) => {
	const {title} = quiz;
	return (
	<div className='quiz-collections'>
		{/* <div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/> */}
		<div className="collection-footer">
			<span className="name">{title}</span>
			{/* <span className="price">{price}</span> */}
		</div>
		{/* <CustomButton onClick={() => addItem(item)} inverted> Add To Cart </CustomButton> */}
	</div>
	)}

export default Card;