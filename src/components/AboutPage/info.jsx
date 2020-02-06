import React from 'react';
import Titile from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<img
							src={aboutBcg}
							className="img-fluid img-thumbnail"
							alt="about  image"
							style={{ background: 'var(--darkGrey' }}
						/>
					</div>
					<div className="col-10 mx-auto col-md-6 my-3">
						<Titile title="About us" />
						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa porro nemo temporibus qui,
							dolores blanditiis asperiores quidem perspiciatis dicta? Aspernatur!
						</p>

						<p className="text-lead text-muted my-3">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa porro nemo temporibus qui,
							dolores blanditiis asperiores quidem perspiciatis dicta? Aspernatur!Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Dolorum hic totam non ipsum, consequatur sunt.
						</p>
						<button className="main-link" type="button" style={{ marginTop: '2rem' }}>
							More info
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Info;
