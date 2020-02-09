import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
export default function Filtering () {
	return (
		<ProductConsumer>
			{({ min, max, price, search, company, shipping, handleChange, storeProducts }) => {
				let companies = new Set();
				companies.add('all');
				// for (let product in storeProducts) {
				// 	companies.add(storeProducts[product]['company']);
				// }
				storeProducts.forEach((item) => {
					companies.add(item.company);
				});
				companies = [ ...companies ];
				// console.log(minPrice, maxPrice);

				return (
					<div className="row my-5">
						<div className="col-10 mx-auto">
							<FilterWrapper>
								<div>
									{/* text search */}
									<label htmlFor="search">search products</label>
									<input
										type="text"
										name="search"
										id="search"
										onChange={handleChange}
										value={search}
										className="filter-item"
									/>
									{/* end oftext search */}
								</div>
								{/* category search */}
								<div>
									<label htmlFor="company">company</label>
									<select
										// style={{ width: '100%' }}
										name="company"
										id="company"
										className="filter-item"
										onChange={handleChange}
										value={company}
									>
										{companies.map((item, index) => (
											<option key={index} value={item}>
												{item}
											</option>
										))}
									</select>
								</div>
								{/* end of category search */}
								{/* price range */}
								<div>
									<label htmlFor="price">
										<p className="mb-2">
											product price :<span>$ {price}</span>{' '}
										</p>
									</label>

									<input
										type="range"
										name="price"
										id="price"
										min={min}
										max={max}
										className="filter-price"
										value={price}
										onChange={handleChange}
									/>
								</div>
								{/* end of price range */}
								{/*  free shippin */}
								<div>
									<label htmlFor="shipping" className="mx-2">
										free shipping
									</label>
									<input
										type="checkbox"
										name="shipping"
										checked={shipping && true}
										id="shipping"
										onChange={handleChange}
									/>
								</div>
								{/* end of free shippin */}
							</FilterWrapper>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	label {
		font-weight: bold;
		text-transform: capitalize;
	}
	.filter-item,
	.filter-price {
		display: block;
		width: 100%;
		background: transparent;
		border-radius: 0.3rem;
		border: 2px solid var(--darkGrey);
	}
`;
