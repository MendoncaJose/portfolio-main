// Import images
import Image3 from '../images/optivini.png';
import Image2 from '../images/optivini1.png';
import Image1 from '../images/optivini2.png';
// Import icons
import {
	FiGithub,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Software Development Project',
		publishDate: 'Sep 26, 2022 - Current',
		tags: 'Full-Stack',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Website',
			img: Image1,
		},
		{
			id: 2,
			title: 'Leafleat API',
			img: Image2,
		},
		{
			id: 3,
			title: 'Dashboard',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'OptiVini',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Full-Stack Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://optivini.netlify.app',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Optivini is a winemaking process management software. This software allows the user to manage all stages of the wine production process, from grape quality control to bottling. Optivini allows the user to register vineyards, plots, grape varieties, and all the resources involved in wine production, whether human, material, or natural. The user can view satellite maps of the vineyards, with their respective plots and all their information. It is possible to register and schedule all types of interventions in the vineyards (maintenance, treatment, harvesting), as well as assign staff to tasks, optimizing the use of available human resources.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Bootstrap',
					'PHP',
					'LeaFleat API',
					'Weatherbit API'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Competition is ruthless. Producers are excellent, wines are extraordinary, and the same can be said about the infrastructure. However, according to our perception, there is still a lot of room for improvement in terms of organization. It is with a view to combating this "gap" that our solution "OPTIVINI" emerges, which aims to digitize and optimize the wine production process.',
			},
			{
				id: 2,
				details:
					'OPTIVINI is a winemaking process management software for both small and medium-sized producers/bottlers and large companies in the sector. This application was designed to provide support in various areas: economic, technical, and administrative management of the vineyard and the winery.',
			},
			{
				id: 3,
				details:
					"This solution aims to cover the entire wine-making process from when the vine leaves the nursery to the consumer's glass.",
			},
			{
				id: 4,
				details:
					'Last but not least is data collection. Collecting and analyzing data enables the producer to predict yields, potential surpluses or shortfalls, and accordingly forecast costs and revenues.In short, the more efficient the entire production process, the better the profitability. At the same time, controlling production allows the customer to focus on promoting and selling wines.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'GitHub',
				icon: <FiGithub />,
				url: 'https://github.com/MendoncaJose/OptiVini',
			},
		],
	},
	RelatedProject: {
		Projects: [
			
			
		],
	},
};
