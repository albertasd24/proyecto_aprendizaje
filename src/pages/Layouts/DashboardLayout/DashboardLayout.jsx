import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';
import PropTypes from 'prop-types';

const DashboardLayout = ({}) => {
	return (
		<div className='dashboardlayout'>
 			<div className='sidebar'>
				<figure>
					<img src="" alt="Image User" />
				</figure>
				<div className='sidebar-links'>
					<a href="">item 1</a>
					<a href="">item 2</a>
					<a href="">item 3</a>
					<a href="">item 4</a>
				</div>
			</div>
			<section className='dashboard-content'>
				<Outlet />
			</section>
 		</div>
	);
};

DashboardLayout.propTypes = {};

export default DashboardLayout;